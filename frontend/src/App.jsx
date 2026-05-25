import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar";
import Home from "./components/Home";
import RoomList from "./components/RoomList";
import Booking from "./components/Booking";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>

      {/* NAVBAR */}
      <Navbar />

      {/* ROUTES */}
      <Routes>

        {/* HOME PAGE */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* ROOMS PAGE */}
        <Route
          path="/rooms"
          element={<RoomList />}
        />

        {/* BOOKING PAGE */}
        <Route
          path="/booking"
          element={<Booking />}
        />
        <Route
  path="/dashboard"
  element={<Dashboard />}
/>
<Route
  path="/login"
  element={<Login />}
/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;