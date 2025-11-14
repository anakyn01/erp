
import HpTop2 from "../include/HpTop2";


const Complete = () => {
    return(
<>
  <div className="Min390Max">
  <HpTop2/>
  <div className="complete-wrap">
    <div className="complete-img-wrap">
      <img src="/svg/login/cong.png" alt="" />
    </div>
    <div className="complete-text-wrap">
      <h1>가입 축하 쿠폰이 도착했어요</h1>
      <p>첫 결제 시 쿠폰이 자동 적용되요 <br/>
      지금부터 당신만의 운세 풀이를 만나보세요!
      </p>
    </div>
  </div>
  <div className="complete-btn-wrap">
    <button className="basicMint">운세보러가기</button>
  </div>
  
   </div> 
</>
    );  
}
export default Complete;