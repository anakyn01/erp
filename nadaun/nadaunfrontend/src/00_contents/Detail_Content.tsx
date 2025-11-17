import { useState } from "react";

const Detail_Content: React.FC = () => {

    // 자세히 보기 토글
    const [showDetail, setShowDetail] = useState<boolean>(false);

    // 아코디언 토글 (guide = 이용안내, refund = 환불규정)
    const [openAccordion, setOpenAccordion] = useState<"guide" | "refund" | null>(null);

    const toggleAccordion = (name: "guide" | "refund") => {
        setOpenAccordion(prev => (prev === name ? null : name));
    };

    return (
        <>
            <div className="detail-img-wrap">
                <img src="/svg/paid/ch.png" alt="" />
            </div>

            <div className="paid-wrap">
                <div className="paid-pay">

                    <button className="basicBtn">심화해석판</button>
                    <p className="fs-18">바람으로 끝날 인연일까, 진짜 사랑일까?</p>
                    <p className="fs-14-gray">25,800원</p>

                    <div className="d-flex pay">
                        <div className="fs-22-dc">50%</div>
                        <div className="fs-22">12,900원</div>
                    </div>

                    <div className="d-flex pay align-items-center">
                        <div className="fs-22-mint">0원</div>
                        <div className="fs-13-mint mx-2">첫 구매 혜택가</div>
                    </div>

                </div>

                <div className="paid-msg align-items-center">
                    <span>
                        <img src="/svg/paid/boon.png" alt="" className="boon" />
                    </span>
                    <p className="paid-msg-inner">
                        첫 구매 쿠폰 받고 <span className="mx-2">0원으로</span>풀이보기 &nbsp;&gt;
                    </p>
                </div>
            </div>

            <div className="border-height-12 mt27mb27"></div>

            {/* -------------------------------------------------- */}
            {/*  ⭐ 운세 설명 (자세히 보기) */}
            {/* -------------------------------------------------- */}
            <div className="detail-text-wrap">
                <h3>운세설명</h3>

                <p>
                달콤했던 시작과 달리, 요즘은 마음이 흔들리지 않나요?
                사소한 말에도 불안해 지고, 혹시 놓쳐버릴까 두려운 지금.
                겉으로는 보이지 않는 사랑의 방향을 막연한 해석이 아닌,
                그사람의 본질부터 관계의 결말까지 예측하는 소름돋는 
                정확성을 경험하세요
                </p>

                {/* 자세히 보기 버튼 (showDetail=false일 때만 보임) */}
                {!showDetail && (
                    <button
                        className="whiteBasic"
                        onClick={() => setShowDetail(true)}
                    >
                        자세히 보기 <span className="fs-18 mx-2">∨</span>
                    </button>
                )}

                
            </div>
            {/* 자세히 보기 내용 */}
                {showDetail && (
                    <>
                    <div className="detail-extra mt-2">
                        <div className="detail-extra-text">
                            <h3>핵심만 콕 집어드려요</h3>
                            <div className="d-flex justify-content-between">
                                <div className="one">
                                    <img src="/svg/paid/my1.png" alt="" />                
                                    <p>나의 본성</p>
                                </div>
                                    
                                <div className="one">        
                                    <img src="/svg/paid/my2.png" alt="" />
                                    <p>주의 할점</p>
                                </div>

                                <div className="one">        
                                    <img src="/svg/paid/my3.png" alt="" />
                                    <p>미래 방향</p>
                                </div>
                            </div>
                        </div>                     
                    </div>

                      <div className="detail-extra-my">
                        <p>작은 고민도 바로 풀어 드립니다</p>
                    </div>
                     <div className="detail-extra-my-bg d-flex justify-content-between">
                 
                            <div className="text">
                                <div className="one">그사람과 끝까지 함께할 수 있을까요?</div>
                                <div className="two">타로와 사주로 명쾌하게 풀어 줄께요!</div>
                            </div>
                            <div className="">
                                <img src="/svg/paid/my4.png" alt="" />
                            </div>
                    
                    </div>
                    <div className="detail-extra-my-composition">
                     <h3>운세구성</h3>
                     
                     <div className="d-flex">
                        <div className="front">•</div>
                        <div className="end">내 사랑,오래 지속될 인연일까?</div>
                     </div>
                    </div>
                    <div className="detail-extra-my-composition">
                        <div className="d-flex">
                            <div className="front">•</div>
                            <div className="end">이 감정,스쳐가는 바람일까 진짜일까?</div>
                        </div>
                    </div>
                    <div className="detail-extra-my-composition">
                        <div className="d-flex">
                            <div className="front">•</div>
                            <div className="end">우리 관계, 지금이 전환점 일까?</div>
                        </div>
                    </div>
                    <div className="detail-extra-my-composition">
                        <div className="d-flex">
                            <div className="front">•</div>
                            <div className="end">그사람의 마음, 진심일까 순간일까?</div>
                        </div>
                    </div>
                    <div className="detail-extra-my-composition">
                        <div className="d-flex">
                            <div className="front">•</div>
                            <div className="end">내 사랑,오래 지속될 인연일까?</div>
                            </div>
                    </div>                  
                    <div className="detail-extra-my-composition">
                        <div className="d-flex">
                            <div className="front">•</div>
                            <div className="end">이 감정,스쳐가는 바람일까 진짜일까?</div>
                        </div>
                    </div>
                    <div className="detail-extra-my-composition">
                        <div className="d-flex">
                            <div className="front">•</div>
                            <div className="end">우리 관계, 지금이 전환점 일까?</div>
                        </div>
                    </div>
                    <div className="detail-extra-my-composition">
                        <div className="d-flex">
                            <div className="front">•</div>
                            <div className="end">그사람의 마음, 진심일까 순간일까?</div>
                        </div>
                    </div>     
                    </>
                    
                )}

            <div className="border-height-12 mt27mb27"></div>

            {/* -------------------------------------------------- */}
            {/*  ⭐ 이용안내 & 환불규정 (아코디언) */}
            {/* -------------------------------------------------- */}
            <div className="detail-text-wrap">
                <h3 className="fs-17">이용안내 & 환불규정</h3>

                {/* 📌 이용안내 */}
                <div 
                    className="d-flex justify-content-between align-items-center h54"
                    style={{ cursor: "pointer" }}
                    onClick={() => toggleAccordion("guide")}
                >
                    <div className="fs-16">이용안내</div>
                    <div className="fs-18">{openAccordion === "guide" ? "▲" : "∨"}</div>
                </div>
                {openAccordion === "guide" && (
                    <div className="accordion-content">
                       <h3>서비스 이용 전 확인 주세요</h3>
                        <div className="d-flex justify-content-between">
                            <div className="front">•</div>
                            <div className="end">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Provident pariatur necessitatibus, error rerum aut accusantium reiciendis, 
                                ipsum officia, incidunt non veritatis dolores sed eligendi illo. Modi rem laboriosam magnam cumque!
                            </div>
                        </div>
                    </div>
                )}

                {/* 📌 환불규정 */}
                <div 
                    className="d-flex justify-content-between align-items-center h54"
                    style={{ cursor: "pointer" }}
                    onClick={() => toggleAccordion("refund")}
                >
                    <div className="fs-16">환불규정</div>
                    <div className="fs-18">{openAccordion === "refund" ? "▲" : "∨"}</div>
                </div>

                {openAccordion === "refund" && (
                    <div className="accordion-content">
                        <h3>서비스 이용 전 확인 주세요</h3>
                        <div className="d-flex justify-content-between">
                            <div className="front">•</div>
                            <div className="end">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Provident pariatur necessitatibus, error rerum aut accusantium reiciendis, 
                                ipsum officia, incidunt non veritatis dolores sed eligendi illo. Modi rem laboriosam magnam cumque!
                            </div>
                        </div>
                    </div>
                )}

                <div className="detail-btn-wrap">
                    <button className="basicMint">구매하기</button>
                </div>
            </div>
        </>
    );
};

export default Detail_Content;
