import logo from '../../img/logo full lg.png'
import React from 'react';
import Div10 from '../description/div10'



export default function Home() {
    return (
  <div class="navbar">
    {/* <a href="#home">Home</a> */}
    {/* <a href="#news">BAHO</a> */}
    <img className='nav-image' src={logo} />
    {/* <a href="#contact">Contact</a> */}
  </div>
    )
}