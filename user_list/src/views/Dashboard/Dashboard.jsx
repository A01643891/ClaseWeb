import Card from "./components/card"
import { useEffect, useState } from 'react'

const Dashboard = () => {

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
       <div style={{display: 'flex',
       justifyContent: 'center',
       alignItems: 'center',
       flexDirection: 'column'
       }}>
        {users.map((user) => (
            <div key={user.id} style={{padding: '1%'}}>
                <Card user={user}/> 
            </div>
        ))}
       </div>
    )
}

export default Dashboard