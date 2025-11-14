package port.sm.erp.controller;

import java.util.List;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//롬복을 부를때는 모든영역을 부르자
import lombok.RequiredArgsConstructor;
import port.sm.erp.dto.MemberRequestDTO;
import port.sm.erp.entity.Member;
import port.sm.erp.service.MemberService;

@RestController
@RequestMapping("/members")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class MemberController {
	

	
    private final MemberService memberService;

    // 1. 모든 회원 조회
    @GetMapping
    public List<Member> getAllMembers() {
        return memberService.getAllMembers();
    }

    // 2. 특정 회원 조회
    @GetMapping("/{id}")
    public Member getMemberById(@PathVariable Long id) {
        return memberService.getMemberById(id);
    }

    // 3. 회원가입 (React 폼에서 호출)
    @PostMapping
    public ResponseEntity<?> registerMember(@RequestBody MemberRequestDTO dto) {
        memberService.register(dto);
        return ResponseEntity.ok("회원가입 완료");
    }

    // 4. 회원 삭제
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteMember(@PathVariable Long id) {
        memberService.deleteMember(id);
        return ResponseEntity.ok("삭제 완료");
    }

}
