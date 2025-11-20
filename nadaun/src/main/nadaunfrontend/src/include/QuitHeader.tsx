import HpTop2 from "./HpTop2";
import ExitImg from "../08_svg/ExitImg";

const QuitHeader = () => {
    return(
<>
        <div className="detail-header">
            <HpTop2 />
            <header className="">
                <a href="/"></a>
                <h3>풀이중</h3>
                <div>
                <ExitImg/>
                </div>
            </header>        
        </div>
</>
    );
}
export default QuitHeader;