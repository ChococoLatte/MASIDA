package com.ssafy.cocktail.backend.myAnalysis.controller;

import com.ssafy.cocktail.backend.myAnalysis.dto.MyAnalysisBase;
import com.ssafy.cocktail.backend.myAnalysis.dto.response.MyAnalysisBaseRes;
import com.ssafy.cocktail.backend.myAnalysis.service.MyAnalysisUserService;
import com.ssafy.cocktail.backend.oauth.service.OAuthService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Map;

@Tag(name = "my-analysis", description = "마이페이지 상세 API")
@RestController
@AllArgsConstructor
@CrossOrigin(origins = {"http://localhost:3000", "https://j8b208.p.ssafy.io"})
@RequestMapping("api/my-analysis")
public class MyAnalysisController {
    private final MyAnalysisUserService myAnalysisUserService;
    private final OAuthService oAuthService;

    @GetMapping("/cocktail-base")
    public ResponseEntity<MyAnalysisBaseRes> analysisByUserBase(@RequestHeader Map<String, String> data ) {
        String accessToken = data.get("authorization");
        System.out.println(data.get("authorization"));

        if(accessToken !=null){
            ArrayList<MyAnalysisBase> myAnalysisBaseList = myAnalysisUserService.getAnalysisByBase(data.get("authorization"));
            return ResponseEntity.status(200).body(MyAnalysisBaseRes.of(200, "Success", myAnalysisBaseList));
        }else{
            return ResponseEntity.status(400).body(MyAnalysisBaseRes.of(400, "존재하지 않는 사용자입니다.", new ArrayList<>()));
        }
    }
}