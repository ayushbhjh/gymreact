import React from 'react'
import './Home.css'

export default function Home() {
  return (
    <>
   <div className='div-container'>
      <div className="home" id="home">
        <div className="hometext">
          <h1>Commit to Be Fit</h1>
          <h3>Once you see the Result, it becomes an addiction</h3>
          <p>
            Fitness is paramount for overall well-being, encompassing physical,
            mental, and emotional health. Engaging in regular exercise <br />
            routines, whether it's cardio, strength training, or flexibility
            exercises
          </p>
          <button>Join Now</button>
        </div>
        <img
          src="https://img.freepik.com/free-photo/couple-training-together-gym_651396-1076.jpg?size=626&ext=jpg&uid=R137342116&ga=GA1.1.430747588.1707458700&semt=sph"
          alt="remote image"
        />
      </div>
    </div>
    
    </>
    
  )
}
