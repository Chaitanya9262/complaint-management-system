import axios from "axios";

const API_URL = "http://localhost:8080/api/complaints";

export const getTotalComplaints = () =>
  axios.get(`${API_URL}/count`);

export const getPendingComplaints = () =>
  axios.get(`${API_URL}/count/PENDING`);

export const getInProgressComplaints = () =>
  axios.get(`${API_URL}/count/IN_PROGRESS`);

export const getResolvedComplaints = () =>
  axios.get(`${API_URL}/count/RESOLVED`);