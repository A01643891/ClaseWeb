import userImage from "../../assets/user.svg"

const CardInfo = ({user}) => {
    return (
        <div
            style={{
                width: "250px",
                height: "500px",
                backgroundColor: "white",
                boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1",
                borderRadius: "10px",
                padding: "10px"
            }}>
            <img src={userImage} width={80} alt="avatar"/>
            <p>Nombre</p>
            <p>- {user.name}</p>
            <p>Email</p>
            <p>- {user.email}</p>
            <p>Age</p>
            <p>- {user.age}</p>
            <p>Sex</p>
            <p>- {user.sex}</p>
            <p>Role</p>
            <p>- {user.role}</p>
            <p>Tag</p>
            <p>- {user.tag}</p>
        </div>
    )
}

export default CardInfo