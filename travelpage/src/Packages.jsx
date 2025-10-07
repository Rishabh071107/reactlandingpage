import React from 'react'
import './packages.css'
import img2 from './images/dubai-panaromic-view-floor-day-600nw-2078875552.webp'
import img3 from './images/pngtree-hong-kong-at-night-png-image_2213408.jpg'
import img4 from './images/rome.jpg'
function Packages() {
  return (
 <>   
<div className="container">
   
    <div className="card">
      <img src={img2}></img>
      <h2>Dubai🌃</h2>
      <p>5 Days / 4 Nights</p>
      <p class="price">₹75,000 </p>
      <button className="button">Book Now</button>
    </div>

    
    <div className="card">
      <img src={img3}></img>
      <h2>Thailand 🏖️</h2>
      <p>6 Days / 5 Nights</p>
      <p class="price">₹60,000 </p>
      <button className="button">Book Now</button>
    </div>

   
    <div className="card">
      <img src={img4}></img>
      <h2>Hong Kong 🍜 </h2>
      <p>4 Days / 3 Nights</p>
      <p class="price">₹55,000 </p>
      <button className="button" >Book Now</button>
    </div>
    </div>
    <div className='nxt'>
       <h1>
        Lets Book you Trip 😎!
       </h1>
    </div><br/><br/><br/>
   </> 
  )
}

export default Packages
