
import HpTop2 from "../include/HpTop2";


/*interface LoginResponse{
  message:string;
  user:{
    id:number;
    email:string;
    provider:string;
  };
}*/


const FirstLogin: React.FC = () => {

const handleKakaoLogin =():void => {
window.location.href = "http://localhost:8383/api/oauth2/authorize/kakao";
}

const handleGoogleLogin = ():void => {
window.location.href = "http://localhost:8383/api/oauth2/authorize/google";
}

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
    <div className="now-wrap">
      <div className="now-box">
        <img src="/svg/login/now.png" alt="" />
      </div>
    </div>
    <button className="kakao" onClick={handleKakaoLogin}>
      <span><img src="/svg/login/kakao.png" alt="" /></span>카카오로 무료 체험시작하기</button>
    <div className="h16"></div>
    <button className="google" onClick={handleGoogleLogin}>
      <span><img src="/svg/login/google.png" alt="" /></span>Google로 무료체험 시작하기</button>
    <div className="login-btn-bottom-text">무료 체험후 자동 결제되지 않아요</div>
  </div>

   </div> 
</>
    );  
}
export default FirstLogin;

/*
최초코드

const handleKakaoLogin = async():Promise<void> => {
  try{
    const res = await axios.post<LoginResponse>(
      "http://localhost:8383/api/login/kakao",
      {email:"kakao_user@test.com"}
    );
    alert(res.data.message);
    console.log("유저 정보:", res.data.user);
  }catch(error){
    console.error("로그인 실패:", error);
    alert("카카오 로그인 실패");
  }
}

const handleGoogleLogin = async():Promise<void> => {
  try{
    const res = await axios.post<LoginResponse>(
      "http://localhost:8383/api/login/google",
      {email:"kakao_user@test.com"}
    );
    alert(res.data.message);
    console.log("유저 정보:", res.data.user);
  }catch(error){
    console.error("로그인 실패:", error);
    alert("Google 로그인 실패");
  }
}
*/