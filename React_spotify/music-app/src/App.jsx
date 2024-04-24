import { Routes, Route } from 'react-router-dom'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'

import './App.css'

function App() {

  return (
    <Routes>
      {/* <Route path='/' element={<Register/>}/> */}
      <Route path='/Login' element={<Login/>}/>
      <Route path='/' element={<Dashboard/>}/>
    </Routes>
  )
}

export default App
