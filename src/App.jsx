import { useState } from 'react'
import NewUser from './components/NewUser'
import './App.css'
import MainPage from './Pages/MainPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <NewUser/>  */}
     <MainPage/>
    </>
  )
}

export default App
