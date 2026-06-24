import "../styles/dashboard.css";

function StatCard({ icon, count, title, color }) {
  return (
    <div className="card border-0 shadow-sm rounded-4 p-3">
      <div className="d-flex align-items-center">
        <div className={`icon-box ${color}`}>
          {icon}
        </div>

        <div className="ms-3">
          <h3>{count}</h3>
          <p className="text-muted mb-0">{title}</p>
        </div>
      </div>
    </div>
  );
}

export default StatCard;