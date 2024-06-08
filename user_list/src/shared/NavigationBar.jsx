import { IoHomeOutline } from "react-icons/io5";
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
            paddingTop: "10px"
        }}>
            <div style={{display: "flex"}}>
                <div onClick={() => handleNavigate("")} style={{display: "flex", cursor: "pointer", marginRight: "15px", marginLeft: "10px"}}>
                    <IoHomeOutline/>
                    <p>Dashboard</p>
                </div>
                <div onClick={() => handleNavigate("register")} style={{display: "flex", cursor: "pointer", marginRight: "15px"}}>
                    <IoHomeOutline/>
                    <p>Registro</p>
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
            {children}
        </div>

    )
}

export default NavigationBar