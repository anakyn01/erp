
import HpTop2 from "../include/HpTop2";
import Err500Img from "../08_svg/Err500Img";

const Err_500 = () => {
    return(
<>
  <div className="Min390Max">
  <HpTop2/>
  <div className="err404-wrap">
    <div className="err404">
        <div className="err404-img">
            <Err500Img/>
        </div>
        <div className="err404-textwrap">
            <h1>서버에 문제가 발생했어요</h1>
            <p>
                일시적인 오류로 페이지를 불러오지 못했어요
                <br/>잠시후 다시 시도해 주세요.
            </p>
        </div>
    </div>
  </div>

  <div className="btn-wrap">
    <div className="d-flex space-between">
        <a className="basicMintGray" href="/">홈으로 가기</a>
        <button className="basicMint">다시 시도하기</button>
    </div>
  </div>

  
   </div> 
</>
    );
}
export default Err_500;