
import './App.css'
import Banner from './components/Banner'
import Calgary from './components/Calgary'
import Services from './components/Services'
import WhyUs from './components/Featured'
import Navbar from './shared/Navbar'
import Reviews from './components/Reviews'
import Footer from './shared/Footer'
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import NavbarBtn from './shared/NavbarBtn'

function App() {


  return (
    <>
    <BrowserRouter>
     <Navbar/>
     <Banner/>
     <Calgary/>
     <Services/>
     <WhyUs/>
     <Reviews/>
     <NavbarBtn/>
     <Footer/>
     </BrowserRouter>
         </>
  )
}

export default App
