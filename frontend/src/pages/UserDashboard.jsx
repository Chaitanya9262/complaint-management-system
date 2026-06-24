import { useNavigate } from "react-router-dom";
import DashboardCard from "../components/DashboardCard";

import {
  FiFileText,
  FiCheckCircle,
  FiClock,
  FiAlertCircle
} from "react-icons/fi";

import "../styles/dashboard.css";

function UserDashboard() {
  const navigate = useNavigate();

  const fullName = localStorage.getItem("fullName");

  // const handleLogout = () => {
  //   localStorage.clear();
  //   navigate("/");
  // };

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2>Welcome, {fullName} 👋</h2>
          <p className="text-muted">
            Manage your complaints efficiently.
          </p>
        </div>

        {/* <button
          className="btn btn-danger"
          onClick={handleLogout}
        >
          Logout
        </button> */}
      </div>

      {/* <div className="row g-4">

        <div className="col-md-4">
          <div className="card shadow-sm border-0 p-4">
            <h6 className="text-muted">Total Complaints</h6>
            <h2>12</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm border-0 p-4">
            <h6 className="text-muted">Pending</h6>
            <h2 className="text-warning">5</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm border-0 p-4">
            <h6 className="text-muted">Resolved</h6>
            <h2 className="text-success">7</h2>
          </div>
        </div>

      </div> */}
      <div className="row g-4 mb-4">
  <div className="col-md-3">
    <DashboardCard
      title="Total Complaints"
      count={28}
      icon={<FiFileText />}
      color="primary"
    />
  </div>

  <div className="col-md-3">
    <DashboardCard
      title="Resolved"
      count={15}
      icon={<FiCheckCircle />}
      color="success"
    />
  </div>

  <div className="col-md-3">
    <DashboardCard
      title="In Progress"
      count={8}
      icon={<FiClock />}
      color="warning"
    />
  </div>

  <div className="col-md-3">
    <DashboardCard
      title="Pending"
      count={5}
      icon={<FiAlertCircle />}
      color="danger"
    />
  </div>
</div>

      <div className="mt-5">
        <button
          className="btn btn-primary me-3"
          onClick={() => navigate("/new-complaint")}
        >
          New Complaint
        </button>

        <button
          className="btn btn-outline-secondary"
          onClick={() => navigate("/my-complaints")}
        >
          My Complaints
        </button>
      </div>
    </div>
  );
}

export default UserDashboard;