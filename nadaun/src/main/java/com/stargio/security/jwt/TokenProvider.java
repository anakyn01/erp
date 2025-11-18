package com.stargio.security.jwt;
import java.security.Key;
import java.util.Date;

import org.springframework.stereotype.Component;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@Component //이클래스를 빈으로 등록 다른 곳에서 @Autowired로 주입할수 있음
public class TokenProvider {

		private final Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256);
		/*
		Key는 JWT 서명(Signature)에 사용됩니다.
		HS256 알고리즘은 대칭 키 알고리즘으로, 토큰을 생성할 때와 검증할 때 같은 키를 사용합니다.
		Keys.secretKeyFor(SignatureAlgorithm.HS256)를 사용하면 안전하게 
		랜덤 키를 생성할 수 있습니다.
		*/
		private final long validityInMs = 1000 * 60 * 60; // 1시간
		/*
		validityInMs는 토큰 만료 시간입니다.
		여기서는 1시간(1000ms * 60초 * 60분)으로 설정되어 있습니다.
		*/
		//토큰 생성 메서드
		public String createToken(String email) {
			Date now = new Date();//현재시각
			Date expiry = new Date(now.getTime() + validityInMs);
			
			return Jwts.builder()//통해 JWT를 빌드합니다.
			.setSubject(email)// 토큰에 이메일(주체) 저장 사용자 식별자로 사용합니다.
			.setIssuedAt(now)// 토큰 발급 시간을 설정합니다.
			.setExpiration(expiry)// 토큰 만료 시간을 설정합니다.
			.signWith(key)// 서명 (HS256, key 사용)
			//위에서 만든 키를 사용해 서명합니다. 서명이 있어야 토큰 변조 여부를 검증할 수 있습니다.
			.compact();// 토큰 생성
			//최종 JWT 문자열로 변환합니다. 
			//예를 들어 결과는 eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey... 형태가 됩니다.
		}
		
//토큰에서 이메일 추출
public String getEmail(String token) {
	return Jwts.parserBuilder().setSigningKey(key).build()
	//JWT 파서를 생성하고, 서명 검증에 사용할 키를 설정합니다.
.parseClaimsJws(token).getBody().getSubject();
//.parseClaimsJws(token) JWT를 파싱하고 서명 검증을 수행합니다.
//..getBody().getSubject() 토큰에 저장된 sub 클레임(여기서는 이메일)을 반환합니다.
}

//토큰유효성 
public boolean validateToken( String token) {
	try {
Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token);		
		return true;// 서명 검증 및 만료 시간 체크 완료
	}catch (Exception e) {
		return false;// 유효하지 않은 토큰
	}
}





}
