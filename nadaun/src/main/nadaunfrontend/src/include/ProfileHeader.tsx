import HpTop2 from "./HpTop2";
import BackArrowImg from "../08_svg/BackArrowImg";

const ProfileHeader =()=>{
    return(
<>
    <div className="position-fixed bg-white nav-wrap">
        <HpTop2 />
        <header className="d-flex justfify-content-around p20 align-items-center load-wrap ">
            <div className="w-25">
                <BackArrowImg/>
            </div>
            <h3 className="w-50 text-center">마이페이지</h3>
            <div className="w-25 d-flex justify-content-end"></div>
        </header>
    </div>
</>       
    );
}
export default ProfileHeader