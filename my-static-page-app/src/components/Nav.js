import React from 'react';
import Logo from '../images/logo.png';
 
 export default function Nav(){
    return (   
      <nav>
         <div className='logo'>
            <img src={Logo} width="30" alt='logo png'></img>
            <h3>ReactFacts</h3>
         </div>
         <h4 className='title'>React Course - Project 1</h4>
      </nav>

    )}