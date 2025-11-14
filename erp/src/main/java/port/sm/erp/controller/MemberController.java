package port.sm.erp.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import lombok.RequiredArgsConstructor;
import port.sm.erp.dto.MemberRequestDTO;
import port.sm.erp.entity.Member;
import port.sm.erp.service.MemberService;

@RestController
@RequestMapping("/members")
@RequiredArgsConstructor
//@CrossOrigin(origins = "http://localhost:5173")
@CrossOrigin(origins = "*")
public class MemberController {

    private final MemberService memberService;

    /**
     * 1️⃣ 모든 회원 조회
     */
    @GetMapping
    public ResponseEntity<List<Member>> getAllMembers() {
        List<Member> members = memberService.getAllMembers();
        return ResponseEntity.ok(members);
    }

    /**
     * 2️⃣ 특정 회원 조회
     */
    @GetMapping("/{id}")
    public ResponseEntity<Member> getMemberById(@PathVariable Long id) {
        Member member = memberService.getMemberById(id);
        return ResponseEntity.ok(member);
    }

    /**
     * 3️⃣ 회원가입 (React 폼에서 호출)
     */
    @PostMapping
    public ResponseEntity<?> registerMember(@RequestBody MemberRequestDTO dto) {
        // Service에서 저장된 Member 반환
        Member savedMember = memberService.register(dto);

        // 클라이언트에게 저장된 회원 ID와 메시지 전달
        return ResponseEntity.ok(
                String.format("회원가입 완료! ID: %d", savedMember.getId())
        );
    }

    /**
     * 4️⃣ 회원 삭제
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteMember(@PathVariable Long id) {
        memberService.deleteMember(id);
        return ResponseEntity.ok("회원 삭제 완료");
    }
}
