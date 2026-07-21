import "../styles/Login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h1 style={{ color: "white", fontSize: "50px" }}>Mini Smart ERM</h1>
        <p>Please login to continue</p>

        <div className="input-group">
          <label>Username</label>
          <input type="text" placeholder="Enter your username" />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>

        <button>Login</button>
      </div>
    </div>
  );
}

export default Login;
