import { Link, Outlet, useNavigate } from "react-router-dom";
import "./DashboardLayout.css";

function DashboardLayout() {
  const navigate = useNavigate();
  const fullName = localStorage.getItem("fullName");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="dashboard-container">

      <div className="sidebar">
        <h3 className="logo">CMS</h3>

        <p className="welcome">Hi, {fullName}</p>

        <nav>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/new-complaint">New Complaint</Link>
          <Link to="/my-complaints">My Complaints</Link>
          <Link to="/reports">Reports</Link>
          <Link to="/profile">Profile</Link>
        </nav>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="main-content">
        <Outlet />
      </div>

    </div>
  );
}

export default DashboardLayout;