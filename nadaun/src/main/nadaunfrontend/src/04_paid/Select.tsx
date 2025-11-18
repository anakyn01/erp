

import SelectLayer from "../07_modal/SelectLayer";
import Footer from "../include/Footer";
import SelectHeader from "../include/SelectHeader";


const Select = () => {
    return(
<>
<div className="Min390Max">
<SelectHeader/>

<div className="select-wrap mt-80">
    <h5>내 사주</h5>        
</div> 
<div className="underline"></div>


<div className="select-wrap d-flex justify-content-between">
    <div className="pic-wrap d-flex align-items-center">
        <div className="radio">
            <input type="radio"/>
        </div>
        <img src="/svg/paid/select1.png" alt="" />
    </div>
    
    <div className="text-wrap">
        <div className="d-flex justify-content-between">
            <h3>별빛속에 피어난 작은 꿈(본인)</h3>
            <button>&middot;&middot;&middot;</button>
        </div>
        <p>
        양력 1994.07.23 (午)시<br/>
        원숭이띠 <span>|</span> 물고기자리 <span>|</span> 여성
        </p>
    </div>
</div>   

<div className="select-wrap mt-80">
    <h5>함께 보는 사주</h5>        
</div> 
<div className="underline"></div>

<div className="select-wrap d-flex justify-content-between align-items-center">
    <div className="pic-wrap d-flex align-items-center">
        <div className="radio">
            <input type="radio"/>
        </div>
        <img src="/svg/paid/select1.png" alt="" />
    </div>
    
    <div className="text-wrap">
        <div className="d-flex justify-content-between align-items-center">
            <h3>연인-1(연인)</h3>
            <button>&middot;&middot;&middot;</button>
        </div>
        <p>
        양력 1994.07.23 (午)시<br/>
        원숭이띠 <span>|</span> 물고기자리 <span>|</span> 여성
        </p>
    </div>
</div>

<div className="select-wrap d-flex justify-content-between align-items-center">
    <div className="pic-wrap d-flex align-items-center">
        <div className="radio">
            <input type="radio"/>
        </div>
        <img src="/svg/paid/select1.png" alt="" />
    </div>
    
    <div className="text-wrap">
        <div className="d-flex justify-content-between">
            <h3>연인-2(연인)</h3>
            <button>&middot;&middot;&middot;</button>
        </div>
        <p>
        양력 1994.07.23 (午)시<br/>
        원숭이띠 <span>|</span> 물고기자리 <span>|</span> 여성
        </p>
    </div>
</div>

<div className="select-wrap d-flex justify-content-between  align-items-center">
    <div className="pic-wrap d-flex align-items-center">
        <div className="radio">
            <input type="radio"/>
        </div>
        <img src="/svg/paid/select1.png" alt="" />
    </div>
    
    <div className="text-wrap">
        <div className="d-flex justify-content-between">
            <h3>바람 따라 걷는 여행자(친구)</h3>
            <button>&middot;&middot;&middot;</button>
        </div>
        <p>
        양력 1994.07.23 (午)시<br/>
        원숭이띠 <span>|</span> 물고기자리 <span>|</span> 여성
        </p>
    </div>
</div>



</div>
<SelectLayer/>
<Footer/>
</>
    );  
}
export default Select;