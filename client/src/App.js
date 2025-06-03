import './App.css';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Reservation from './components/Reservation';
import AboutUs from './components/AboutUs';
import ScrollToTop from './components/ScrollToTop';
import Menu from './components/Menu';

function App() {
  return (
    <>  
      <BrowserRouter>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/reservation" element={<Reservation/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/menu" element={<Menu/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
