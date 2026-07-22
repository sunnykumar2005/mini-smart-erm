import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin() {
    console.log("Username:", `"${username}"`);
    console.log("Password:", `"${password}"`);

    if (username.trim() === "admin" && password.trim() === "1234") {
      setError("");
      navigate("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 style={{ color: "white", fontSize: "50px" }}>Mini Smart ERM</h1>

        <p>Please login to continue</p>

        <div className="input-group">
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
