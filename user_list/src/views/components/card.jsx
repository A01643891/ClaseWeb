import React from "react"

const Card = ({user}) => {
    return (
        <div style={{
            width: '120px',
            height: '40px',
            border: 'solid black 2px',
            borderRadius: '5px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'}}>
            {user.name}
        </div>
    )
}

export default Card