import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';

import PrevDescription from "./components/PrevDescription";
import CardInfo from "./CardInfo";

const Users = () => {
    const { id } = useParams();

    const [user, setUser] = useState([]);

    const [form, setForm] = useState({
        description: '',
        prescription: ''
    })
    const [descriptions, setDescriptions] = useState([]);
    const [prescriptions, setPrescriptions] = useState([]);

    const fetchDescription = async () => {
        const response = await fetch('http://localhost:3000/description/' + id);
        const data = await response.json();
        setDescriptions(data);
        return data;
    }

    const fetchPrescription = async () =>{
        const response = await fetch('http://localhost:3000/description/prescription/' + id);
        const data = await response.json();
        setPrescriptions(data);
        return data;
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        const newForm = {
            ...form,
            [name] : value
        };
        setForm(newForm);
        console.log(form);
    }
    const fetchUserById = async() =>{
        const response = await fetch('http://localhost:3000/users/' + id);
        const data = await response.json();
        console.log(data);
        setUser(data);
        return data;
    }

    const handleGenerateHelp = async() => {
        const prompt = {
            prompt: form.description
        }
        const response = await fetch('http://localhost:3000/chat', {
            method: 'POST',
            body: JSON.stringify(prompt)
        });
        const data = await response.json();
        console.log(data);
        return data;
    }

    const handleSaveDescription = async() => {
        const descriptions = {
            description: form.description
        }
        const response = await fetch('http://localhost:3000/description/' + id, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify(descriptions),
        });
        const data = await response.json();
        console.log(data);
        return data;
    }

    useEffect(() => {
        fetchUserById();
        fetchDescription();
        fetchPrescription();
    },[])
   
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div>
                <CardInfo user={user}/>
            </div>
            <div>
                <PrevDescription descriptions={descriptions} prescriptions={prescriptions}/>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
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
                <div>
                    <button 
                        onClick={handleGenerateHelp}
                        style={{ height: '35px', width: '120px', backgroundColor: '#399C7E',  border:'none', borderRadius: '5px'}} type="submit">
                        <p>Generar Ejercicio</p>
                    </button>
                </div>
                <div>
                    <button 
                        onClick={handleSaveDescription}
                        style={{ height: '35px', width: '150px', backgroundColor: '#399C7E',  border:'none', borderRadius: '5px'}} type="submit">
                        <p>Guardar descripcion</p>
                    </button>
                </div>
            </div>
            
        </div>
        
    )
}

export default Users