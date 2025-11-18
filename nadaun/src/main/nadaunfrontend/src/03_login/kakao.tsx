
import HpTop2 from "../include/HpTop2";


const Kakao = () => {
    return(
<>
  <div className="Min390Max">
  <HpTop2/>

  <div className="back-wrap">
    <a href="/" className="back-arrow">
      &lt;
    </a>
  </div>

  <div className="kakao-wrap">
    <div className="kakao-text-wrap">
      <h2>이미 가입하신 계정이 있어요</h2>
      <h1>아래 계정으로 로그인해 보세요</h1>
    </div>
  </div>

  <div className="kakao-sign">
    <div className="d-flex justify-content-between kakao-sign-wrap">
      <div className="left">
<img src="/svg/login/kakaosmall.png" alt="" />
      </div>
      
      <div className="right">
        <p>bluebe***@kakao.com</p>
        <p className="gray">가입일:2025. 09. 16</p>
      </div>
    </div>
  </div>
  <div className="complete-btn-wrap">
    <button className="kakao">
      <span><img src="/svg/login/kakao.png" alt="" /></span>kakao 계정으로 로그인
    </button>
  </div>
  
   </div> 
</>
    );  
}
export default Kakao;