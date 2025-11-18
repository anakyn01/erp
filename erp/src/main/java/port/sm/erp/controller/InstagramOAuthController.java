package port.sm.erp.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;

import port.sm.erp.entity.Member;
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
	
	//db에서 member엔티티를 조회/저장하기 위한 jpa repository
	private final MemberRepository memberRepository;
	
	//생성자
	public InstagramOAuthController(MemberRepository memberRepository) {
		this.memberRepository = memberRepository;
	}
	
	@PostMapping //클라이언트가 instagram 로그인 후 받은 code를 body로 전달해야함
	public ResponseEntity<?> login(@RequestBody Map<String, String> body){
		
		//코드추출 Instagram Authorization 서버에서 전달받은 code.
		String code = body.get("code");
		
		//Access Token요청준비 Instagram OAuth Access Token을 받기 위해 form-data 구성.
		//사용자의 인증 상태를 확인하기 위해 클라이언트가 서버로 보내는 메시지
		//웹토큰의 특징 인증 및 인가,클라이언트 측 저장,정보 담지,확장성 jwt
		//아래는 인별에 맞춘 필드들
		MultiValueMap<String, String> formData = new LinkedMultiValueMap<>();
		formData.add("client_id", clientId);
		formData.add("client_secret", clientSecret);
		formData.add("grant_type", "authorization_code");
		formData.add("redirect_uri", redirectUri);
		formData.add("code", code);
		
		//instagram 서버로 access Token요청
		Map<String, Object> tokenRes = webClient.post()
				.uri("https://api.instagram.com/oauth/access_token")
				.bodyValue(formData)
				.retrieve()//요청을 서버에 보내고 응답을 받아옵니다
				.bodyToMono(Map.class)
				//응답 body(json)을 Map형태로 변환해 mono(비동기 데이터 스트림)로 감쌉니다
				.block();//비동기 데이터스트림 동기방식으로 block하여 실제 값을 가져옵니다
		
		//Access Token추출
				String accessToken = (String)tokenRes.get("access_token");
		
		//인스타그램 그래프 api로 사용자 정보조회
		Map<String, Object> userRes = webClient.get()
				.uri("https://graph.instagram.com/me?fields=id,username&access_token=" + accessToken)
				.retrieve()
				.bodyToMono(Map.class)
				.block();
		
	    if (tokenRes == null || !tokenRes.containsKey("access_token")) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body("Instagram token response invalid");
        }
		
		
		//이부분이 {id:"281828", "username":"송원지"}
		//사용자 정보 파싱
		String providerId = userRes.get("id").toString();
		String username = userRes.get("username").toString();
		
		//db에서 기존 사요자 조회 or 새로 생성
	    Member member = memberRepository
	    .findByProviderAndProviderId("instagram", providerId)
	    .orElseGet(() -> {
	    	Member m = new Member();
	    	m.setProvider("instagram");
	    	m.setProviderId(providerId);
	    	m.setUsername(username);
	    	return memberRepository.save(m);
	    });
	    
	    // 4️⃣ 민감 정보 제외한 DTO로 반환
        Map<String, Object> responseBody = new HashMap<>();
        responseBody.put("id", member.getId());
        responseBody.put("username", member.getUsername());
        responseBody.put("provider", member.getProvider());
        responseBody.put("providerId", member.getProviderId());

        return ResponseEntity.ok(responseBody);
		
	}
	
	
	
	
}
	
	
	
	
	
	
	
	
	
	
	


