package com.ssafy.cocktail.backend.myAnalysis.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class RecommendationRequestToPy {
	@JsonProperty("basis")
	private String basis;
	@JsonProperty("userLikeIngredient")
	private List<String> userLikeIngredient;
	@JsonProperty("userLikeList")
	private List<String> userLikeList;
	@JsonProperty("allIngredient")
	private List<String> allIngredient;

}
