import Footer from "../include/Footer";
import EndHeader from "../include/EndHeader";

const DuplexEnd = () => {
    return(
<>

   <div className="Min390Max"> 
        <EndHeader/>
        <div className="mt-80 dup-wrap p-0">
            <img src="/svg/paid/bye.png" alt="" />
        </div>

        <div className="double-btn-wrap d-flex justify-content-between">
            <div className="w-50">
                <button className="basicMintGray">홈으로 가기</button>
            </div>
            <div className="mx-1"></div>
            <div className="w-50">
                <button className="basicMint">다른 운세 보기</button>
            </div>            
        </div>

     
        <div className="wait-wrap">
            <h5>이런 운세는 어때요?</h5>
            <div className="wait-wrap-over">
                
                <div className="wait">                    
                    <img src="/svg/paid/small.png" alt="" />
                    <button className="basicBtn my-2">심화해석판</button>
                    <h4>혹시 지금 바람 피우고 있을까?</h4>
                    <p className="line">25,800원</p>
                    <div className="d-flex">
                        <div className="red">50%</div>
                        <div className="red-right">12,900원</div>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="green-l">9,900원</div>
                        <div className="green-r">쿠폰적용가</div>
                    </div>
                </div>

                <div className="wait">                    
                    <img src="/svg/paid/small.png" alt="" />
                    <button className="basicBtn my-2">심화해석판</button>
                    <h4>혹시 지금 바람 피우고 있을까?</h4>
                    <p className="line">25,800원</p>
                    <div className="d-flex">
                        <div className="red">50%</div>
                        <div className="red-right">12,900원</div>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="green-l">9,900원</div>
                        <div className="green-r">쿠폰적용가</div>
                    </div>
                </div>

    
            </div>

        </div>


</div>
    <Footer/>
</>
    );  
}
export default DuplexEnd;