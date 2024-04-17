
const Login = () =>{
    return (
        <div className="h-screen bg-slate-800 flex justify-center items-center flex-col">
            <div className="text-4xl text-white m-3  ">
                Iniciar sesión en Spotify
            </div>
            <div className=" m-2 flex justify-center items-center flex-col">
                <input className=" m-1" placeholder="Email:" type="text" name="email"/>
                <input placeholder="Password:" type="password" name="password"/>

            </div>
            <div>
            <button className=" p-1 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-md">Log In</button>
            </div>
            

        </div>
    )
}

export default Login