import React, { Component } from 'react'
import './topbar.css';
import {Outlet, Link} from "react-router-dom";


export default class TopBar extends Component {
  render() {
    return (
      
      <div className="w_container ">
        <img src="images/logo.png"></img>
        <ul className="w_play">
          <li><i class="fa-solid fa-unlock"></i> login</li>
          <i class="fa-solid fa-minus"></i>
          <li><i class="fa-solid fa-user-large"></i> MyPage</li>
          <i class="fa-solid fa-minus"></i>
          <li><i class="fa-solid fa-video"></i> Buy</li>
        </ul>
        <ul className="w_top">
              <li><Link to="/"> <i class="fa-solid fa-star"></i> Snack <i class="fa-solid fa-star"></i></Link></li>
              <span><i class="fa-solid fa-minus"></i></span>
              <li><Link to="/giftshop"> <i class="fa-solid fa-star"></i> Gift-Shop <i class="fa-solid fa-star"></i> </Link></li>
        </ul>
      </div>
           
    )
  }
}
