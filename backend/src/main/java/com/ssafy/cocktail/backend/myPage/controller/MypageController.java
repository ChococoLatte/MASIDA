package com.ssafy.cocktail.backend.myPage.controller;

import com.ssafy.cocktail.backend.domain.dto.BaseResponseBody;
import com.ssafy.cocktail.backend.domain.entity.User;
import com.ssafy.cocktail.backend.myPage.dto.LikeBookmarkCocktail;
import com.ssafy.cocktail.backend.myPage.dto.response.LikeCocktailsRes;
import com.ssafy.cocktail.backend.myPage.service.MypageBookmarkService;
import com.ssafy.cocktail.backend.myPage.service.MypageCommentService;
import com.ssafy.cocktail.backend.myPage.service.MypageLikeService;
import com.ssafy.cocktail.backend.oauth.service.OAuthService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Tag(name = "mypage", description = "마이페이지 API")
@RestController
@AllArgsConstructor
@CrossOrigin(origins = {"http://localhost:3000", "https://j8b208.p.ssafy.io"})
@RequestMapping("api/mypage")
public class MypageController {

	private final OAuthService oAuthService;
	private final MypageLikeService mypageLikeService;
	private final MypageBookmarkService mypageBookmarkService;
	private final MypageCommentService mypageCommentService;

	@GetMapping("/cnt")
	public ResponseEntity<?> getLikeBookmarkCnt(@RequestHeader("Authorization") String accessToken) {

		return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
	}


	@GetMapping("/likes")
	public ResponseEntity<?> getLikeCocktailList(@RequestHeader Map<String, String> data) {
		String accessToken = data.get("authorization");

		// 토큰이 없는 경우,
		if(accessToken == null) {
			return ResponseEntity.status(400).body(LikeCocktailsRes.of(400, "토큰이 비어있습니다", new ArrayList<>()));
		}

		// 토큰이 유효한 경우,
		try {
			// 해당 사용자 가져오기
			User user = oAuthService.getUser(accessToken);
			// 해당 유저가 좋아요한 칵테일 리스트
			List<LikeBookmarkCocktail> likeCocktailList = mypageLikeService.getLikeCocktailList(user);
			return ResponseEntity.status(200).body(LikeCocktailsRes.of(200, "Success", likeCocktailList));
		} 
		// 토큰이 유효하지 않은 경우
		catch (Exception e) {
			return ResponseEntity.status(400).body(LikeCocktailsRes.of(400, "존재하지 않는 사용자입니다.", new ArrayList<>()));
		}
	}

	@GetMapping("/bookmarks")
	public ResponseEntity<?> getBookmarkCocktailList(@RequestHeader("Authorization") String accessToken) {

		return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
	}


}
