import React from 'react'
//import { RiMenu2Line, RiCloseLine } from 'react-icons/ri'
import logo from "../../assets/logo.svg"
import "./navbar.css"

function Navbar() {
  return (
    <div className='gpt3-navbar'>
      <div className='gpt3-navbar-links'>
        <div className='gpt3-navbar-links_logo'>
          <img src={logo} alt="logo"  />
        </div>

        <div className='gpt3-navbar-links-container'>
          <p><a href='#home'>Home</a></p>
          <p><a href='#whatgpt3'>What's GPT3?</a></p>
          <p><a href='#possibility'>OpenAI</a></p>
          <p><a href='#features'>Case Studies</a></p>
          <p><a href='#blog'>Library</a></p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
