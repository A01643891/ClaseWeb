import { IoHomeOutline } from "react-icons/io5";
import { GrUserNew } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const NavigationBar = ({children, onFilterChange}) => {
    const navigate = useNavigate();

    const handleNavigate = (route) => {
        navigate(`/${route}`);
        console.log(route);
    };
    
    const handleInputChange = (event) => {
        onFilterChange(event.target.value);
    }
    

    return (
        <div style={{width: "100%",
            height: "60px",
            boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
            paddingTop: "10px",
            
        }}>
            <div style={{display: "flex", alignItems: 'center'}}>
                <div onClick={() => handleNavigate("")} 
                style={{
                    display: "flex", 
                    cursor: "pointer", 
                    marginRight: "15px", 
                    marginLeft: "10px",
                    alignItems: 'center'}}>
                    <IoHomeOutline/>
                    <p style={{marginLeft: '5px'}}>Dashboard</p>
                </div>
                <div onClick={() => handleNavigate("register")} 
                style={{
                    display: "flex", 
                    cursor: "pointer", 
                    marginRight: "15px", 
                    alignItems: 'center'
                    }}>
                    <GrUserNew/>
                    <p style={{marginLeft: '5px'}}>Registro</p>
                </div>
                <input
                    onChange={handleInputChange}
                    style={{
                    border: "2px black solid",
                    width: "180px",
                    height:"25px",
                    borderRadius:"15px"}} 
                    type="text" placeholder="Filtrar por nombre"
                    />
            </div>
            <div style={{
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center'
            }}>
                {children}
            </div>
            
        </div>

    )
}

export default NavigationBar