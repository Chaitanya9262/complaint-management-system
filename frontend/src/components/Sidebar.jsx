import { Link, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const fullName =
    localStorage.getItem("fullName") || "User";

  const role =
    localStorage.getItem("role") || "USER";

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    padding: "10px",
    borderRadius: "8px",
  };

  return (
    <div
      style={{
        width: "280px",
        minHeight: "100vh",
        background: "#071738",
        color: "white",
        padding: "25px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1 className="mb-4">CMS</h1>

      <div className="mb-4">
        <h5>Hi, {fullName}</h5>
        <small>{role}</small>
      </div>

      <nav
        className="d-flex flex-column"
        style={{ gap: "18px" }}
      >
        {role === "ADMIN" ? (
          <>
            <Link
              to="/admin-dashboard"
              style={linkStyle}
            >
              Admin Dashboard
            </Link>

            <Link
              to="/reports"
              style={linkStyle}
            >
              Reports
            </Link>

            <Link
              to="/profile"
              style={linkStyle}
            >
              Profile
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/dashboard"
              style={linkStyle}
            >
              Dashboard
            </Link>

            <Link
              to="/new-complaint"
              style={linkStyle}
            >
              New Complaint
            </Link>

            <Link
              to="/my-complaints"
              style={linkStyle}
            >
              My Complaints
            </Link>

            <Link
              to="/reports"
              style={linkStyle}
            >
              Reports
            </Link>

            <Link
              to="/profile"
              style={linkStyle}
            >
              Profile
            </Link>
          </>
        )}
      </nav>

      <div className="mt-auto">
        <button
          className="btn btn-danger w-100"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;