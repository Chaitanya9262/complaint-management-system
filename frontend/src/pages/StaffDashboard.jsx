import DashboardCard from "../components/DashboardCard";
import { FiClock, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

function StaffDashboard() {
  return (
    <div className="container-fluid p-4">
      <h2 className="mb-4">Staff Dashboard</h2>

      <div className="row g-4">
        <div className="col-md-4">
          <DashboardCard
            title="Assigned"
            count={12}
            icon={<FiAlertCircle size={28} color="#0d6efd" />}
          />
        </div>

        <div className="col-md-4">
          <DashboardCard
            title="In Progress"
            count={5}
            icon={<FiClock size={28} color="#ffc107" />}
          />
        </div>

        <div className="col-md-4">
          <DashboardCard
            title="Resolved"
            count={7}
            icon={<FiCheckCircle size={28} color="#198754" />}
          />
        </div>
      </div>
    </div>
  );
}

export default StaffDashboard;