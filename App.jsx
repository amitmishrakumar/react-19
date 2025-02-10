import { useState } from 'react'
import './App.css'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Counter from './Counter'

function App() {
  const [name, setName] = useState("Amit")
  let upHandle = () => {
    setName("mishra")
  }
  return (
    <div>

      <h1>{name}</h1>
      <button onClick={upHandle} >upadate name </button>
      <Counter/>
    </div>
  )
}



export default App