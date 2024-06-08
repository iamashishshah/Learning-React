import {useState} from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// const App = () => {
//   const [count, setCount] = useState(10)

//   return (
//     <>
//       <div>
//         <a href="https://google.com" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

/**
 * suppose if I won't use react hooks, how am I gonna update 
 * I need to change innerHTML each time
 * @returns 
 */


const Countdown = () => {
  // const counter = 15;
  let [counter, setCounter] = useState(4);

  const addValue = () =>{
    if(counter >= 20) return;
    setCounter(counter + 1)
  }

  const removeValue = () =>{
    if(counter <= 0) return;
    setCounter(counter - 1)
  }

  const resetValue = () =>{
    // if(counter == 0) return `temp ${counter}`
    // counter = 0
    setCounter(counter = 0)
  }
  return(
    <>
    <h1>Click Button Add and Remove value</h1>
    <h2>Value: {counter}</h2>
    <h2>Student Details: {counter}</h2>
    <button onClick={addValue}>Add</button> <span></span>
    <button onClick={removeValue}>Remove</button>  <span></span>
    <button onClick={resetValue}>Reset</button>
    {/* <button></button>  */}
    <footer>Footer: {counter}</footer>
    </>
  )
}
export default Countdown