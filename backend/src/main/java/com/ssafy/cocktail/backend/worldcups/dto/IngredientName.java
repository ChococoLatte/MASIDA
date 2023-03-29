package com.ssafy.cocktail.backend.worldcups.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter @Getter @ToString
public class IngredientName {
    @Schema(description = "재료 이름", example = "레몬위스키")
    @JsonProperty("ingredient_name")
    private String ingredientName;
}
