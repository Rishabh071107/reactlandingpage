import React from 'react'
import img1 from './images/download.jpeg'
import img2 from './images/wiz.jpeg'
import './about.css'
import img3 from './images/paris.jpeg'
function About() {
  return (
    <><div >
          <h1 className='abt'>About us</h1></div>
     <div className='container'>   
        <img src={img1} className='card'></img>
        <img src={img2} className='card'></img>
        <img src ={img3} classname='card'></img>

     </div>  
          <p className='phr'> At TripCraft, we believe that travel is not just about visiting new places — it’s about experiencing the world with open eyes and a curious heart. Our goal is to make every journey more meaningful, comfortable, and inspiring. We are passionate travelers ourselves, and that’s why we created TripCraft — a platform where travel meets creativity. Whether you’re seeking a peaceful retreat in the mountains, a thrilling adventure on tropical islands, or a cultural exploration across cities, TripCraft helps you design every moment to perfection.

Every trip is unique, and so are your dreams. At TripCraft, we carefully curate destinations, activities, and experiences that suit your interests and budget. From hidden gems to world-famous landmarks, we bring you closer to the world’s most beautiful corners. Our team constantly researches travel trends, explores new routes, and collaborates with trusted partners to ensure you get the best recommendations and deals — all in one place.

We understand that planning a trip can be overwhelming. That’s why TripCraft was built to make travel planning effortless. With easy navigation, personalized suggestions, and detailed guides, we help you explore destinations like a pro — even before you pack your bags. Our mission is to make travel more accessible to everyone, no matter where you come from or where you want to go.

Beyond destinations, TripCraft is about stories — the stories you live, share, and remember. Each photo you capture, each meal you taste, and each sunset you watch becomes part of your travel tale. We want to be the silent partner that helps you write that story beautifully. Because in the end, travel is not just about reaching a place — it’s about the journey you take and the memories you bring back.

So whether you’re a solo traveler chasing freedom, a couple searching for romance, or a family looking to bond over new experiences, TripCraft is here to guide you every step of the way. Let us help you explore the world, discover yourself, and craft the trip of a lifetime.  </p>
      
      <div >
      <h1 className='hed'>Our Trending 🔥!Tour packages</h1>


     </div></>
  )
}

export default About
