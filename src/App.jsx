import { useState } from 'react'
import NewUser from './components/NewUser'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NewUser/> 
    </>
  )
}

export default App
