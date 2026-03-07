import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import AdminNavbar from "./components/AdminNavbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TempleList from "./pages/TempleList";
import TempleDetails from "./pages/TempleDetails";
import BookingPage from "./pages/BookingPage";
import MyBookings from "./pages/MyBookings";
import DonationPage from "./pages/DonationPage";
import TicketPage from "./pages/TicketPage";

import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";

import AdminDashboard from "./pages/admin/AdminDashboard";
import MyTemple from "./pages/admin/MyTemple";
import Donations from "./pages/admin/Donations";
import Bookings from "./pages/admin/Bookings";

function App() {

  const role = localStorage.getItem("role");

  return (
    <BrowserRouter>

      {/* Dynamic Navbar */}
      {role === "admin" ? <AdminNavbar /> : <Navbar />}

      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={
            role === "admin"
              ? <Navigate to="/admin/dashboard" />
              : <Navigate to="/home" />
          }
        />

        <Route path="/home" element={<Home />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Public Pages */}
        <Route path="/temples" element={<TempleList />} />
        <Route path="/temple/:id" element={<TempleDetails />} />
        <Route path="/ticket/:id" element={<TicketPage />} />

        {/* User Protected */}
        <Route
          path="/booking"
          element={
            <ProtectedRoute>
              <BookingPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/account"
          element={
            role === "admin"
              ? <Navigate to="/admin/bookings" />
              : (
                <ProtectedRoute>
                  <MyBookings />
                </ProtectedRoute>
              )
          }
        />

        <Route
          path="/donate"
          element={
            role === "admin"
              ? <Navigate to="/admin/donations" />
              : <DonationPage />
          }
        />

        {/* Admin Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/my-temple"
          element={
            <AdminRoute>
              <MyTemple />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/donations"
          element={
            <AdminRoute>
              <Donations />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/bookings"
          element={
            <AdminRoute>
              <Bookings />
            </AdminRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;