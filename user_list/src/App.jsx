import { Routes, Route } from 'react-router-dom';

import './App.css'
import Dashboard from './views/Dashboard/Dashboard';
import Register from './views/Register/Register';
import Users from './views/users/Users';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/register' element = {<Register/>}/>
      <Route path='/users/:id' element = {<Users/>}/>
    </Routes>
  );
}

export default App
