import React,{useState}from 'react'
import './Sign.css'
import Navbar from '../Navbar/Navbar'
export default function Sign({signUpName, setSignUpName}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleSignup = () => {
    alert(`Welcome ${name}!`);
    setSignUpName(name)
  };
  return (
    <>
      <Navbar signUpName={signUpName} />
      <div className='signform'>
      <div className="box">
      <h1 className='signu'>Sign up</h1>
      <input type="text" placeholder='Enter Your name'  className='input'       value={name} 
            onChange={(e) => setName(e.target.value)}/><br />
      <input type="email" placeholder='Enter your Email'  className='input'  value={email} 
            onChange={(e) => setEmail(e.target.value)} /><br />
      <input type="password" placeholder='Password'  className='input'   value={password} 
            onChange={(e) => setPassword(e.target.value)}/><br />
      <label htmlFor="check">I accept the term and Condtion
      <input type="checkbox" id='check' className='check'  checked={acceptedTerms} 
              onChange={(e) => setAcceptedTerms(e.target.checked)}/></label>
      <button className='Signup' onClick={handleSignup}>Sign up</button>
      </div>
      </div>
    </>
 
  )
}
