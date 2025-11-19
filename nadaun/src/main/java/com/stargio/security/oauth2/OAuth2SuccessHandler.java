package com.stargio.security.oauth2;

import java.io.IOException;

import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import com.stargio.security.jwt.TokenProvider;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class OAuth2SuccessHandler implements AuthenticationSuccessHandler {

    private final TokenProvider tokenProvider;

    public OAuth2SuccessHandler(TokenProvider tokenProvider) {
        this.tokenProvider = tokenProvider;
    }

    @Override
    public void onAuthenticationSuccess(
            HttpServletRequest request,
            HttpServletResponse response,
            Authentication authentication) throws IOException, ServletException {

        // CustomOAuth2UserService에서 넣어준 attribute
        String email = (String) authentication.getName();

        // 토큰 생성
        String token = tokenProvider.createToken(email);

        // 프론트로 Redirect (token 전달)
        String redirectUrl = "http://localhost:5173/oauth2/callback?token=" + token;

        response.sendRedirect(redirectUrl);
    }
}
