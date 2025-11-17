import Footer from "../include/Footer";
import ExitHeader from "../include/ExiyHeader";
import InnerFooter from "../include/InnerFooter";




const Tran2 = () => {
    return(
<>

<div className="Min390Max"> 
        <ExitHeader/>
<div className="title-wrap mt-80">
<h5>우리관계, 지금이 전환점일까?</h5>
<p>질문을 떠올리며 카드를 뽑아주세요</p>
</div>
</div>
<div className="tran-img-wrap">
    <img src="/svg/paid/pic2.png" alt="" />
</div>
<div className="trans-btn-wrap">
    <button className="basicMintGray">카드 섞기</button>
</div>
<InnerFooter/>
    <Footer/>
</>
    );  
}
export default Tran2;