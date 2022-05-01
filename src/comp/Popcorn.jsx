import React from 'react';
import './snack.css';


const popcorn = () => {
 
  return (
    <>
      <div className="w_s-p">
        <div className="w_box">
          <img className="w_pop"src="images/l_popcorn.jpg"/>
          <p>고소한 팝콘 (Large)</p>
          <p>4,000 원 <i class="fa-solid fa-minus"></i> 4000kcal</p> 
        </div>
        <div className="w_box">
          <img className="w_pop"src="images/m_popcorn.jpg"/>
          <p>고소한 팝콘 (Medium)</p>
          <p>3,000 원 <i class="fa-solid fa-minus"></i> 3000kcal</p> 
        </div>
        <div className="w_box">
          <img className="w_pop"src="images/l_sweetpopcorn.jpg"/>
          <p>달달한 팝콘 (Large)</p>
          <p>6,000 원 <i class="fa-solid fa-minus"></i> 5000kcal</p> 
        </div>
        <div className="w_box">
          <img className="w_pop"src="images/m_sweetpopcorn.jpg"/>
          <p>달달한 팝콘 (Medium)</p>
          <p>5,000 원 <i class="fa-solid fa-minus"></i> 4000kcal</p> 
        </div>
        <div className="w_box">
          <img className="w_pop"src="images/l_hotpopcorn.jpg"/>
          <p>매콤한 팝콘 (Large)</p>
          <p>6,000 원 <i class="fa-solid fa-minus"></i> 5000kcal</p> 
        </div>
        <div className="w_box">
          <img className="w_pop"src="images/m_hotpopcorn.jpg"/>
          <p>매콤한 팝콘 (Medium)</p>
          <p>5,000 원 <i class="fa-solid fa-minus"></i> 4000kcal</p> 
        </div>
    </div>
    </>
  )
}

export default popcorn;