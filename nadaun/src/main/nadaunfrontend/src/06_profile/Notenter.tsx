
import HpTop2 from "../include/HpTop2";


const Notenter = () => {
    return(
<>
   <div className="Min390Max">
    <div className="position-fixed bg-white nav-wrap">
        <HpTop2 />
        <header className="d-flex justfify-content-around p20 align-items-center load-wrap ">
            <div className="w-25">&lt;</div>
            <h3 className="w-50 text-center">마이페이지</h3>
            <div className="w-25 d-flex justify-content-end"></div>
        </header>
    </div>

    <div className="mypage-wrap">
        <div className="mypage-wrap-img">
            <img src="/svg/mypage/ball.png" alt="" />
        </div>
        <div className="mypage-text-wrap">
            <h3>사주정보가 아직 없어요</h3>
            <p>사주를 등록하면 운세 풀이가 시작돼요</p>
        </div>
        <div className="mypage-btn-wrap">
            <button className="basicMint">사주정보 등록하기</button>
        </div>

        <hr/>

        <div className="mypage-content-wrap">
            <div className="d-flex justify-content-between">
                <div className="left">콘텐츠 만들기</div>
                <div className="right">&gt;</div>
            </div> 
            
            <div className="d-flex justify-content-between">
                <div className="left">사주 정보 관리</div>
                <div className="right">&gt;</div>
            </div>

            <div className="d-flex justify-content-between">
                <div className="left">구매 내역</div>
                <div className="right">&gt;</div>
            </div> 

            <div className="d-flex justify-content-between">
                <div className="left">로그아웃</div>
                <div className="right">&gt;</div>
            </div> 
        </div>

       

    </div>
    
   
    </div>
</>
    );  
}
export default Notenter;