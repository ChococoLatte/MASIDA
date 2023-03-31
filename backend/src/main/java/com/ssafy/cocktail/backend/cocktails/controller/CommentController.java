package com.ssafy.cocktail.backend.cocktails.controller;

import com.ssafy.cocktail.backend.cocktails.dto.CommentDetail;
import com.ssafy.cocktail.backend.cocktails.dto.request.CommentReq;
import com.ssafy.cocktail.backend.cocktails.dto.response.CommentRes;
import com.ssafy.cocktail.backend.cocktails.service.CommentService;
import com.ssafy.cocktail.backend.domain.dto.BaseResponseBody;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Map;

@Tag(name = "comment", description = "댓글 API")
@RestController
@AllArgsConstructor
@CrossOrigin(origins = {"http://localhost:3000", "https://j8b208.p.ssafy.io", "https://kapi.kakao.com"})
@RequestMapping("/api/comments")
public class CommentController {
    private CommentService commentService;

    @GetMapping("/{cocktail_id}")
    public ResponseEntity<CommentRes> getComments(@RequestHeader Map<String, String> data, @PathVariable("cocktail_id") String cocktailId) {
        String accessToken = data.get("Authorization");
        ArrayList<CommentDetail> commentDetails = commentService.getComments(cocktailId, accessToken);
        if (commentDetails != null) {
            boolean isWrired = commentService.isWrited(cocktailId, accessToken); // 칵테일 작성 여부 확인
            return ResponseEntity.status(200).body(CommentRes.of(200, "Success", commentDetails, isWrired));
        }
        return ResponseEntity.status(404).body(CommentRes.of(404, "Please relogin", commentDetails, false));
    }

    @PostMapping("/{cocktail_id}")
    public ResponseEntity<?> saveComment(@RequestHeader("Authorization") String accessToken, @PathVariable("cocktail_id") String cocktailId, @RequestBody CommentReq req) {
        int state = commentService.saveOrUpdateComment(cocktailId, null, req, accessToken); // 댓글 저장 또는 업데이트
        if (state == 0) { // 요청 성공
            return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
        } else if (state == 1) { // 옳바르지 않은 사용자이면
            return ResponseEntity.status(404).body(BaseResponseBody.of(404, "Please relogin"));
        } else { // 중복 댓글 등록이면
            return ResponseEntity.status(405).body(BaseResponseBody.of(405, "Duplicate comments"));
        }
    }

    @PutMapping("/{cocktail_id}/{comment_id}")
    public ResponseEntity<?> updateComment(@RequestHeader("Authorization") String accessToken, @PathVariable("cocktail_id") String cocktailId, @PathVariable("comment_id") String commentId, @RequestBody CommentReq req) {
        if (commentService.saveOrUpdateComment(cocktailId, commentId, req, accessToken) == 0) {
            return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
        }
        return ResponseEntity.status(404).body(BaseResponseBody.of(404, "Please relogin"));
    }

    @DeleteMapping("/{cocktail_id}/{comment_id}")
    public ResponseEntity<?> removeComment(@RequestHeader("Authorization") String accessToken, @PathVariable("cocktail_id") String cocktailId, @PathVariable("comment_id") String commentId) {
        if (commentService.removeComment(cocktailId, commentId, accessToken)) {
            return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
        }
        return ResponseEntity.status(404).body(BaseResponseBody.of(404, "Please relogin"));
    }
}
