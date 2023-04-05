import {useNavigate} from "react-router-dom";
function About(){
    const navigate = useNavigate();
    return(
        <>
            <h1 className="name">This is About page</h1>
            <button style={{
                margin: "0 auto",
                display: "flex",
                backgroundImage: "linear-gradient(to right, #3acadf, #651fff 95%)",
                color: "white",
                padding: "10px ",
                borderRadius: "5px",
                border: "none",
                fontWeight: "bold",
                fontSize: "13px",
                width: "6%",
            }} onClick={() => navigate("/")}>Redirect</button>
        </>
    );
}
export default About;
