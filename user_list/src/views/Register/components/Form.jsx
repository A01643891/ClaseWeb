import { useState } from "react";

const Form = () => {

    const [form, setForm] = useState({
        name: '',
        email: ''
    })

    const handleChange = (e) => {
        const {name, value } = e.target;
        const newForm = {
            ...form,
            [name]: value,
        };
        setForm(newForm);
    };

    const handleSubmitForm = async() => {
        const res = await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form)
        });
        return res.status === 200? alert('Registro exitoso') : alert('Error al registrar');
    }

    return(
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <h1 >Form</h1>
            <form>
                <p>Nombre</p>
                <input style={{height: "25px", paddingLeft: "5px"}}
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    onChange={handleChange}/>
            </form>
            <form>
                <p>Email</p>
                <input style={{height: "25px", paddingLeft: "5px"}}s
                    type="text"
                    name="email"
                    placeholder="email"
                    onChange={handleChange}/>
            </form>
            <div style={{paddingTop: '2%'}}>
                <button onClick={handleSubmitForm}
                style={{ height: '35px', width: '120px', backgroundColor: '#399C7E',  border:'none', borderRadius: '5px'}} type="submit">
                    Registrar
                </button>
            </div>
        </div>
    )
}

export default Form