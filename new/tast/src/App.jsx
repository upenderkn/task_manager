import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [a, seta] = useState("")
  const [output, setOutput] = useState("")
  function printHandler(e){
    setOutput(seta(e.target.value))
  }
  return (
    <>
    <input onChange={printHandler} type='text' placeholder='Enter name'></input>
    <button type="button">submit</button>
    <div className='card'>{output}</div>
    </>
  )
}

export default App