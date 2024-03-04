import React,{useState} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import Sign from '../Signup/Sign';

export default function Navbar({signUpName}) {
  const [showSignup, setShowSignup] = useState(false);

  const toggleSignup = () => {
    setShowSignup(!showSignup);
  };
  return (
    <div>
      <nav id="nav">
        <div id="logo">
          <h1>Get-Fit</h1>
        </div>
        <ul className='menu'>
          <Link  to='/Home' className='name'>Home</Link>
          <Link  to='/Program' className='name' >Program</Link>  
          <Link  to='/Plan' className='name'>Plan</Link>  
          <Link  to='/Blog' className='name'>Blog</Link>  
          <Link  to='/Contact' className='name' >Contact</Link> 

          <Link to='/Sign' className='sign' > 
          <button className='name' onClick={toggleSignup}>{signUpName}</button>
          </Link>
        </ul>
      </nav>
    </div>
  )
}
