import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Vinyl from './components/Vinyl'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Vinyl/>
    </>
  )
}

export default App
