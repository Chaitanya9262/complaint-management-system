// src/api/complaintApi.js

import api from "./axiosConfig";

export const getComplaints = () => {
  return api.get("/complaints");
};

export const createComplaint = (data) => {
  return api.post("/complaints", data);
};

export const updateComplaintStatus = (id, status) => {
  return api.put(
  `/complaints/${id}/status?status=${status}`
);
}