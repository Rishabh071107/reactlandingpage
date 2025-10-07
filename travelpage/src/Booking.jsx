import React from 'react'
import './booking.css'
function Booking() {
  return (
    <div className="table">
    
     <div className="booking">
         <h2>Booking</h2>
        <p>Name</p>
        <input type="text" placeholder="Enter your name"/>
        <p>No of members</p>
        <input type="number" placeholder="No of members"/>
        <p>Description</p>
        <textarea placeholder="description"></textarea>
        <p>Starting date</p>
        <input type="text" placeholder="DD-MM-YY"/>
        <p>Ending date</p>
        <input type="text" placeholder="DD-MM-YY"/>
        <p>Place</p>
        <select placeholder="Select your destination">
          <option>ooty</option>
          <option>Himachal pradesh</option>
          <option>rajasthan</option>
          <option>Kerala</option>
          <option>Goa</option>
          <option>Manali</option>
          <option>Jammu</option>
          <option>darjeeling</option>
          <option>ladakh</option>
        </select>
        <button>Book now</button>
        </div>
        </div>
  )
}

export default Booking
