import React from 'react'
import img from '../assets/logoAi.jpg'
import './header.css'
export default function Header() {
  return (
    <>

    <div className="header">
        <div className="left">
        <img src={img} alt="" />
        <p>Keep App</p>        
        </div>
    </div>
    
    </>
  )
}
