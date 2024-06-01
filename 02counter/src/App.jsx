import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 5;
  let [counter, setCounter] = useState(5);

  const addValue = () =>{
    // counter += 1;
    if(counter >= 20) return;
    setCounter(counter + 1)
    console.log(counter)
  }
  const removeValue = () =>{
    if(counter <= 0) return; 
    // counter -= 1;
    setCounter(counter - 1)
    console.log(counter)
  }
  return (
    <>
    <h1>Learning React Library</h1>
    <h2>Counter value: {counter}</h2>
    <button
    onClick={addValue}
    >Add {counter}</button> 
    <button
    onClick={removeValue}
    >Remove {counter}</button>
    <h2>Footer: {counter}</h2>
    </>
  )
}

export default App
