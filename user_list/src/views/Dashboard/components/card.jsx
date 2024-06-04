import React from "react"
import { useNavigate } from "react-router-dom";
import userImage from "../../../assets/user.svg"

const Card = ({user}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/users/${user.id}`)
    };

    return (
        <div style={{
            width: '230px',
            height: '60px',
            boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
            borderRadius: '5px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer'}}
            onClick={handleClick}>
                <div>
                    <img src={userImage} width={50} alt="users"/>
                </div>
                <div style={{marginLeft: "20px"}}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </div>
            
        </div>
    )
}

export default Card