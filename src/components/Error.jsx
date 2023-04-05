import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Error({setUserLoggedIn}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (username === "1" && password === "2") {
        setUserLoggedIn(true);
        navigate("/Admin");
      } else {
        alert("Invalid username or password");
      }
    };
  
    return (
      <div>
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /><br/>
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/>
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    );
};

export default Error;