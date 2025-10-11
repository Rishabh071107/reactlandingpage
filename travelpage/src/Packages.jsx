import React from 'react'
import FilterComp from './Components/FilterComp'
import './packages.css'
import img2 from './images/dubai-panaromic-view-floor-day-600nw-2078875552.webp'
import img3 from './images/pngtree-hong-kong-at-night-png-image_2213408.jpg'
import img4 from './images/rome.jpg'
import img5 from './images/thai3.jpg'
import img6 from './images/peru.jpg'
import img7 from './images/swizz.jpg'
import { useState } from 'react'
function Packages() {

  const [search,SetSearch] = useState('')
  console.log(search)
  
    const destinations = [
      
{ id: 1, name: "Dubai", type: "Adventure", country: "UAE" ,img:img2},
{ id: 2, name: "Hong kong", type: "City", country: "China",img:img3 },
{ id: 3, name: "Rome", type: "Landscapes", country: "Italy",img:img4 },
{ id: 4 , name: "Bangkok", type: "Beaches", country: "Thailand",img:img5},
{ id: 5, name: "Kilimanjaro", type: "Mountain", country: "Peru",img:img6 },
{ id: 6, name: "Zurich", type: "Hiking", country: "Switzerland",img:img7 }

    ];
    


    const filtdest = destinations.filter(destination =>
    destination.name.toLowerCase().includes(search.toLowerCase())|| (destination.type.toLowerCase().includes(search.toLowerCase())||destination.country.toLowerCase().includes(search.toLowerCase()))

  );
  
  return (
 <>   
 <div>
  <input type="text" className='filbox' value={search} onChange={(chan)=>SetSearch(chan.target.value)} placeholder='search for a place'></input>
      
 </div>



<ul>
   <div className='container'>
{
  
  filtdest.map((destination,index)=>{


     return(
    

   <li key={destination.id}>

 <div className="card">
      <img src={destination.img}></img>
      <h2>{destination.name}</h2>
      <p>{destination.type}</p>
      <p class="price"> {destination.country} </p>
      <button className='but'> book now</button>
      
    </div>
   </li>
   )
  }
  )
  }
  </div>
</ul>

 
 </>
  

  )}

export default Packages
