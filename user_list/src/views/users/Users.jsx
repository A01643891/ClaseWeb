import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import NavigationBar from "../../shared/NavigationBar";


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
        try{
            const response = await fetch('http://localhost:3000/chat/gemini', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(prompt)
            });
            const data = await response.json();
            setForm({ ...form, prescription: data.response });
            console.log(data);
            return data;
        } catch (error){
            console.log(error);
        }
        
    }

    const handleGenerateWithContext = async() => {
        const prompt = {
            prompt: form.description
        }
        try{
            const response = await fetch('http://localhost:3000/chat/context', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                //body: JSON.stringify(prompt)
            });
            const data = await response.json();
            setForm({ ...form, prescription: data.response });
            console.log(data);
            return data;
        } catch (error){
            console.log(error);
        }
        
    }

    const handleSaveDescription = async() => {
        const descriptions = {
            description: form.description,
            prescription: form.prescription
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
    },[])
   
    return (
        <NavigationBar>
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '30px'}}>
            <div>
                <CardInfo user={user}/>
            </div>
            <div>
                <PrevDescription descriptions={descriptions} />
            </div>
            <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', marginLeft: '5px'}}>
                <div>
                    <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Pregunta</p>
                    <textarea
                        label="Description"
                        value={form.description}
                        name="description"
                        onChange={handleInputChange}
                        style={{height: '150px', width: '300px'}}
                    />
                    <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Respuesta</p>
                    <textarea
                        label="Prescription"
                        value={form.prescription}
                        name="prescription"
                        onChange={handleInputChange}
                        style={{height: '150px', width: '300px'}}
                    />
                </div>
                <div style={{display: 'flex', alignContent: 'center', justifyContent: 'center', margin: "5px"}}>
                    <button 
                        onClick={handleGenerateHelp}
                        style={{ 
                            height: '40px', 
                            width: '140px', 
                            backgroundColor: '#399C7E',  
                            border:'none', 
                            borderRadius: '5px'}} 
                        type="submit">
                        <p>Generar respuesta</p>
                    </button>
                </div>
                <div style={{display: 'flex', alignContent: 'center', justifyContent: 'center', margin: "5px"}}>
                    <button 
                        onClick={handleGenerateWithContext}
                        style={{ 
                            height: '55px', 
                            width: '140px', 
                            backgroundColor: '#399C7E',  
                            border:'none', 
                            borderRadius: '5px'}} 
                        type="submit">
                        <p>Generar respuesta con Rag</p>
                    </button>
                </div>
                <div style={{display: 'flex', alignContent: 'center', justifyContent: 'center', margin: "5px"}}>
                    <button 
                        onClick={handleSaveDescription}
                        style={{ 
                            height: '40px', 
                            width: '140px', 
                            backgroundColor: '#399C7E',  
                            border:'none', 
                            borderRadius: '5px'}} 
                        type="submit">
                        <p>Guardar resultado</p>
                    </button>
                </div>
            </div>
            
        </div>
        </NavigationBar>  
    )
}

export default Users