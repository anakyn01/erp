import React, { useState } from "react";
import BackHeader from "../include/BackHeader";


interface OpenTermsState {
  terms1: boolean;
  terms2: boolean;
  terms3: boolean;
  terms4: boolean;
  terms5: boolean;
}

const Agree: React.FC = () => {
  const [openTerms, setOpenTerms] = useState<OpenTermsState>({
    terms1: false,
    terms2: false,
    terms3: false,
    terms4: false,
    terms5: false,
  });

  const toggleTerm = (key: keyof OpenTermsState) => {
    setOpenTerms((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <div className="Min390Max">
 <BackHeader/>

        <div className="login-text-wrap">
          <div className="login-text">
            <p>바로 만나기 전</p>
            <h1>잠깐, 약관에 동의해 주세요!</h1>
          </div>
        </div>

        <div className="agree-input-wrap">
          {/* 약관 1 */}
          <div className="d-flex space-between mb28">
            <div>
              <h5>
                <span>필수</span>만 14세 이상입니다
              </h5>
            </div>
            <div className="wh28">
              <input type="checkbox" className="form-check w-100" />
            </div>
          </div>

          {/* 약관 2 */}
          <div className="d-flex space-between mb28">
            <div
              className="pointer"
              onClick={() => toggleTerm("terms1")}
            >
              <h5>
                <span>필수</span>이용약관 동의
                <span className="gray">{openTerms.terms1 ? "^" : "▾"}</span>
              </h5>
            </div>
            <div className="wh28">
              <input type="checkbox" className="form-check w-100" />
            </div>
          </div>
          {openTerms.terms1 && (
            <>
            <div className="term-box">
              <h5>제1조 (목적)</h5>
              <p>
              이 약관은 회사가 제공하는 '나다운' 서비스의 이용과 관련<br/>
              하여 회사와 이용자 간의 권리, 의무 및 책임사항을 규정함을<br/> 
              목적으로 합니다. 본 약관은 서비스 이용과 관련된 모든 사항에<br/> 
              대해 적용됩니다.
              </p>
            </div>
            <div className="term-box">
              <p>
              약관 전체 동의
              </p>
            </div>
            </>
          )}

          {/* 약관 3 */}
          <div className="d-flex space-between mb28">
            <div
              className="pointer"
              onClick={() => toggleTerm("terms2")}
            >
              <h5>
                <span>필수</span>개인정보 처리방침 동의
                <span className="gray">{openTerms.terms2 ? "▴" : "▾"}</span>
              </h5>
            </div>
            <div className="wh28">
              <input type="checkbox" className="form-check w-100" />
            </div>
          </div>
          {openTerms.terms2 && (
            <div className="term-box">
              <p>
                개인정보 처리방침 내용 예시입니다.  
                수집하는 개인정보 항목, 이용 목적, 보관 기간 등을 안내합니다.
              </p>
            </div>
          )}

          {/* 선택 약관 1 */}
          <div className="d-flex space-between mb28">
            <div
              className="pointer"
              onClick={() => toggleTerm("terms3")}
            >
              <h5>
                <span className="black">선택</span>마케팅 동의
                <span className="gray">{openTerms.terms3 ? "▴" : "▾"}</span>
              </h5>
            </div>
            <div className="wh28">
              <input type="checkbox" className="form-check w-100" />
            </div>
          </div>
          {openTerms.terms3 && (
            <div className="term-box">
              <p>
                마케팅 정보 수신 동의 내용입니다.  
                이벤트, 프로모션 소식을 받아볼 수 있습니다.
              </p>
            </div>
          )}

          {/* 선택 약관 2 */}
          <div className="d-flex space-between mb28">
            <div
              className="pointer"
              onClick={() => toggleTerm("terms4")}
            >
              <h5>
                <span className="black">선택</span>광고성 정보 수신 동의
                <span className="gray">{openTerms.terms4 ? "▴" : "▾"}</span>
              </h5>
            </div>
            <div className="wh28">
              <input type="checkbox" className="form-check w-100" />
            </div>
          </div>
          {openTerms.terms4 && (
            <div className="term-box">
              <p>
                광고성 정보 수신 동의 내용입니다.  
                이메일, 문자 등으로 광고성 정보를 받을 수 있습니다.
              </p>
            </div>
          )}
        </div>

        {/* 전체 동의 */}
        <div className="p20">
          <div className="d-flex space-between mb28 gray-bg">
            <div>
              <h5>
                <span className="black">약관 전체 동의</span>
              </h5>
            </div>
            <div className="wh28">
              <input type="checkbox" className="form-check w-100" />
            </div>
          </div>
        </div>

        <div className="agree-btn-wrap">
          <button className="agreeBtn">다음 단계로 이동하기</button>
        </div>
      </div>
    </>
  );
};

export default Agree;
