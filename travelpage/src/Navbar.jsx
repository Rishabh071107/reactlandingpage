import React from 'react'
import './nav.css'
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
   const navigate = useNavigate();

  function navigateTo(path) {
    navigate(`/${path}`);
    console.log(path);
  }
  return (
    <header className="nav">
        <div className='logo'>TripCraft</div>
      <ul className="list">
        <li onClick={() => navigateTo('Home')}>Home</li>
        <li onClick={() => navigateTo('About')}>About</li>
        <li onClick={() => navigateTo('Packages')}>Packages</li>
        <li onClick={() => navigateTo('Booking')} >Booking</li>
        
      </ul>
    </header>
  )
}

export default Navbar
