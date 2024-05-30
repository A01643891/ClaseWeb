import React from "react"
import { useNavigate } from "react-router-dom";

const Card = ({user}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/users/${user.id}`)
    };

    return (
        <div style={{
            width: '120px',
            height: '40px',
            border: 'solid black 2px',
            borderRadius: '5px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer'}}
            onClick={handleClick}>
            {user.name}
            {user.email}
        </div>
    )
}

export default Card