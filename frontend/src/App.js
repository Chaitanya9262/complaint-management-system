import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserDashboard from "./pages/UserDashboard";
import NewComplaint from "./pages/NewComplaint";
import MyComplaints from "./pages/MyComplaints";
import ComplaintDetails from "./pages/ComplaintDetails";
import Reports from "./pages/Reports";
import ProfileSettings from "./pages/ProfileSettings";
// import ComplaintDetails from "./pages/ComplaintDetails";
// import ProfileSettings from "./pages/ProfileSettings";
// import Reports from "./pages/Reports";
import StaffDashboard from "./pages/StaffDashboard";
import DashboardLayout from "./layouts/DashboardLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
  path="/admin-dashboard"
  element={<AdminDashboard />}
/>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route element={<DashboardLayout />}>

          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/new-complaint" element={<NewComplaint />} />
          <Route path="/my-complaints" element={<MyComplaints />} />
          <Route path="/complaint/:id" element={<ComplaintDetails />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/profile" element={<ProfileSettings />} />
          <Route path="/complaints/:id" element={<ComplaintDetails />} />

<Route path="/profile" element={<ProfileSettings />} />

<Route path="/reports" element={<Reports />} />

<Route path="/staff-dashboard" element={<StaffDashboard />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;