
import HpTop2 from "../include/HpTop2";


const UserInput = () => {
    return(
<>
   <div className="Min390Max">
    <div className="position-fixed bg-white nav-wrap">
        <HpTop2 />
        <header className="d-flex justfify-content-around p20 align-items-center load-wrap ">
            <div className="w-25 back-arrow2">&lt;</div>
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

        <div className="mypage-input-wrap mt-5">
            <div className="">
                <label htmlFor="" className="form-label">성별</label>
                <div className="d-flex">
                <input type="checkbox" className="form-check"/><label htmlFor="" className="form-label">여성</label>
                <input type="checkbox" className="form-check"/><label htmlFor="" className="form-label">남성</label>
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
            <div className="">
                <label htmlFor="" className="form-label">태어난시간</label>
                <div className="d-flex justify-content-between">
                <input type="text" className="form-control w-50" placeholder="예 1992-07-15(양력)"/>
                <div className="d-flex align-items-center">
                <span className="mx-2">모르겠어요</span><input type="checkbox" className="form-check"/>
                </div>
                </div>
            </div>

            <div className="d-flex justify-content-start mt-2">
                <a href="">탈퇴하기 &gt;</a>
            </div> 
        </div>

 <div className="user-btn-wrap">
    <button className="basicGray3">저장하기</button>
 </div>
    </div>
    </div>
</>
    );  
}
export default UserInput;