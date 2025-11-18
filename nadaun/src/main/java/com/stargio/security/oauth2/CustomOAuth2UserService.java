package com.stargio.security.oauth2;


import java.util.Map;

import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import com.stargio.entity.User;
import com.stargio.repository.UserRepository;
import com.stargio.security.jwt.TokenProvider;

import lombok.RequiredArgsConstructor;

/*
**OAuth2 소셜 로그인(예: 카카오, 구글 등)**을 처리하면서 DB에 유저를 저장하고, JWT 토큰을 발급하여, 로그인 성공 후 프론트엔드에 토큰을 전달하는 서비스 로직입니다.
*/
@Service
@RequiredArgsConstructor//생성자를 자동 생성, userRepository, tokenProvider 주입됨
public class CustomOAuth2UserService implements OAuth2UserService<OAuth2UserRequest, OAuth2User>{
	
	private final UserRepository userRepository;
	private final TokenProvider tokenProvider;
	
	@Override
	public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
		 
		// 기본 OAuth2UserService 를 통해 유저 정보 가져오기
		OAuth2User oauth2User = new DefaultOAuth2UserService().loadUser(userRequest);
		
		//어는플랫폼인지 확인
		String provider = userRequest.getClientRegistration().getRegistrationId();
		Map<String, Object> attributes = oauth2User.getAttributes();
		/*
         * 플랫폼별 이메일 가져오기
         * - 구글: attributes.get("email")
         * - 카카오: ((Map)attributes.get("kakao_account")).get("email")
         * - 네이버: ((Map)attributes.get("response")).get("email")
         */
		String email = extractEmail(provider, attributes);
		
		if(email == null) {
			throw new OAuth2AuthenticationException("이메일을 가져올 수 없습니다.");
		}
		
		// DB에서 사용자 조회 없으면 새로 저장
		User user = userRepository.findByEmail(email).orElseGet(() ->{
			User newUser = new User();
			newUser.setEmail(email);
			newUser.setProvider(provider);
			return userRepository.save(newUser);
		});
		
		// JWT 토큰 생성
		String token = tokenProvider.createToken(email);
		
		// attributes 에 token 을 함께 담아서 프론트에 전달
		attributes.put("token",token);
		
		// Spring Security 인증을 위한 DefaultOAuth2User 생성
		return new DefaultOAuth2User(
				oauth2User.getAuthorities(),
				attributes,// 토큰 포함
				"email"// 기본 key
		);
	}

	private String extractEmail(String provider, Map<String, Object> attributes) {
		if(provider.equals("google")) {
			return (String) attributes.get("email");
		}
		
		if(provider.equals("kakao")) {
			Map<String, Object> kakaoAccount = (Map<String, Object>) attributes.get("kakao_account");
			return (String) kakaoAccount.get("email");
		}
		
		if(provider.equals("naver")) {
			Map<String, Object> response = (Map<String, Object>) attributes.get("response");
			return (String) response.get("email");
		}
		
		return null;
	}



}
