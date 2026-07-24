import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Layout from "../components/layout/Layout";

import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login";

export default function AppRoutes(){

return(

<BrowserRouter>

<Routes>

<Route path="/login" element={<Login/>}/>

<Route element={<Layout/>}>

<Route path="/" element={<Dashboard/>}/>

<Route
path="/employees"
element={<h1>Employees</h1>}
/>

<Route
path="/departments"
element={<h1>Departments</h1>}
/>

<Route
path="/attendance"
element={<h1>Attendance</h1>}
/>

<Route
path="/inventory"
element={<h1>Inventory</h1>}
/>

<Route
path="/production"
element={<h1>Production</h1>}
/>

<Route
path="/fleet"
element={<h1>Fleet</h1>}
/>

<Route
path="/finance"
element={<h1>Finance</h1>}
/>

<Route
path="/reports"
element={<h1>Reports</h1>}
/>

<Route
path="/settings"
element={<h1>Settings</h1>}
/>

</Route>

</Routes>

</BrowserRouter>

)

}