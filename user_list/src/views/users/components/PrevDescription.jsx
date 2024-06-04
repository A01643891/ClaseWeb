
const PrevDescription = ({descriptions, prescriptions}) => {
    console.log(descriptions, prescriptions)
    return (
        <div
            style={{
                width: "250px",
                height: "300px",
                backgroundColor: "white",
                boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1",
                borderRadius: "10px",
                padding: "10px"
            }}>
            {descriptions?.map((des,idx) => (
                <p key={idx}>{idx} {des.description}</p>
            ))}
            {prescriptions?.map((des,idx) => (
                <p key={idx}>{idx} {des.prescription}</p>
            ))}
        </div>
    );
};

export default PrevDescription