import Footer from "../include/Footer";
import NomalHeader from "../include/NomalHeader";




const PaidInputMan = () => {
    return(
<>

   <div className="Min390Max"> 
        <NomalHeader/>
<div className="input-wrap mt-90">
    <div className="">
        <label htmlFor="">이름</label>
        <input type="text" placeholder="예:홍길동"/>
    </div>
</div>

<div className="input-wrap">
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
        <span className="paid-fs-15">모르겠어요</span>
        <input type="checkbox" className="check"/>
    </div>
</div>
    </div>

<div className="input-wrap">
    <div className="">
        <label htmlFor="">관계</label>
        <div className="d-flex">
        <input type="file"/>
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
export default PaidInputMan;