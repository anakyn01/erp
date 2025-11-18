import Footer from "../include/Footer";
import NomalHeader from "../include/NomalHeader";




const PaidInput = () => {
    return(
<>

   <div className="Min390Max"> 
        <NomalHeader/>
<div className="input-wrap mt-80">
    <div className="">
        <label htmlFor="">이름</label>
        <input type="text" placeholder="예:홍길동"/>
    </div>
</div>

<div className="input-wrap">
    <div className="input-wrap-check">
        <div className="edit">
            <label htmlFor="">여성</label>
            <input type="checkbox"/>
        </div>
        <div className="edit">
            <label htmlFor="">남성</label>
            <input type="checkbox"/>
        </div>
    </div>
</div>

<div className="input-wrap">
    <div className="">
        <label htmlFor="">생년월일 (양력기준으로 입력해 주세요)</label>
        <input type="text" placeholder="예:1992-07-15(양력)"/>
    </div>
</div>

<div className="input-wrap-small">
        <label htmlFor="">태어난 시간</label>
    <div className="d-flex align-items-center justify-content-between">
        <input type="text" placeholder="예:1992-07-15(양력)" className="date"/>
        <span>모르겠어요</span>
        <input type="checkbox" className="check"/>
    </div>
</div>
    </div>

    <div className="input-btn-wrap">
        <button className="basicGray100">다음</button>
    </div>
    <Footer/>
</>
    );  
}
export default PaidInput;