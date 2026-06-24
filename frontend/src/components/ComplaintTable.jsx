import StatusBadge from "./StatusBadge";

function ComplaintTable({ complaints = [] }) {
  return (
    <div className="card shadow-sm border-0 rounded-4">
      <div className="card-body">
        <h5 className="mb-4">Recent Complaints</h5>

        <div className="table-responsive">
          <table className="table align-middle">
            <thead className="table-light">
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Category</th>
                <th>Status</th>
                <th>Created At</th>
              </tr>
            </thead>

            <tbody>
              {complaints.length > 0 ? (
                complaints.map((complaint) => (
                  <tr key={complaint.id}>
                    <td>#{complaint.id}</td>

                    <td>{complaint.title}</td>

                    <td>
                      {complaint.category?.categoryName ||
                        complaint.category?.name}
                    </td>

                    <td>
                      <StatusBadge status={complaint.status} />
                    </td>

                    <td>
                      {complaint.createdAt
                        ? new Date(complaint.createdAt).toLocaleDateString()
                        : "-"}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-4">
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

export default ComplaintTable;