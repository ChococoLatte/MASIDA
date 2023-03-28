package com.ssafy.cocktail.backend.cocktails.service.impl;

import com.ssafy.cocktail.backend.cocktails.dto.request.CommentReq;
import com.ssafy.cocktail.backend.cocktails.service.CommentService;
import com.ssafy.cocktail.backend.domain.entity.Cocktail;
import com.ssafy.cocktail.backend.domain.entity.Comment;
import com.ssafy.cocktail.backend.domain.entity.Like;
import com.ssafy.cocktail.backend.domain.entity.User;
import com.ssafy.cocktail.backend.domain.repository.CocktailRepository;
import com.ssafy.cocktail.backend.domain.repository.CommentRepository;
import com.ssafy.cocktail.backend.oauth.service.OAuthService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@AllArgsConstructor
public class CommentServiceImpl implements CommentService {
    private CommentRepository commentRepository;
    private OAuthService oAuthService;
    private CocktailRepository cocktailRepository;

    @Override
    public boolean registerComment(String cocktailId, CommentReq commentInfo, String accessToken) {
        User user = oAuthService.getUser(accessToken); // 사용자 가져오기
        Cocktail cocktail = cocktailRepository.findCocktailById(Long.valueOf(cocktailId)); // 칵테일 가져오기
        Double curCocktailDiffculty =
                commentInfo.getCommentDifficulty().equals("하") ? 1.0 :
                commentInfo.getCommentDifficulty().equals("중") ? 2.0 : 3.0;
        commentRepository.save(
                Comment.builder()
                        .commentContent(commentInfo.getCommentContent())
                        .commentRating(commentInfo.getCommentRating())
                        .commentDifficulty(curCocktailDiffculty)
                        .commentDeleted("N")
                        .commentCreatedDate(LocalDateTime.now())
                        .commentUpdateDate(LocalDateTime.now())
                        .user(user)
                        .cocktail(cocktail)
                        .build()
        );
        List<Comment> cocktails = commentRepository.findAllByCocktailAndCommentDeleted(cocktail, "N"); // 칵테일 댓글 가져오기
        int commentSize = cocktails.size(); // 칵테일 댓글 개수
        Double prevCocktailDiffculty = cocktail.getCocktailDifficulty() == null
                ? 2.0 : cocktail.getCocktailDifficulty(); // 저장된 칵테일 난이도 가져오기
        Double newCocktailDiffculty = ((prevCocktailDiffculty * commentSize) + curCocktailDiffculty) / (commentSize + 1); // 새로운 난이도 계산
        cocktail.setCocktailDifficulty(newCocktailDiffculty); // 새로운 난이도 삽입
        cocktailRepository.save(cocktail); // 칵테일 난이도 업데이트

        return true;
    }
}
