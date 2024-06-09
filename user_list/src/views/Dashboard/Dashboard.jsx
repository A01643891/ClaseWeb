import Card from "./components/card"
import NavigationBar from "../../shared/NavigationBar";
import { useEffect, useState } from 'react'

const Dashboard = () => {

    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState('');

    const handleFilterChange = (value) => {
        setFilter(value);
    };

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(filter.toLowerCase())
    );

    const fetchUsers = async() => {
        const response = await fetch('http://localhost:3000/users');
        const data = await response.json();
        setUsers(data);
        console.log(data);
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <NavigationBar onFilterChange={handleFilterChange}>
            <div style={{display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: '50px',
            }}>
                {filteredUsers.map((user) => (
                    <div key={user.id} style={{padding: '1%'}}>
                        <Card user={user}/> 
                    </div>
                ))}
            </div>
        </NavigationBar>
       
    )
}

export default Dashboard