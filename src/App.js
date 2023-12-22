import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "../src/assets/style/style.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Checkout from "./pages/Checkout";
import NoPageFound from "./pages/NoPageFound";
import ContactUs from "./pages/ContactUs";
import Discover from "./pages/Discover";
import FleetView from "./pages/FleetView";
import LongTermForm from "./pages/LongTermForm";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="fleet" element={<FleetView />} />
          <Route path="discover" element={<Discover />} />
          <Route path="longtermform" element={<LongTermForm />} />
          <Route path="privacypolicy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NoPageFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
