
import HpTop2 from "../include/HpTop2";
import Footer from "../include/Footer";


const PayComp = () => {
    return(
<>
   <div className="Min390Max">
    <div className="position-fixed bg-white nav-wrap">
        <HpTop2 />
        <header className="d-flex justfify-content-around p20 align-items-center load-wrap ">
            <div className="w-25 back-arrow2">&lt;</div>
            <h3 className="w-50 text-center">구매내역</h3>
            <div className="w-25 d-flex justify-content-end"></div>
        </header>
    </div>

    <div className="mypage-wrap">
        
<div className="paid-price">
                <div className="left">
                    <img src="/svg/paid/ch.png" alt="" />
                </div>
                
                <div className="right">
                    <button className="basicBtn">심화해석판</button>
                    <h1>내 연인은 바람기 있을까?</h1>
                    <h3>25,800원</h3>
                    <h1 className="txt"><span>0원</span>특별할인 + 쿠폰 적용가</h1>
                </div>
            </div>
            
        
    
   
    </div>
    </div>
    <Footer/>

</>
    );  
}
export default PayComp;