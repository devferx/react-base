import React, {useState} from 'react'
import './App.css'

const App = () => {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <h1>Hola desde mi app!</h1>
      <button onClick={() => {setCounter(counter + 1)}}>{ counter }</button>
    </div>
  )
}

export default App
