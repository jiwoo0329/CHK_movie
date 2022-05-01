import React from 'react'
import './snack.css';

const side = () => {
  return (
    <div className="w_s-p">
        <div className="w_box">
          <img className="w_pop"src="images/nacho.jpg"/>
          <p>나쵸</p>
          <p>3,500 원 <i class="fa-solid fa-minus"></i> 250kcal</p> 
        </div>
        <div className="w_box">
          <img className="w_pop"src="images/hotd.jpg"/>
          <p>핫도그</p>
          <p>2,500 원 <i class="fa-solid fa-minus"></i> 300kcal</p> 
        </div>
       
    </div>
  )
}

export default side