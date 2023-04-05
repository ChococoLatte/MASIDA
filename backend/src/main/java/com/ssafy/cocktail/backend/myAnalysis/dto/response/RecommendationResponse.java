package com.ssafy.cocktail.backend.myAnalysis.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class RecommendationResponse {
	@JsonProperty("cocktailIdList")
	private List<Long> cocktailIdList;

	// 기본 생성자가 필요하거나, 생성자에 디폴트 값이 포함된다면 추가해줍니다.
	public RecommendationResponse() {}

	public List<Long> getCocktailIdList() {
		return cocktailIdList;
	}
}
