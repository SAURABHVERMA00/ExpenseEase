import { useState } from 'react'
import NewUser from './components/NewUser'
import ExistingUser from './components/ExistingUser'
import './App.css'
import MainPage from './pages/MainPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainPage/>
    </>
  )
}

export default App
