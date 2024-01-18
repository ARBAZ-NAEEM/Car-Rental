import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "../src/assets/style/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Checkout from "./pages/Checkout";
import NoPageFound from "./pages/NoPageFound";
import ContactUs from "./pages/ContactUs";
import Discover from "./pages/Discover";
import FleetView from "./pages/FleetView";
import LongTermForm from "./pages/LongTermForm";
import PrivacyPolicy from "./pages/PrivacyPolicy";

import AOS from "aos";
import { useEffect } from "react";
import SuccessPayment from "./pages/SuccessPayment";
import FailPayment from "./pages/FailPayment";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="aboutus" element={<About />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="fleetview" element={<FleetView />} />
          <Route path="discover" element={<Discover />} />
          <Route path="longtermform" element={<LongTermForm />} />
          <Route path="ourpolicy" element={<PrivacyPolicy />} />
          <Route path="successpayment" element={<SuccessPayment />} />
          <Route path="failpayment" element={<FailPayment />} />
          <Route path="*" element={<NoPageFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
