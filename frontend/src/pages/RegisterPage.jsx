import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../api/authApi";
import "../styles/LoginPage.css";

function RegisterPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await register(formData);

      alert("Registration successful!");
      navigate("/");
    } catch (error) {
      alert("Registration failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Create Account</h2>

        <p className="login-subtitle">
          Register to continue
        </p>

        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>

            <input
              type="text"
              name="fullName"
              className="form-control"
              placeholder="Enter your name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>

            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>

            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Register
          </button>
        </form>

        <div className="register-link">
          Already have an account? <Link to="/">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;