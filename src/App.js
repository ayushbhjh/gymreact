
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Navbar from './componets/Navbar/Navbar';
import Home from './componets/Home/Home';
import Program from './componets/Program/Program';
import Plan from './componets/Plan/Plan';
import Blog from './componets/Blog/Blog';
import Contact from './componets/Contact/Contact';
import Footer from './componets/Footer/Footer';
import Sign from './componets/Signup/Sign';
import { useState } from 'react';

function App() {
  const [signUpName, setSignUpName] = useState("Join Now") 

  return (
    <div>
      <Navbar signUpName={signUpName}/>
       <Routes>
      <Route path='/Home' element={<Home/>} />
      <Route path='/Program' element={<Program/>} />
      <Route path='/Plan' element={<Plan/>} />
      <Route path='/Blog' element={<Blog/>} />
      <Route path='/Contact' element ={<Contact/>}/>
      <Route path='/Footer' element={<Footer/>}/>
      <Route path='/Sign' element={<Sign signUpName={signUpName} setSignUpName={setSignUpName} />}/>
    </Routes>
 
    </div>
  )
}

export default App;
