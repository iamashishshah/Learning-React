import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const myName = ''
  let myObjs = {
    username: "Ashish shah",
    isLogin: true, 
    isLogout: false,
    email: "ashishshah@yourscreen.com"
  }
  const testimonial = "Create authentic testimonial copies based on your own keywords"
  return (
    <>
    <h1 className='bg-blue-500 font-bold mb-5'>Tailwind Test</h1> 
    <Card username="Ashish Shah"/> 
    <Card username="Abhay Sharma"/> 
    </>
  )
}

export default App
