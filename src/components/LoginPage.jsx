import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage({ setUserLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if username and password are valid
    if (username === "admin" && password === "password") {
      // Set userLoggedIn state variable to true
      setUserLoggedIn(true);
      // Navigate to the admin page
      navigate("/admin");
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
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
