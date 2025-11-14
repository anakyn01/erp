const Detail_Content = () => {
    return(
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
        <img src="/svg/paid/boon.png" alt="" className="boon"/>
        </span>
        <p className="paid-msg-inner">첫 구매 쿠폰 받고 <span className="mx-2">0원으로</span>풀이보기 &nbsp;&gt;</p>
    </div>
</div>

<div className="border-height-12 mt27mb27"></div>

<div className="detail-text-wrap">
    <h3>운세설명</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Unde mollitia tenetur vitae omnis qui accusantium excepturi atque, 
    laboriosam dolor. Sapiente omnis necessitatibus odit tempora porro 
    voluptatibus est non eaque magni!</p>
    <button className="whiteBasic">자세히 보기 <span className="fs-18 mx-2">∨</span></button>
</div>

<div className="border-height-12 mt27mb27"></div>

<div className="detail-text-wrap">
    <h3 className="fs-17">이용안내 & 환불규정</h3>
    
    <div className="d-flex justify-content-between align-items-center h54">
        <div className="fs-16">이용안내</div>
        <div className="fs-18">∨</div>
    </div>

    <div className="d-flex justify-content-between align-items-center h54">
        <div className="fs-16">이용안내</div>
        <div className="fs-18">∨</div>
    </div>
    <div className="detail-btn-wrap">
        <button className="basicMint">구매하기</button>
    </div>
</div>
        
</>
    );
}
export default Detail_Content;