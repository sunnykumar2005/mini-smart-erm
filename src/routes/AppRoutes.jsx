import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";

import Login from "../pages/Login/Login";

import Dashboard from "../pages/Dashboard/Dashboard";

import Employees from "../pages/Employees/Employees";

import Departments from "../pages/Departments/Departments";

import Attendance from "../pages/Attendance/Attendance";

import Inventory from "../pages/Inventory/Inventory";

import Reports from "../pages/Reports/Reports";

import Settings from "../pages/Settings/Settings";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}

        <Route path="/" element={<Login />} />

        {/* ERP */}

        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Dashboard />} />

          <Route path="employees" element={<Employees />} />

          <Route path="departments" element={<Departments />} />

          <Route path="attendance" element={<Attendance />} />

          <Route path="inventory" element={<Inventory />} />

          <Route path="reports" element={<Reports />} />

          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}