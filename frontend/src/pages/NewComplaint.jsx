import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createComplaint } from "../api/complaintApi";

function NewComplaint() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    categoryId: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const payload = {
    title: formData.title,
    description: formData.description,
    category: {
      id: Number(formData.categoryId)
    }
  };

  console.log(payload);

  try {
    await createComplaint(payload);

    alert("Complaint submitted successfully");
    navigate("/my-complaints");
  } catch (error) {
    console.error(error.response?.data);
    console.error(error.response?.status);

    alert("Failed to submit complaint");
  }
};

  return (
    <div className="container">
      <div className="card shadow-sm p-4">
        <h2 className="mb-4">New Complaint</h2>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label className="form-label">Title</label>

            <input
              type="text"
              name="title"
              className="form-control"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Category</label>

            <select
              name="categoryId"
              className="form-select"
              value={formData.categoryId}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option value="1">Internet</option>
              <option value="2">Water Supply</option>
              <option value="3">Cleaning</option>
              <option value="4">Electrical</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>

            <textarea
              rows="5"
              name="description"
              className="form-control"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit Complaint
          </button>

        </form>
      </div>
    </div>
  );
}

export default NewComplaint;