import React from 'react'
import './style.sass'
import { Typewriter } from 'react-simple-typewriter'

function Hero() {
  return (
    <div className='hero' id='home'>
      <h1>
        My name is Icaro Andries and <br/> I am a 
        <p className='neon'> 
          <Typewriter
            words={['Freelancer', 'Developer', 'Student']}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          /> 
        </p>
      </h1>
    </div>
  )
}

export default Hero