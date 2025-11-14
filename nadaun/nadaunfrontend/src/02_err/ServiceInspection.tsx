
import HpTop2 from "../include/HpTop2";


const ServiceInspection = () => {
    return(
<>
  <div className="Min390Max">
  <HpTop2/>
  <div className="service-wrap">
    <div className="service">
        <div className="service-img">
            <img src="/svg/err/nointer.png" alt="" />
        </div>
        <div className="service-textwrap">
            <h1>서버 점검 중이에요</h1>
            <p>
                점검이 끝나면 정상적으로 이용 가능합니다
                <br/>더나은 서비스로 보답하겠습니다
            </p>
        </div>
    </div>
    
  </div>

  <div className="g39010"></div>
  <div className="service-bottom">
    <h5>점검안내</h5>
    <hr />
    <div className="service-bottom-inner">
        <div className="">
            <h5><span>&nbsp;·&nbsp;</span>점검 일시:</h5>
            <p>2025년 9월 30일(화) 02:00 ~ 05:00(약 3시간 예정)</p>
        </div>
    </div>
        <div className="service-bottom-inner">
        <div className="">
            <h5><span>&nbsp;·&nbsp;</span>점검 내용:</h5>
            <p>안정성 강화 및 시스템 개선</p>
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
export default ServiceInspection;