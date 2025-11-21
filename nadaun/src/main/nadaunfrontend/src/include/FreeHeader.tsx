import HpTop2 from "./HpTop2";
import ExitImg from "../08_svg/ExitImg";

const FreeHeader = () => {
    return(
<>
    <div className="position-fixed w-100 bg-white nav-wrap">
        <HpTop2 />
        <header className="d-flex justfify-content-around p20 align-items-center load-wrap ">
            <div className="w-25"></div>
            <h3 className="w-50 text-center">상세풀이</h3>
            <div className="w-25 d-flex justify-content-end">
                <ExitImg/>
            </div>
        </header>
    </div>
</>        
    )
}
export default FreeHeader;