import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import CreateNote from './CreateNote/CreateNote'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <CreateNote/>
     <Footer/>
    </>
  )
}

export default App
