package port.sm.erp.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MemberRequestDTO {

    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String companyName;
    private String position;
    private String tel;
    private String address;
    private String detailAddress;
    private String gender; // 추가
}
