package port.sm.erp.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;

import port.sm.erp.repository.MemberRepository;


@RestController //이클래스가 rest api컨트롤러 임을 나타냅니다
@RequestMapping("/auth/instagram")//주소가 길게 나올때 편하게 사용하기 위함
public class InstagramOAuthController {
	
	//인스타 그램 api관련 설정값 주입
	@Value("${instagram.client.id}")
	private String clientId;//앱 식별자
	
	@Value("${instagram.client.secret}")
	private String clientSecret;//앱 비밀키
	
	@Value("${instagram.redirect.uri}")
	private String redirectUri;//인스타그램 인증후 리다이렉트 될 url
	
	//의존성 주입 및 WebClient 생성
	private final WebClient webClient = WebClient.create();
	//Spring WebFlux에서 제공하는 비동기 HTTP클라이언트 입니다
	private final MemberRepository memberRepository;
	
	//생성자
	public InstagramOAuthController(MemberRepository memberRepository) {
		this.memberRepository = memberRepository;
	}
	
	
	
	
}
	
	
	
	
	
	
	
	
	
	
	


