package port.sm.erp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import port.sm.erp.dto.MemberRequestDTO;
import port.sm.erp.entity.Member;
import port.sm.erp.repository.MemberRepository;

@Service
public class MemberService {

    private final MemberRepository memberRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    @Autowired
    public MemberService(MemberRepository memberRepository, BCryptPasswordEncoder passwordEncoder) {
        this.memberRepository = memberRepository;
        this.passwordEncoder = passwordEncoder;
    }

    /**
     * 📌 회원가입
     */
    @Transactional
    public Member register(MemberRequestDTO dto) {

        // 이메일 중복 체크
        if (memberRepository.existsByEmail(dto.getEmail())) {
            throw new IllegalArgumentException("이미 사용 중인 이메일입니다.");
        }

        // 비밀번호 해싱
        String encryptedPw = passwordEncoder.encode(dto.getPassword());

        // DTO → Entity 변환 후 저장
        Member member = Member.builder()
                .firstName(dto.getFirstName())
                .lastName(dto.getLastName())
                .email(dto.getEmail())
                .password(encryptedPw)
                .companyName(dto.getCompanyName())
                .position(dto.getPosition())
                .tel(dto.getTel())
                .gender(dto.getGender()) // gender 추가
                .address(dto.getAddress())
                .detailAddress(dto.getDetailAddress())
                .build();

        return memberRepository.save(member);
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
    @Transactional
    public void deleteMember(Long id) {
        if (!memberRepository.existsById(id)) {
            throw new IllegalArgumentException("삭제할 회원이 존재하지 않습니다. id=" + id);
        }
        memberRepository.deleteById(id);
    }
}
