import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token) {
    return <Navigate to="/login" />;
  }

  // 🚫 Block admin from user pages
  if (role === "admin") {
    return <Navigate to="/admin/dashboard" />;
  }

  return children;
}

export default ProtectedRoute;