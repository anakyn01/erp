
import HpTop2 from "../include/HpTop2";
import Footer from "../include/Footer";


const Out = () => {
    return(
<>
   <div className="Min390Max">
    <div className="position-fixed bg-white nav-wrap">
        <HpTop2 />
        <header className="d-flex justfify-content-around p20 align-items-center load-wrap ">
            <div className="w-25 back-arrow2">&lt;</div>
            <h3 className="w-50 text-center">회원탈퇴</h3>
            <div className="w-25 d-flex justify-content-end"></div>
        </header>
    </div>

    <div className="mypage-wrap">
        

            
            <div className="mypage-text-wrap">
                    <div className="">
                        <h5>아래 내용 확인 후 동의해 주세요</h5>
                        <h3>회원 탈퇴 시, 모든 서비스 이용이 불가해요</h3>
                    </div>
            </div>

<div className="out-wrap">
    
    <div className="out">
        <h5>회원 탈퇴 절차</h5>
        <p>[탈퇴하기] 버튼을 눌러 직접 신청해 주세요.
탈퇴 요청 즉시 계정은 비활성화되며, 서비스 이용이 제한됩니다.</p>
    </div>

    <div className="out">
        <h5>회원 정보 삭제</h5>
        <p>탈퇴 후 관련 법령에 따라 일정 기간 보관이 필요한 정보는 별도 저장되며, 그 외 모든 개인정보는 즉시 삭제됩니다.
보관 기간이 끝나면(최대 1년) 모든 데이터가 완전히 삭제됩니다.
삭제된 정보는 복구가 불가능하니, 필요한 내용은 미리 백업해 주세요.</p>
    </div>
</div>
        
        <div className="d-flex justify-content-between align-items-center out-agree">
            <input type="checkbox" />
            <p>안내 내용을 모두 확인하였으며, 이에 동의합니다.</p>
        </div>

    </div>
    
   
    </div>
    <Footer/>
    <div className="out-btn-wrap">
        <button className="basicGrayBig">탈퇴하기</button>
    </div>
</>
    );  
}
export default Out;