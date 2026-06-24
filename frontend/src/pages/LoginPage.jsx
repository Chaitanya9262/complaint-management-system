import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../api/authApi";
import "../styles/LoginPage.css";

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const response = await login({
  email,
  password,
});

console.log("LOGIN RESPONSE:", response.data);

localStorage.setItem("token", response.data.token);
localStorage.setItem("fullName", response.data.fullName);
localStorage.setItem("role", response.data.role);
if (response.data.role === "ADMIN") {
    navigate("/admin-dashboard");
} else {
    navigate("/dashboard");
}
    // navigate("/dashboard");
  } catch (error) {
    console.error(error);
    setMessage("Invalid email or password");
  }
};

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Complaint Management</h2>
        <p className="login-subtitle">
          Sign in to continue
        </p>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Email</label>

            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>

            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
          {message && (
  <div className="alert alert-danger">
    {message}
  </div>
)}
        </form>

        <div className="register-link">
          Don't have an account? <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;