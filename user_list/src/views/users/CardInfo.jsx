import userImage from "../../assets/user.svg"

const CardInfo = ({user}) => {
    return (
        <div
            style={{
                width: "250px",
                height: "550px",
                backgroundColor: "white",
                boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1",
                borderRadius: "10px",
                padding: "10px",
                marginRight: "15px"
            }}>
            <img src={userImage} width={80} alt="avatar"/>
            <p style={{ fontSize: '24px' }}>Personal Information</p>
            <p style={{ fontSize: '14px', fontWeight: 'bold' }}>Nombre</p>
            <p>- {user.name}</p>
            <p style={{ fontSize: '14px', fontWeight: 'bold' }}>Email</p>
            <p>- {user.email}</p>
            <p style={{ fontSize: '14px', fontWeight: 'bold' }}>Age</p>
            <p>- {user.age}</p>
            <p style={{ fontSize: '14px', fontWeight: 'bold' }}>Sex</p>
            <p>- {user.sex}</p>
            <p style={{ fontSize: '14px', fontWeight: 'bold' }}>Role</p>
            <p>- {user.role}</p>
            <p style={{ fontSize: '14px', fontWeight: 'bold' }}>Tag</p>
            <p>- {user.tag}</p>
        </div>
    )
}

export default CardInfo