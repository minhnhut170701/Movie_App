import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css'
//Components
import Home from "./components/Home";
import Detail from './components/DetailMovie/Detail';
import Footer from './components/Footer';
import Nav from './components/Header/Nav';
import FillterMovie from './components/Movie/FillterMovie';
import LoginPage from './components/Login/LoginPage';
import RegisterPage from './components/Login/RegisterPage';
import ScrolltoTop from './components/ScrolltoTop';
import PricingPage from './components/Pricing/PricingPage';
import PayPage from './components/Pay/PayPage';
import ProfilePage from './components/Profile/ProfilePage';
import Spiner from './components/Spiner';

function App() {
  
  const {isLoading} = useSelector((state) => state.auth)
  
  if(isLoading){
    return <Spiner />
  }
  return (
    <BrowserRouter>
     <ScrolltoTop />
      <Nav />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:detail' element={<Detail />} />
          <Route path='/search' element={<FillterMovie />} />
          <Route path='/pricing' element={<PricingPage />} />
          <Route path='/checkout' element={<PayPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
