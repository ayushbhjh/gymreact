import React from 'react'
import './Plan.css'
export default function Plan() {
  return (
    <div className='plan-container'>
      <div class="plan" id="plan">
        <div class="head">
          <h1>Our <span>Plan's</span></h1>
        </div>
        <div class="ourplan">
          <div class="card">
            <i class="fa-solid fa-dumbbell"></i>
            <h3>Basic Package</h3>
            <h1>
              30 days in
              <span><i class="fa-solid fa-indian-rupee-sign"></i></span>2000
            </h1>
            <p>30 days in 2000</p>
            <p>No personal Trainer</p>
            <p>valid for 30 days</p>
            <p>full day valid</p>
            <button>Buy Plan</button>
          </div>
          <div class="card">
            <i class="fa-solid fa-money-bill"></i>
            <h3>Premimum Package</h3>
            <h1>
              30 days in
              <span><i class="fa-solid fa-indian-rupee-sign"></i></span>5000
            </h1>
            <p>30 days in 5000</p>
            <p>No personal Trainer</p>
            <p>valid for 90 days</p>
            <p>full day valid</p>
            <button>Buy Plan</button>
          </div>
          <div class="card">
            <i class="fa-solid fa-diamond"></i>
            <h3>Daimond Package</h3>
            <h1>
              30 days in
              <span><i class="fa-solid fa-indian-rupee-sign"></i></span>10000
            </h1>
            <p>30 days in 10000</p>
            <p>personal Trainer</p>
            <p>valid for 120 days</p>
            <p>full day valid</p>
            <button>Buy Plan</button>
          </div>
        </div>
      </div>

    </div>
  )
}
