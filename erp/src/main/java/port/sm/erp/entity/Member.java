package port.sm.erp.entity;

import javax.persistence.*;

import lombok.*;

@Entity
@Table(name = "MEMBERS") // Oracle에서는 member 사용 권장 X
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "member_seq_gen")
    @SequenceGenerator(name = "member_seq_gen", sequenceName = "SEQ_MEMBERS", allocationSize = 1)
    @Column(name = "MEMBER_ID")
    private Long id;

    @Column(name = "FIRST_NAME", nullable = false)
    private String firstName;

    @Column(name = "LAST_NAME", nullable = false)
    private String lastName;

    @Column(name = "EMAIL", nullable = false, unique = true)
    private String email;

    @Column(name = "PASSWORD", nullable = false)
    private String password;

    @Column(name = "COMPANY_NAME")
    private String companyName;

    @Column(name = "POSITION")
    private String position;

    @Column(name = "TEL")
    private String tel;

    @Column(name = "ADDRESS")
    private String address;

    @Column(name = "DETAIL_ADDRESS")
    private String detailAddress;

    @Column(name = "CREATED_AT", insertable = false, updatable = false)
    private java.sql.Date createdAt;

    @Column(name = "UPDATED_AT", insertable = false, updatable = false)
    private java.sql.Date updatedAt;
}
