import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import App from './App.css'
import Student from './project.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (

    <>
    <h2>Student Information</h2>
    <Student name="Raj" course="B.tech" marks="90"/>
    <Student name="Ram" course="M.tech" marks="95"/>
    <Student name="Rohan" course="MCA" marks="98"/>

    </>
  )
}

export default App