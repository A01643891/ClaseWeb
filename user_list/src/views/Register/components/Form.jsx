import { useState } from "react";

const Form = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        role: '',
        age: 0,
        sex: '',
        tag: ''
    })

    const handleChange = (e) => {
        const {name, value } = e.target;
        const newForm = {
            ...form,
            [name]: value,
        };
        setForm(newForm);
        console.log(newForm);
    };

    const handleSubmitForm = async(e) => {
        e.preventDefault();
        console.log(form);
        try{
            const res = await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form)
            });
            return res.status === 200? alert('Registro exitoso') : alert('Error al registrar');
        } catch (error) {
            alert('Error al registrar')
            throw new Error('Error al registrar');
        }
        
    }

    return(
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <h1>Form</h1>
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
                <input style={{height: "25px", paddingLeft: "5px"}}
                    type="text"
                    name="email"
                    placeholder="email"
                    onChange={handleChange}/>
            </form>
            <form>
                <p>Rol</p>
                <input style={{height: "25px", paddingLeft: "5px"}}
                    type="text"
                    name="role"
                    value={form.role}
                    placeholder="rol"
                    onChange={handleChange}/>
            </form>
            <form>
                <p>Edad</p>
                <input style={{height: "25px", paddingLeft: "5px"}}
                    type="number"
                    name="age"
                    value={form.age}
                    placeholder="edad"
                    onChange={handleChange}/>
            </form>
            <form>
                <p>Sexo</p>
                <input style={{height: "25px", paddingLeft: "5px"}}
                    type="text"
                    name="sex"
                    value={form.sex}
                    placeholder="sexo"
                    onChange={handleChange}/>
            </form>
            <form>
                <p>Tag</p>
                <input style={{height: "25px", paddingLeft: "5px"}}
                    type="text"
                    name="tag"
                    value={form.tag}
                    placeholder="tag"
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