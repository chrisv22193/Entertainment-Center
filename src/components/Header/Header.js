import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div>
        <span onClick={() => window.scroll(0,0)} className='header' role="img" aria-label="popcorn and film">🍿 Entertainment Center 🎞</span>
    </div>
  )
}

export default Header