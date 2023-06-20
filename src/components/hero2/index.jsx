import React from 'react';
import './style.sass';
import { Typewriter } from 'react-simple-typewriter';
import img from '../../imgs/ela.png';

function Hero2() {
    const text = 'talvez voce fique brava mas queria que visse o quão lindo é vc sorrindo, também fiz a graça de te colocar aqui rsrs';

  return (
    <div className='hero2' id='hero2'>
        <div className='box'>
            <h1>
              A princesa
            </h1>
            
            <div className='descricao'>
                <div className='texto'>
                    <h2>
                        É sim, vc pode ate negar mas oque esta embaixo é verdade e vc sabe
                    </h2>
                    <p>
                    <Typewriter words={[text]}
                        cursor
                        cursorStyle='_'
                        typeSpeed={25}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                    </p>
                </div>

                <img src={img} alt="eu mesmo" />

                </div>
        </div>
    </div>
  )
}

export default Hero2;