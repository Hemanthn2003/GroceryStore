import React from 'react'
import { Link } from'react-router-dom'
import './Csselements/Hero.css'
const Hero = () => {
  return (
    <div>
    <section className='navDifferentiator'>
        <div className='vegetableNav'>
              <Link to="/vegetables"><img src="/Assets/VegetableBanner.png" alt="VegetableBanner" /></Link>
      <p>Vegetables</p>
      </div>
        <div className='fruitNav'>
      <Link to="/fruits"><img src="/Assets/FruitBanner.png" alt="FruitBanner" /></Link>
       <p>Fruits</p>
       </div>
    </section>
    <div className='shopHead'>
    <h1>Our Shop</h1>
    </div>
    </div>
  )
}

export default Hero
