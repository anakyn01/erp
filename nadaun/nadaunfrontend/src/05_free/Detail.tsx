
import HpTop2 from "../include/HpTop2";


const Detail = () => {
    return(
<>
   <div className="Min390Max">
    <div className="position-fixed w-100 bg-white nav-wrap">
        <HpTop2 />
        <header className="d-flex justfify-content-around p20 align-items-center load-wrap ">
            <div className="w-25"></div>
            <h3 className="w-50 text-center">상세풀이</h3>
            <div className="w-25 d-flex justify-content-end">X</div>
        </header>
    </div>
    
    <div className="banner-wrap d-flex justify-content-between mt90">
        <img src="/svg/top1.png" alt="" />
        <div className="">
            <div className="basicGray2">무료체험판</div>
            <p>내곁의 사람, 다른 이에게 끌리고 있을까</p>
        </div>
    </div>

    <div className="detail-text-wrap">
        <div className="number">
            Q1
        </div>
        <h1>지금 그의 마음은 여전히 내 곁에 머물고 있을까?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Nobis vitae suscipit non accusantium eaque iste doloremque 
            quisquam recusandae fugit voluptatem? Quia minima asperiores 
            laborum quae sunt suscipit omnis cupiditate similique.</p>
    </div>
<hr className="my-5"/>
    <div className="detail-text-wrap">
        <div className="number">
            Q2
        </div>
        <h1>혹시 다른 사람에게 마음이 기울고 있는건 아닐까?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Nobis vitae suscipit non accusantium eaque iste doloremque 
            quisquam recusandae fugit voluptatem? Quia minima asperiores 
            laborum quae sunt suscipit omnis cupiditate similique.</p>
    </div>
    <hr className="my-5"/>
    <div className="detail-text-wrap">
        <div className="number">
            Q3
        </div>
        <h1>앞으로 우리의 관계는 안정적으로 이어질까, 흔들리게 될까?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Nobis vitae suscipit non accusantium eaque iste doloremque 
            quisquam recusandae fugit voluptatem? Quia minima asperiores 
            laborum quae sunt suscipit omnis cupiditate similique.</p>
    </div>
<div className="banner-wrap mt90">
    <div className="banner d-flex justify-content-between">
<div className=""></div>
<img src="" alt="" />
<div className=""></div>
    </div>
</div>
    </div>
</>
    );  
}
export default Detail;