import React, { useState } from 'react'
import './style.sass'
import { FiInstagram, FiGithub } from 'react-icons/fi'
import { SiGmail } from 'react-icons/si'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { Value } from 'sass'

function Footer() {

  const [email, setEmail] = useState('icaro.andries15@gmail.com');

  const eventHandler = () => {
    if(window.outerWidth < 410) {
      setEmail('gmail')
    } else{
      setEmail('icaro.andries15@gmail.com')
    }
  }

  window.addEventListener('load', () => {
    if(window.innerWidth < 410 && email != 'gmail'){
      setEmail('gmail')
    }
  })
  window.addEventListener('resize', eventHandler)


  return (
    <div className='footer' id='contact'>
      <div className='list'>
        <ul>
          <li><a href='https://www.instagram.com/icarogabriel13/'><FiInstagram /> instagram</a></li>
          <li><a href='https://www.linkedin.com/in/icaro-andries-70304a206/'><AiOutlineLinkedin /> linkedin</a></li>
          <li><a href='https://github.com/IcaroAndries'><FiGithub /> github</a></li>
          <li><a title='icaro.andres15@gmail.com'><SiGmail /> {email}</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer