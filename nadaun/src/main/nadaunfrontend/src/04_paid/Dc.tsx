
import FooterBtn from "../include/FooterBtn";
import HpTop2 from "../include/HpTop2";


const Dc = () => {
    return(
<>
   <div className="Min390Max">
    
        <div className="headerSet">
            <HpTop2 />
            <header className="">
                <a href="/">&lt;</a>
                <h3>결제</h3>
                <div></div>
            </header>        
        </div>

        <div className="paid-wrap mt-95">

            <div className="paid-top">
                <div className="left">
                    <h3>운세 구성</h3>
                </div>
                <div className="right">
                    <button className="btn">쿠폰 3</button>
                </div>
            </div>

            <div className="paid-msg">
                <span>
                <img src="/svg/paid/raiders.png" alt="" />
                </span>
                특별 할인 + 쿠폰 사용으로 이번 결제는 0원이에요
            </div>

            <div className="paid-price">
                <div className="left">
                    <img src="/svg/paid/ch.png" alt="" />
                </div>
                
                <div className="right">
                    <button className="basicBtn">심화해석판</button>
                    <h1>내 연인은 바람기 있을까?</h1>
                    <h3>25,800원</h3>
                    <h1 className="txt"><span>0원</span>특별할인 + 쿠폰 적용가</h1>
                </div>
            </div>
        </div>

        <div className="border-height-12"></div>
        <div className="paid-wrap">
            <div className="paid-pay">
                <h3>결제 금액</h3>
                <hr />
                <div className="d-flex justify-content-between pay">
                    <div className="left">상품금액</div>
                    <div className="right">25,800원</div>
                </div>

                <div className="d-flex justify-content-between pay">
                    <div className="left">기본 할인</div>
                    <div className="right">-12,900원</div>
                </div>

                <div className="d-flex justify-content-between pay">
                    <div className="left">쿠폰 할인</div>
                    <div className="right">0원</div>
                </div>
            </div>
        </div>
        
        <div className="border-height-72 d-flex justify-content-between total">
            <div className="left">총 결제 금액</div>
            <div className="right">12,900원</div>            
        </div>

        <div className="payment-wrap">
            <h3>결제수단</h3>
            <hr className="my-3"/>
            <div className="dc-btn-wrap">
                <button className="whiteBasic">신용·체크카드</button>
                <button className="whiteBasic">
                    <img src="/svg/paid/pay.png" alt="" className="kpay"/>
                </button>
            </div>
        </div>

        <div className="paid-info mb-5">
            <h3>결제 금액과 안내 사항을 확인했어요</h3>
            <hr/>
            <h4>수집 및 이용 목적</h4>
            <div className="paid-info-txt">
                <div className="left">·</div>
                <div className="right">
                개인 맞춤형 운세 콘텐츠 생성 및 제공, 유료 서비스 이용에 따른 계약 이행
                ,AI콘텐츠 준비 완료 시 알림톡 발송, 고객 문의 응대 미 불만 처리등 원활한 서비스 이
                용을 위한 본인 확인
                </div>
            </div>

            <h4 className="mt-3">수집하는 개인정보 항목</h4>
            <div className="paid-info-txt">
                <div className="left">·</div>
                <div className="right">
                회원 식별 정보: 이름, 이메일, 휴대전화번호
                </div>
            </div>
            <div className="paid-info-txt">
                <div className="left">·</div>
                <div className="right">
                콘텐츠 생성 정보: 생년월일, 태어난 시, 성별
                </div>
            </div>
        </div>


        
  
    </div>
    <FooterBtn/>
</>
    );  
}
export default Dc;