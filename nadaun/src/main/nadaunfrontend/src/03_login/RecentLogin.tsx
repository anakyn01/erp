
import HpTop2 from "../include/HpTop2";


const RecentLogin = () => {
    return(
<>
  <div className="Min390Max">
  <HpTop2/>
  
  <div className="back-wrap">
    <a href="#" className="back-arrow">&lt;</a>
  </div>

  <div className="login-text-wrap">
    <div className="login-text">
        <p>나다운이 처음이라면</p>
        <h1>무료료 체험해 보세요!</h1>
    </div>
  </div>

  <div className="login-img-wrap">
    <div className="login-img">
        <img src="/svg/login/5dune.png" alt="사실이건 오둥이 임" />
    </div>
  </div>

  <div className="login-btn-wrap">
    <div className="upBtn"><span><img src="/svg/login/thun.png" alt="" /></span>최근 로그인</div>
    <button className="kakao">
      <span><img src="/svg/login/kakao.png" alt="" /></span>카카오로 무료 체험시작하기</button>
    <div className="h16"></div>
    <button className="google">
      <span><img src="/svg/login/google.png" alt="" /></span>Google로 무료체험 시작하기</button>
    <div className="login-btn-bottom-text">무료 체험후 자동 결제되지 않아요</div>
  </div>

   </div> 
</>
    );  
}
export default RecentLogin;