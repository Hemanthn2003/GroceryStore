import React from 'react'
import './Csselements/Header.css'
const Header = () => {
  return (
     
    <header className='headerBar'>
      <div className='logo'>
          <img src='./Assets/Logo.png' alt='Logo' />
      </div>
      <div className='navBar'>
      <button className='homeBtn'>Home</button> 
      <button className='cartImg'>9</button>
      </div>
    </header>
 
     )
}

export default Header
