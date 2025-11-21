
import HpTop2 from "../include/HpTop2";
import Footer from "../include/Footer";
import BackArrowImg from "../08_svg/BackArrowImg";


const PayComp = () => {
    return(
<>
   <div className="Min390Max">
    <div className="position-fixed bg-white nav-wrap">
        <HpTop2 />
        <header className="d-flex justfify-content-around p20 align-items-center load-wrap ">
            <div className="w-25 back-arrow2"><BackArrowImg/></div>
            <h3 className="w-50 text-center">구매내역</h3>
            <div className="w-25 d-flex justify-content-end"></div>
        </header>
    </div>

    <div className="paidcomp-wrap mt-95">

<h5>2025.9.30</h5>
<hr className="mt-3 mb-2"/>
        
<div className="paid-price">
                <div className="left">
                    <img src="/svg/paid/ch.png" alt="" />
                </div>
                
                <div className="right">
                    <h3>바람으로 끝날 인연일까, 진짜 사랑일까?</h3>
                    <h3>25,800원</h3>
                    <p>풀이 대상 : 김석훈 (1992.09.02)</p>
                    <p>구매 일시 : 2025.09.30 (14:33)</p>
                    <button className="whiteBasic my-2">후기작성</button>
                </div>
            </div>
            
        
    
   
    </div>
    </div>
    <Footer/>

</>
    );  
}
export default PayComp;