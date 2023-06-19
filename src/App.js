import Homepage from "./components/Home/Homepage";
import Signup from './Pages/Signup';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from './Pages/pages/LoginPage.jsx'
import ErrorPage from "./ErrorPage";
import CreateShipment from "./components/Utils/Orders/CreateShipment";
import AllShipment from "./components/Utils/Orders/AllShipment";
import PickrrConnect from "./components/Utils/Growth/PickrrConnect";
import MainIntegration from "./components/Utils/integration/MainIntegration";
import InteCards from "./components/Utils/integration/InteCards";
import InnerCard from "./components/Utils/integration/InnerCard";
import Ndr from "./components/Utils/Ndr";
import Finance from "./components/Utils/Finance/Finance";
import RateCard from "./components/Utils/Finance/RateCard";
import RateCardReverse from "./components/Utils/Finance/RateCardReverse";
import Rto from "./components/Utils/Finance/Rto";
import EarlyCod from "./components/Utils/Finance/EarlyCod";
import Invoice from "./components/Utils/Finance/Invoice";
import CodeRemitance from "./components/Utils/Finance/CodeRemitance";
import PerformanceInvoice from "./components/Utils/Finance/PerformanceInvoice";
import AdjustmentNote from "./components/Utils/Finance/AdjustmentNote";
import Faqmain from "./components/Utils/Faq/Faqmain";
import HelpDesk from "./components/Utils/HelpDesk";
import Search from "./components/Utils/Orders/Search";
import LostDamage from "./components/Utils/Finance/LostDamage";
import OtherOrderPage from './components/Utils/Orders/OhterOrderPage'
import DashOrder from "./components/Utils/DashOrder";
// drftgyhujrdftghuj
function App() {
  return (
    <>
      <Router>

        <Routes>
          <Route exact path="/" element={<Homepage/>} />
          <Route exact path="/register" element={<Signup/>}  />
          <Route exact path="/login" element={<LoginPage/>}  />
          <Route path="*" element={<ErrorPage/>}  />
          <Route exact path="/create" element={<CreateShipment/>}/>
          <Route exact path="/shipment" element={<AllShipment/>}/>
          <Route exact path="/connect" element={<PickrrConnect/>}/>
          <Route exact path="/integrate" element={<MainIntegration/>}/>
          <Route exact path="/intecard" element={<InteCards/>}/>
          <Route exact path="/innercard" element={<InnerCard/>}/>
          <Route exact path="/ndr" element={<Ndr/>}/>
          <Route exact path="/invoice" element={<Invoice/>}/>
          <Route exact path="/Rate" element={<RateCard/>}/>
          <Route exact path="/reverse" element={<RateCardReverse/>}/>
          <Route exact path="/rto" element={<Rto/>}/>
          <Route exact path="/earlycod" element={<EarlyCod/>}/>
          <Route exact path="/finance" element={<Finance/>}/>
          <Route exact path="/codeRemit" element={<CodeRemitance/>}/>
          <Route exact path="/PerformInvoice" element={<PerformanceInvoice/>}/>
          <Route exact path="/adjust" element={<AdjustmentNote/>}/>
          <Route exact path="/faq" element={<Faqmain/>}/>
          <Route exact path="/helpdesk" element={<HelpDesk/>}/>
          <Route exact path="/order" element={<DashOrder/>}/>
          



          <Route exact path="/search" element={<Search/>}/>
          <Route exact path="/other" element={<OtherOrderPage/>}/>
          {/* <Route exact path="/allship" element={<AllShipment/>}/> */}
















        </Routes>
      </Router>
    </>
  );
}

export default App;
