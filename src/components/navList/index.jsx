import React from 'react'
import sections from '../../config/sections'
import './style.sass'

function NavList() {
  return (
    <nav>
        <ul>
            {
                sections.map((val,index) =>{
                    return(
                        <li key={index}>
                            <a href={val.ref}>{val.title}</a>        
                        </li>
                    )
                })
            }
        </ul>
    </nav>
  )
}

export default NavList