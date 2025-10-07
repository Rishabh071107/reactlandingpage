
import './App.css'
import Navbar from './Navbar'
import About from './About'
import Packages from './Packages'
import Booking from './Booking'
import Footer from './Footer'
import Home from './Home'
import Landingpage from './Landingpage'
import { Route, Routes } from "react-router-dom";

function App() {
 

  return (
    <>
     <Routes>
      <Route path="/" element = {<Landingpage/>}>
             <Route path='/Home' element={<Home />} />
             <Route path = '/About' element ={<About />} />
             <Route path='/Packages' element={<Packages />}/>
             <Route path = '/Booking' element ={<Booking />} />
      </Route>
    </Routes>
     

      
    </>
  )
}

export default App
