
import HpTop2 from "../include/HpTop2";


const Nop = () => {
    return(
<>
  <div className="Min390Max">
  <HpTop2/>
  <div className="err404-wrap">
    <div className="err404">
        <div className="err404-img">
            <img src="/svg/err/nop.png" alt="" />
        </div>
        <div className="err404-textwrap">
            <h1>구매를 실패했어요</h1>
            <p>
                네트워크나 결제 수단을 확인한뒤  
                <br/>다시 시도해 보실래요
            </p>
        </div>
    </div>
  </div>

  <div className="btn-wrap">
    <div className="d-flex space-between">
        <button className="basicMintGrey">홈으로 가기</button>
        <button className="basicMintSmall">다시 시도하기</button>
    </div>
  </div>

  
   </div> 
</>
    );
}
export default Nop;