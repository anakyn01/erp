import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './Home';
import Fortune from './01_sub/Fortune';
import Romantc from './01_sub/Romantic';
import Parting from './01_sub/Parting';
import Wealth from './01_sub/Wealth';
import Job from './01_sub/Job';
import Test from './01_sub/Test';

import Err_404 from './02_err/Err_404';
import Err_500 from './02_err/Err_500';
import Err_503 from './02_err/Err_503';
import NoInter from './02_err/NoInter';
import ServiceInspection from './02_err/ServiceInspection';
import Nop from './02_err/Nop';
import Privacy from './02_err/Privacy';
import Service from './02_err/Service';


import FirstLogin from './03_login/FirstLogin';
import RecentLogin from './03_login/RecentLogin';
import RecentLogin2 from './03_login/RecentLogin2';
import Agree from './03_login/Agree';
import Complete from './03_login/Complete';
import Kakao from './03_login/kakao';
import Google from './03_login/Google';

import Dc from './04_paid/Dc';
import PaidDetail from './04_paid/PaidDetail';
import PaidInput from './04_paid/PaidInput';
import PaidInputMan from './04_paid/PaidInputMan';
import Duplex from './04_paid/Duplex';
import DuplexEnd from './04_paid/DuplexEnd';
import Tran1 from './04_paid/Tran1';
import Tran2 from './04_paid/Tran2';
import Tran3 from './04_paid/Tran3';
import Select from './04_paid/Select';

import Loading from './05_free/Loading';
import Detail from './05_free/Detail';
import FreeDetail from './05_free/FreeDetail';

import Notenter from './06_profile/Notenter';
import Regist from './06_profile/Regist';
import UserInput from './06_profile/UserInput';
import Out from './06_profile/Out';
import ProfileSelect from './06_profile/Select';
import PayComp from './06_profile/PayComp';





function App() {
 

  return (
    <>
 <BrowserRouter>


      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fortune" element={<Fortune />} />
        <Route path="/romantic" element={<Romantc />} />
        <Route path="/parting" element={<Parting />} />
        <Route path="/wealth" element={<Wealth />} />
        <Route path="/job" element={<Job />} />
        <Route path="/test" element={<Test />} />
        <Route path="/err404" element={<Err_404/>} />
        <Route path="/err500" element={<Err_500/>} />
        <Route path="/err503" element={<Err_503/>} />
        <Route path="/nointer" element={<NoInter/>} />
        <Route path="/service" element={<ServiceInspection/>} />
        <Route path="/nop" element={<Nop/>} />
        <Route path="/term" element={<Service/>} />
        <Route path="/privacy" element={<Privacy/>} />
        
        <Route path="/flogin" element={<FirstLogin/>} />
        <Route path="/rlogin" element={<RecentLogin/>} />
        <Route path="/rlogin2" element={<RecentLogin2/>} />
        <Route path="/agree" element={<Agree/>} />
        <Route path="/comp" element={<Complete/>} />
        <Route path="/kakao" element={<Kakao/>} />
        <Route path="/google" element={<Google/>} />

        <Route path="/dc" element={<Dc/>} />
        <Route path="/dt" element={<PaidDetail/>} />
        <Route path="/pi" element={<PaidInput/>} />
        <Route path="/pim" element={<PaidInputMan/>} />
        <Route path="/dup" element={<Duplex/>} />
        <Route path="/tran1" element={<Tran1/>} />
        <Route path="/tran2" element={<Tran2/>} />
        <Route path="/tran3" element={<Tran3/>} />
        <Route path="/dupe" element={<DuplexEnd/>} />
        <Route path="/select" element={<Select/>} />


        <Route path="/loading" element={<Loading/>} />
        <Route path="/detail" element={<Detail/>} />
        <Route path="/des" element={<FreeDetail/>} />

        {/*프로필 */}
        <Route path="/not" element={<Notenter/>} />
        <Route path="/regist" element={<Regist/>} />
        <Route path="/userinput" element={<UserInput/>} />
        <Route path="/out" element={<Out/>} />
        <Route path="/profile" element={<ProfileSelect/>} />
        <Route path="/paycomp" element={<PayComp/>} />
      </Routes>
    </BrowserRouter>


    </>
  )
}


export default App
