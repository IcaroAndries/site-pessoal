import React, { useState } from 'react'
import NavList from '../navList'
import './style.sass'

function Header() {
  const [scrolled, setScrolled] = useState(false)

  window.addEventListener('scroll', () => {
    let scrollposition = window.scrollY

    if(scrollposition > 80){
      setScrolled(true)
    } else{
      setScrolled(false)
    }
  })

  return (
    <header className={scrolled ? 'header fixed' : 'header'}>
        <NavList />
    </header>
  )
}

export default Header