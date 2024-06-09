
const PrevDescription = ({descriptions}) => {
    console.log(descriptions)
    return (
        <div
            >
            {descriptions?.map((des,idx) => (             
                <div style={{
                    width: "250px",
                    height: "auto",
                    backgroundColor: "white",
                    boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1",
                    borderRadius: "10px",
                    padding: "10px",
                    margin: "15px",
                    marginTop: "0px"
                }}>
                    <p key={idx}>Pregunta:  {des.description} <br></br><br></br>
                    Respuesta: {des.prescription}
                    </p>
                    
                </div>                
            ))}
        </div>
    );
};

export default PrevDescription