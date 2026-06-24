import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getComplaints } from "../api/complaintApi";
import StatusBadge from "../components/StatusBadge";

function MyComplaints() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    try {
      const response = await getComplaints();
      setComplaints(response.data);
    } catch (error) {
      console.error(error);
      alert("Failed to load complaints");
    }
  };

  return (
    <div>
      <h2 className="mb-4">My Complaints</h2>

      <div className="card shadow-sm border-0">
        <div className="table-responsive">
          <table className="table table-hover mb-0">

            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Category</th>
                <th>Description</th>
                <th>Status</th>
                <th>Details</th>
              </tr>
            </thead>

            <tbody>
              {complaints.length > 0 ? (
                complaints.map((complaint) => (
                  <tr key={complaint.id}>
                    <td>#{complaint.id}</td>

                    <td>{complaint.title}</td>

                    <td>
                      {complaint.category?.categoryName || "-"}
                    </td>

                    <td>{complaint.description}</td>

                    <td>
                      <StatusBadge
                        status={complaint.status}
                      />
                    </td>

                    <td>
                      <Link
                        to={`/complaint/${complaint.id}`}
                        className="btn btn-sm btn-primary"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center py-4"
                  >
                    No complaints found
                  </td>
                </tr>
              )}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}

export default MyComplaints;