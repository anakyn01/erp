
import ProfileHeader from "../include/ProfileHeader";
import Ball from "../08_svg/Ball";
import RightArrow from "../08_svg/RightArrow";


const Notenter = () => {
    return(
<>
   <div className="Min390Max">

    <ProfileHeader/>

    <div className="mypage-wrap mt-140">
        <div className="mypage-wrap-img">
            <Ball/>
        </div>
        <div className="mypage-text-wrap mb-4">
            <h3>사주정보가 아직 없어요</h3>
            <p>사주를 등록하면 운세 풀이가 시작돼요</p>
        </div>
        <div className="mypage-btn-wrap">
            <button className="basicMint">사주정보 등록하기</button>
        </div>

        <hr className="my-4"/>

        <div className="mypage-content-wrap">
            <div className="d-flex justify-content-between">
                <div className="left">콘텐츠 만들기</div>
                <div className="right">
                    <RightArrow/>
                </div>
            </div> 
            
            <div className="d-flex justify-content-between">
                <div className="left">사주 정보 관리</div>
                <div className="right">
                    <RightArrow/>
                </div>
            </div>

            <div className="d-flex justify-content-between">
                <div className="left">구매 내역</div>
                <div className="right">
                    <RightArrow/>
                </div>
            </div> 

            <div className="d-flex justify-content-between">
                <div className="left">로그아웃</div>
                <div className="right">
                    <RightArrow/>
                </div>
            </div> 
        </div>

       

    </div>
    
   
    </div>
</>
    );  
}
export default Notenter;