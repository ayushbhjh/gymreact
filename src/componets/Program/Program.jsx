import React from 'react'
import './Program.css'
export default function Program() {
  return (
    <div className='program-conatiner'>
      <div class="program" id="program">
        <div class="head">
          <h1>Our <span>Program's</span></h1>
          <div class="ourprogram">
            <div class="crd">
              <img
                src="https://img.freepik.com/free-photo/pilates-group-working-out-gym_1303-16387.jpg?size=626&ext=jpg&uid=R137342116&ga=GA1.1.430747588.1707458700&semt=ais"
                alt="remote-image"
              />
              <h3>Dance</h3>
            </div>
            <div class="crd">
              <img
                src="https://img.freepik.com/free-photo/person-doing-indoor-cycling_23-2149270269.jpg?size=626&ext=jpg&uid=R137342116&ga=GA1.1.430747588.1707458700&semt=sph"
                alt="remote-image"
              />
              <h3>Cardio</h3>
            </div>
            <div class="crd">
              <img
                src="https://img.freepik.com/free-photo/athlete-focused-tire-flipping_1098-15038.jpg?size=626&ext=jpg&uid=R137342116&ga=GA1.1.430747588.1707458700&semt=ais"
                alt="remote-image"
              />
              <h3>Heavy Weight</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
