import React, { useState } from 'react'
import './Contact.css'
import Footer from '../Footer/Footer';
export default function Contact() {
  
  const [cont, setCont] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  function handleSubmit() {
    console.log("Name:", name);
    console.log("Number:", number);
    setName('');
    setNumber('');
  }

  return (
    <div className='contact-container'>
       <div className="contact" id="contact">
        <div className="head">
          <h1> Let's <span>Begin...</span></h1>
          <h2>Contact <span>Us</span></h2>
        </div>
        <div className="contactpage">
          <div className="contactext">
            <h1>Let's Go</h1>
            <h2>Start Your journey with us....</h2>
          </div>
          <img
            src="https://img.freepik.com/free-photo/happy-female-athlete-exercising-stationary-bike-during-her-spinning-class-gym-copy-space_637285-348.jpg?size=626&ext=jpg&uid=R137342116&ga=GA1.1.430747588.1707458700&semt=ais"
            alt="remote image"
          />
        </div>
        <div className="contactus">
          <h1 className='cont'>Contact us</h1>
          <input type="text" placeholder="Enter your Name" id="name"   value={name} onChange={(e) => setName(e.target.value)} /><br/>
          <input type="text" placeholder="Enter your Number" id="number"  value={number} onChange={(e) => setNumber(e.target.value)}/><br/>
          <button onClick={handleSubmit}>Submit</button> 
        </div>
      </div>
      <Footer/>
    </div>
  )
}
