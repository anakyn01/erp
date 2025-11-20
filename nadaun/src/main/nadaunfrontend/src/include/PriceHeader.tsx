import BackArrowImg from "../08_svg/BackArrowImg";
import HpTop2 from "./HpTop2";

const PriceHeader = () => {
    return(
    <>
    <div className="headerSet">
            <HpTop2 />
            <header className="">
                <a href="/">
                <BackArrowImg/>
                </a>
                <h3>결제</h3>
                <div></div>
            </header>        
    </div>
    </>    
    );
}
export default PriceHeader;