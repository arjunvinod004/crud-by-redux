import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import Add from './Add'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Update from './Update'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/add' element={<Add/>}/>
        <Route path='/update/:id' element={<Update/>}/>
      </Routes>
    </Router>
    // <>
    //   <Home/>
    // </>
  )
}

export default App
