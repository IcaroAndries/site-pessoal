import React from 'react'
import './style.sass'
import { Typewriter } from 'react-simple-typewriter'

function About() {

  const text = "Programming has been cool for me since I was younger, it's a passion that allows me to create a lot of things just by writing code. So, I decided to learn more, and now I hope that my abilities can be used to solve people's problems."

  return (
    <div className='about' id='about'>
        <div className='box'>
            <h1>
              About Me
            </h1>
            
            <div className='descricao'>
              <div className='texto'>
                <h2>
                  A developer and freelancer based in Brasil
                </h2>
                <p>
                  <Typewriter words={[text]}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </p>
              </div>

              <img src="../../../public/imgs/eu.jpg" alt="eu mesmo" />

            </div>
        </div>
    </div>
  )
}

export default About