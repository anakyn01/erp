
import BackArrowImg from "../08_svg/BackArrowImg";
import RightArrow from "../08_svg/RightArrow";
import HpTop2 from "../include/HpTop2";


const UserInput = () => {
    return(
<>
   <div className="Min390Max">
    <div className="position-fixed bg-white nav-wrap">
        <HpTop2 />
        <header className="d-flex justfify-content-around p20 align-items-center load-wrap ">
            <div className="w-25 back-arrow2"><BackArrowImg/></div>
            <h3 className="w-50 text-center">사주정보입력</h3>
            <div className="w-25 d-flex justify-content-end"></div>
        </header>
    </div>

    <div className="mypage-wrap">
        <div className="mypage-input-wrap">
            <div className="">
                <label htmlFor="" className="form-label">이름</label>
                <input type="text" className="form-control w-100" placeholder="예 홍길동"/>
            </div>
        </div>

<div className="input-wrap mt-3">
    <div className="input-wrap-check">
        <div className="edit">
            
            <input type="checkbox" id="female" defaultChecked/>
            <label htmlFor="female">여성</label>
        </div>
        <div className="edit">           
            <input type="checkbox"  id="male"/>
            <label htmlFor="male">남성</label>
        </div>
    </div>
</div>

        <div className="mypage-input-wrap mt-5">
            <div className="">
                <label htmlFor="" className="form-label">생년월일 (양력기준으로 입력해 주세요)</label>
                <input type="text" className="form-control w-100" placeholder="예 1992-07-15(양력)"/>
            </div>
        </div>

        <div className="mypage-input-wrap mt-5">
            <label htmlFor="">태어난 시간</label>
            <div className="d-flex align-items-center justify-content-between">
    <input type="text" placeholder="예:1992-07-15(양력)" className="date input-bg-gray"/>
    <span className="paid-fs-15" >모르겠어요</span>
                <input type="checkbox" className="check"/>
            </div>
        </div>


        </div>


        


 <div className="user-btn-wrap">
    <div className="">
        <a href="">탈퇴하기<span><RightArrow/></span></a>
    </div>
    <button className="basicGray3">저장하기</button>
 </div>
    </div>

</>
    );  
}
export default UserInput;