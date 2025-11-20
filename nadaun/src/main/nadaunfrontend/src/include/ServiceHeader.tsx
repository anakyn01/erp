import BackArrowImg from "../08_svg/BackArrowImg";
import HpTop2 from "./HpTop2";

const ServiceHeader = () => {
    return(
<>
        <div className="detail-header">
            <HpTop2 />
            <header className="">
                <a href="/"><BackArrowImg/></a>
                <h3>서비스 이용약관</h3>
                <div>
                    
                </div>
            </header>        
        </div>
</>
    );
}
export default ServiceHeader;