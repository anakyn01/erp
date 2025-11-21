
import BackArrowImg from "../08_svg/BackArrowImg";
import RightArrow from "../08_svg/RightArrow";
import HpTop2 from "../include/HpTop2";


const Regist = () => {
    return(
<>
   <div className="Min390Max">
    <div className="position-fixed bg-white nav-wrap">
        <HpTop2 />
        <header className="d-flex justfify-content-around p20 align-items-center load-wrap ">
            <div className="w-25 back-arrow2"><BackArrowImg/></div>
            <h3 className="w-50 text-center">마이페이지</h3>
            <div className="w-25 d-flex justify-content-end"></div>
        </header>
    </div>

    <div className="mypage-wrap">
        
        <div className="mypage-regist-wrap">
            
            <div className="d-flex justify-content-between align-items-center">
                <img src="/svg/mypage/monk.png" alt="" />
                    <div className="">
                        <h5>원숭이 띠</h5>
                        <h3>별빛 속에 피어난 작은꿈</h3>
                    </div>
            </div>
            <div className="regist-bottom-box">
                양력 1994.07.23 (오)시 <span>|</span>원숭이띠<span>|</span>물고기자리<span>|</span>여성
            </div>
        </div>

        <div className="wangborder"></div>

        <div className="mypage-content-wrap">
            <div className="d-flex justify-content-between">
                <div className="left">콘텐츠 만들기</div>
                <div className="right"><RightArrow/></div>
            </div> 
            
            <div className="d-flex justify-content-between">
                <div className="left">사주 정보 관리</div>
                <div className="right"><RightArrow/></div>
            </div>

            <div className="d-flex justify-content-between">
                <div className="left">구매 내역</div>
                <div className="right"><RightArrow/></div>
            </div> 

            <div className="d-flex justify-content-between">
                <div className="left">로그아웃</div>
                <div className="right"><RightArrow/></div>
            </div> 
        </div>

       

    </div>
    
   
    </div>
</>
    );  
}
export default Regist;