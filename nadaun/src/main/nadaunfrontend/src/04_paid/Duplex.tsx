import Footer from "../include/Footer";
import QuitHeader from "../include/QuitHeader";

const Duplex = () => {
    return(
<>

   <div className="Min390Max"> 
        <QuitHeader/>
        <div className="mt-80 dup-wrap p-0">
            <img src="/svg/paid/study.png" alt="" />
        </div>
        <div className="dup-time">
            <h5>정확한 해석을 위해 시간이 필요해요</h5>
            <h4>결과가 나오면 <span>알림톡을 보내드릴께요</span></h4>
            <div className="dup-time-progress d-flex align-items-center justify-content-between">
                <div className="w-75">
                    <div className="progress">
                        <div className="progress-bar bg-main"></div>
                    </div>
                </div>
                <div className="num">24%</div>
            </div>
        </div>
        <div className="wait-wrap">
            <h5>기다리는 동안 무료 운세 보기</h5>
            <div className="wait-wrap-over">
                
                <div className="wait">
                    <img src="/svg/paid/small.png" alt="" />
                    <h5>무료체험판</h5>
                    <h4>혹시 지금 바람 피우고 있을까?</h4>
                </div>

                <div className="wait">
                    <img src="/svg/paid/small.png" alt="" />
                    <h5>무료체험판</h5>
                    <h4>혹시 지금 바람 피우고 있을까?</h4>
                </div>
            </div>

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
</div>
    <Footer/>
</>
    );  
}
export default Duplex;