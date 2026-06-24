import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DashboardCard from "../components/DashboardCard";
import StatusBadge from "../components/StatusBadge";

import {
  FiFileText,
  FiCheckCircle,
  FiClock,
  FiAlertCircle,
} from "react-icons/fi";

import {
  getTotalComplaints,
  getPendingComplaints,
  getInProgressComplaints,
  getResolvedComplaints,
} from "../api/dashboardApi";

import {
  getComplaints,
  updateComplaintStatus,
} from "../api/complaintApi";

function AdminDashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    inProgress: 0,
    resolved: 0,
  });

  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadComplaints = async () => {
    try {
      const response = await getComplaints();
      setComplaints(response.data);
    } catch (error) {
      console.error("Failed to load complaints", error);
    }
  };

  const loadStats = async () => {
    try {
      const [total, pending, progress, resolved] =
        await Promise.all([
          getTotalComplaints(),
          getPendingComplaints(),
          getInProgressComplaints(),
          getResolvedComplaints(),
        ]);

      setStats({
        total: total.data,
        pending: pending.data,
        inProgress: progress.data,
        resolved: resolved.data,
      });
    } catch (error) {
      console.error("Failed to load dashboard data", error);
    }
  };

  const fetchData = async () => {
    setLoading(true);

    await Promise.all([
      loadStats(),
      loadComplaints(),
    ]);

    setLoading(false);
  };

  const handleStatusChange = async (id, status) => {
    try {
      await updateComplaintStatus(id, status);
      await fetchData();
    } catch (error) {
      console.error(error);
      alert("Failed to update status");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
  const role = localStorage.getItem("role");

  if (role !== "ADMIN") {
    navigate("/dashboard");
  }
}, []);

  return (
    <div className="container-fluid py-4">
      <h2 className="mb-4">Admin Dashboard</h2>

      <div className="row g-4 mb-4">
        <div className="col-md-3">
          <DashboardCard
            title="Total Complaints"
            count={stats.total}
            icon={<FiFileText />}
            color="primary"
          />
        </div>

        <div className="col-md-3">
          <DashboardCard
            title="Resolved"
            count={stats.resolved}
            icon={<FiCheckCircle />}
            color="success"
          />
        </div>

        <div className="col-md-3">
          <DashboardCard
            title="In Progress"
            count={stats.inProgress}
            icon={<FiClock />}
            color="warning"
          />
        </div>

        <div className="col-md-3">
          <DashboardCard
            title="Pending"
            count={stats.pending}
            icon={<FiAlertCircle />}
            color="danger"
          />
        </div>
      </div>

      <div className="card shadow-sm border-0 rounded-4">
        <div className="card-body">
          <h5 className="mb-3">Manage Complaints</h5>

          {loading ? (
            <p>Loading complaints...</p>
          ) : (
            <div className="table-responsive">
              <table className="table align-middle">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>User</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th>Update</th>
                  </tr>
                </thead>

                <tbody>
                  {complaints.length === 0 ? (
                    <tr>
                      <td
                        colSpan="6"
                        className="text-center py-4"
                      >
                        No complaints found
                      </td>
                    </tr>
                  ) : (
                    complaints.map((complaint) => (
                      <tr key={complaint.id}>
                        <td>#{complaint.id}</td>

                        <td>
                          {complaint.user?.fullName || "-"}
                        </td>

                        <td>{complaint.title}</td>

                        <td>
                          {complaint.category?.categoryName || "-"}
                        </td>

                        <td>
                          <StatusBadge
                            status={complaint.status}
                          />
                        </td>

                        <td>
                          <select
                            className="form-select form-select-sm"
                            style={{ minWidth: "160px" }}
                            value={complaint.status}
                            onChange={(e) =>
                              handleStatusChange(
                                complaint.id,
                                e.target.value
                              )
                            }
                          >
                            <option value="PENDING">
                              PENDING
                            </option>

                            <option value="IN_PROGRESS">
                              IN PROGRESS
                            </option>

                            <option value="RESOLVED">
                              RESOLVED
                            </option>
                          </select>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;