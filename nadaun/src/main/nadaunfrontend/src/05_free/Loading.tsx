import LoadingHeader from "../include/LoadingHeader";

const Loading = () => {
    return(
<>
   <div className="Min390Max">
<LoadingHeader/>
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