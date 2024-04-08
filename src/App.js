import React from 'react'
import {Blogs, Features, Footer, Header, Possibility, Whatgpt} from "./Containers"
import {Brand, Cta, Navbar} from "./Components"
import './App.css'

export default function App() {
  return (
    <div className='App'>
      <div className='gradient-bg'>
        <Navbar/>
        <Header/>
      </div>

      <Brand/>
      <Whatgpt/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blogs/>
      <Footer/>
    </div>
  )
}
    