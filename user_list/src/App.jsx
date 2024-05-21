import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [users, setUsers] = useState([]);

  const fetchUsers = async() => {
    const response = await fetch('http://localhost:3000/users');
    const data = await response.json();
    setUsers(data);
    console.log(data);
  }

  useEffect(() => {
    fetchUsers();
  }, [])

  return (
    <>
      <div className='content'>
        <h1>Usuarios</h1>
        <div className='card'>
          {users.map((user, idx)=> (
                  <div className='cardText' key={user.id}>
                      <div>
                      Nombre: {user.name} 
                      </div>
                      <div>
                      Correo: {user.email}
                      </div>
                  </div>
          ))}
        </div>
      </div>
      
    </>
  )
}

export default App
