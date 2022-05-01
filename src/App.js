import React from 'react';
import './App.css';
import TopArr from './comp/TopArr';
import TopBar from './comp/TopBar';
import Snack from './comp/Snack';
import Giftshop from './comp/GiftShop';
import Footer from './comp/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
        <BrowserRouter>
            <TopArr/>
            <TopBar/>
            <Routes>
                <Route path="/" element={<Snack />}></Route>
                <Route path="/giftshop" element={<Giftshop />}></Route>
            </Routes>
            <Footer/>
       </BrowserRouter>
    </>
    
    );
}

export default App;
