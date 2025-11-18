package com.stargio.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.stargio.security.jwt.JwtAuthenticationFilter;
import com.stargio.security.jwt.TokenProvider;
import com.stargio.security.oauth2.CustomOAuth2UserService;
import com.stargio.security.oauth2.OAuth2SuccessHandler;

import lombok.RequiredArgsConstructor;
/*
SecurityConfig는 Spring Security의 핵심 설정을 정의합니다.
세션을 사용하지 않음(STATLESS) → JWT 기반 인증
OAuth2 로그인을 통해 소셜 로그인 처리
로그인 성공 후 OAuth2SuccessHandler에서 JWT 발급
모든 요청에 대해 JwtAuthenticationFilter가 JWT 검증
특정 경로는 인증 없이 접근 가능
*/

@Configuration//Spring 설정 클래스임을 명시
@RequiredArgsConstructor//final 필드 자동 주입 (생성자 기반 DI)
public class SecurityConfig {
	
	private final CustomOAuth2UserService customOAuth2UserService;
//구글/네이버/카카오 등 OAuth2 제공자로부터 가져온 사용자 정보(프로필)를애플리케이션의 사용자 객체로 변환하는 로직을 담당.
	private final OAuth2SuccessHandler oAuth2SuccessHandler;
/*
OAuth2SuccessHandler
소셜 로그인 성공 시 실행되는 핸들러
주로 JWT 생성 및 프론트엔드로 전달 등의 역할 수행
*/
	private final TokenProvider tokenProvider;
/*
JWT 생성, 검증, 파싱 등의 로직 포함
*/	
	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{
		http
        .csrf(csrf -> csrf.disable())
        .sessionManagement(session -> 
            session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
        )

        .authorizeHttpRequests(auth -> auth
            .requestMatchers("/auth/**", "/oauth2/**", "/login/**").permitAll()
            .anyRequest().authenticated()
        )

        .oauth2Login(oauth -> oauth
            .userInfoEndpoint(userInfo -> 
                userInfo.userService(customOAuth2UserService)
            )
            .successHandler(oAuth2SuccessHandler) // 로그인 성공 시 JWT 전달
        );

    // JWT 필터 등록
    http.addFilterBefore(new JwtAuthenticationFilter(tokenProvider),
            UsernamePasswordAuthenticationFilter.class);

    return http.build();
}
	}
