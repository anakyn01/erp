package port.sm.erp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import port.sm.erp.dto.MemberRequestDTO;
import port.sm.erp.entity.Member;
import port.sm.erp.repository.MemberRepository;

/*
bcrypt는 비밀번호를 안전하게 저장하기 위한 해시함수
일반적인 해시 함수(sha-256)과 달리 비밀번호 보호에 특화된
기능을 갖고 있습니다

특징
1. 느리게 설계된 해시 함수

일부러 계산 속도가 느리게 만들어져 있어 
무차별 대입 공격(브루트포스 공격) 을 어렵게 합니다.
비용(cost factor)을 조절하여 연산 난이도를 높일 수 있어, 
컴퓨터가 빨라져도 안전성을 유지할 수 있습니다.

2. Salt(소금) 자동 생성
bcrypt는 비밀번호를 해시할 때 자동으로 랜덤 salt를 붙입니다.
같은 비밀번호라도 해시값이 다르게 나와 
레인보우 테이블 공격을 방어합니다.

3. 해시 결과에 정보 포함
해시 문자열 안에 비용(cost), 
salt, 해시값이 모두 포함되어 있어 저장·검증이 편리합니다.

📌 bcrypt를 언제 사용하나요?
웹 서비스 회원가입/로그인 시 비밀번호 저장
인증 시스템 구현
일반 데이터 암호화가 아닌 비밀번호 보호용 해시가 필요할 때
*/
@Service
public class MemberService {

    private final MemberRepository memberRepository;
    
    private final BCryptPasswordEncoder passwordEncoder;
    
    @Autowired
    public MemberService(MemberRepository memberRepository, BCryptPasswordEncoder passwordEncoder) {
        this.memberRepository = memberRepository;
		this.passwordEncoder = passwordEncoder;
    }
    
    public void registerMember(String rawPassword) {
        String encoded = passwordEncoder.encode(rawPassword);
        // save encoded password to DB
    }

    public void register(MemberRequestDTO dto) {

        // 이메일 중복 체크
        if (memberRepository.existsByEmail(dto.getEmail())) {
            throw new IllegalArgumentException("이미 사용 중인 이메일입니다.");
        }

        // 비밀번호 해싱
        String encryptedPw = passwordEncoder.encode(dto.getPassword());

        Member member = Member.builder()
                .firstName(dto.getFirstName())
                .lastName(dto.getLastName())
                .email(dto.getEmail())
                .password(encryptedPw)
                .companyName(dto.getCompanyName())
                .position(dto.getPosition())
                .tel(dto.getTel())
                .address(dto.getAddress())
                .detailAddress(dto.getDetailAddress())
                .build();

        memberRepository.save(member);
    }
    
    /**
     * 📌 전체 회원 조회
     */
    public List<Member> getAllMembers() {
        return memberRepository.findAll();
    }

    /**
     * 📌 단일 회원 조회
     */
    public Member getMemberById(Long id) {
        return memberRepository.findById(id)
                .orElseThrow(() ->
                        new IllegalArgumentException("해당 회원을 찾을 수 없습니다. id=" + id)
                );
    }

    /**
     * ⚠ 회원 삭제
     */
    public void deleteMember(Long id) {
        if (!memberRepository.existsById(id)) {
            throw new IllegalArgumentException("삭제할 회원이 존재하지 않습니다. id=" + id);
        }
        memberRepository.deleteById(id);
    }
}
