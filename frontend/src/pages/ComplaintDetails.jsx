import { useParams } from "react-router-dom";

function ComplaintDetails() {
  const { id } = useParams();

  return (
    <div className="container py-4">

      <div className="card shadow border-0">
        <div className="card-header bg-primary text-white">
          <h3 className="mb-0">
            Complaint Details
          </h3>
        </div>

        <div className="card-body">

          <div className="mb-3">
            <strong>Complaint ID:</strong>
            <span className="ms-2">#{id}</span>
          </div>

          <div className="mb-3">
            <strong>Title:</strong>
            <span className="ms-2">
              Internet Issue
            </span>
          </div>

          <div className="mb-3">
            <strong>Category:</strong>
            <span className="ms-2">
              Internet
            </span>
          </div>

          <div className="mb-3">
            <strong>Description:</strong>
            <p className="mt-2">
              WiFi not working properly in
              laboratory block.
            </p>
          </div>

          <div className="mb-3">
            <strong>Status:</strong>

            <span className="badge bg-warning ms-2">
              PENDING
            </span>
          </div>

          <div className="mb-3">
            <strong>Created Date:</strong>

            <span className="ms-2">
              24-06-2026
            </span>
          </div>

        </div>
      </div>

    </div>
  );
}

export default ComplaintDetails;