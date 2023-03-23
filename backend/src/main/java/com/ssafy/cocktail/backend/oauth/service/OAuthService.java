package com.ssafy.cocktail.backend.oauth.service;

import com.ssafy.cocktail.backend.domain.entity.User;
import com.ssafy.cocktail.backend.oauth.dto.UserLoginInfo;

import java.io.IOException;

public interface OAuthService {
	public String loginPage();
	public UserLoginInfo loginUser(String authorize_code) throws Exception;
	// public boolean isVaildAccessToken(String accessToken, String id);
	public User getUser(String accessToken);
	public boolean logoutUser(String accessToken, boolean isdeleted);

}