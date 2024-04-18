import { useState } from "react";
import { fetchSpotifyApi } from "../../api/spotifyAPI";
import { useNavigate } from 'react-router-dom';

const Login = () =>{

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    const handleOnChange = (e) =>{
        //console.log(e.target.value);
        const newValues = {
            ...form,
            [e.target.name]: e.target.value,
        }
        console.log(newValues);
        setForm(newValues);
    }

    const handleLogin = async() => {
        const client_id = '4c01032e74f64dddb94629ece03041e1';
        const client_secret = 'ce9819c8ede940a2b74e3da76374ed57';
        const url = 'https://accounts.spotify.com/api/token'
        const body = 'grant_type=client_credentials';
        const token = 'Basic ' + btoa(client_id + ':' + client_secret);

        const response = await fetchSpotifyApi(
            url,
            'POST',
            body,
            'application/x-www-form-urlencoded',
            token
        );

        console.log(response);
        localStorage.setItem('token', response.access_token);
        navigate('/dashboard');
    }

    

    return (
        <div className="h-screen bg-slate-800 flex justify-center items-center flex-col">
            <div className="text-4xl text-white m-3  ">
                Iniciar sesión en Spotify
            </div>
            <div className=" m-2 flex justify-center items-center flex-col">
                <input className=" m-1" 
                type="text" 
                name="email"
                placeholder="Email:" 
                value={form.email}
                onChange={handleOnChange}/>

                <input 
                name="password"
                placeholder="Password:"
                value={form.password}
                onChange={handleOnChange}
                type="password" 
                />

            </div>
            <div>
            <button className=" p-1 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-md"
            onClick={handleLogin}>
                Log In
            </button>
            </div>
            

        </div>
    )
}

export default Login