import "./../styles/dashboard.css";

function DashboardCard({ title, count, icon, color }) {
  return (
    <div className="dashboard-card">
      <div className="d-flex align-items-center">
        <div className={`icon-box ${color}`}>
          {icon}
        </div>

        <div className="ms-3">
          <h3 className="mb-1">{count}</h3>
          <p className="text-muted mb-0">{title}</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard;