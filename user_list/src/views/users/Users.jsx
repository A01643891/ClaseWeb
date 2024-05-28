import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';

import user from '../../assets/form.svg';
import PrevDescription from "./components/PrevDescription";

const Users = () => {
    const { id } = useParams();

    const [form, setForm] = useState({
        description: '',
        prescription: ''
    })
    const [descriptions, setDescriptions] = useState([]);

    const fetchDescription = async () => {
        const response = await fetch('http://localhost:3000/description/' + id);
        const data = await response.json();
        setDescriptions(data);
        return data;
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        const newForm = {
            ...form,
            [name] : value
        }
        setForm(newForm)
    }

    useEffect(() => {
        fetchDescription()
    },[])
   
    return (
        <div>
            <div>Users</div>
            <div>
                <img src={user} alt="user" />
            </div>
            <div>
                <PrevDescription descriptions={descriptions}/>
            </div>
            <div>
                <p>Description</p>
                <textarea
                    label="Description"
                    value={form.description}
                    name="description"
                    onChange={handleInputChange}
                />
                <p>Prescription</p>
                <textarea
                    label="Prescription"
                    value={form.prescription}
                    name="prescription"
                    onChange={handleInputChange}
                />
            </div>
            
        </div>
        
    )
}

export default Users