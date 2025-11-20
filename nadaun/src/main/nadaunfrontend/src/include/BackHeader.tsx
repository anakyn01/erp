import HpTop2 from "./HpTop2";
import BackArrowImg from "../08_svg/BackArrowImg";

const BackHeader = () => {
    return(
<>
        <div className="detail-header">
            <HpTop2 />
            <header className="">
                <a href="/">
                <BackArrowImg/>
                </a>
                <h3></h3>
                <div>
                    
                </div>
            </header>        
        </div>
</>
    );
}
export default BackHeader;