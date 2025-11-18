
import HpTop2 from "../include/HpTop2";

const Loading = () => {
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
        <div className="load-any-wrap">
            <img src="/svg/dot.png" alt="" />
            <div className="text-center">
                홍길동님의<br/> 운세를 분석중이에요!
            </div>
        </div>
    </div>
</>
    );  
}
export default Loading;