import { useEffect, useState } from "react";

import axios from "axios";

import { Navigate } from "react-router-dom";

function Dashboard() {

  // PROTECT DASHBOARD
  const isAdmin = localStorage.getItem("isAdmin");

  if (!isAdmin) {
    return <Navigate to="/l" />;
  }

  const [bookings, setBookings] = useState([]);

  // FETCH BOOKINGS
  const fetchBookings = async () => {

    try {

      const response = await axios.get(
        "https://hotel-backend-bikd.onrender.com/api/bookings"
      );

      setBookings(response.data);

    } catch (error) {

      console.log(error);

    }
  };

  // DELETE BOOKING
  const deleteBooking = async (id) => {

    try {

      await axios.delete(
        `https://hotel-backend-bikd.onrender.com/api/bookings/${id}`
      );

      alert("Booking Deleted");

      fetchBookings();

    } catch (error) {

      console.log(error);

    }
  };

  // LOGOUT
  const handleLogout = () => {

    localStorage.removeItem("isAdmin");

    window.location.href = "/";
  };

  useEffect(() => {

    fetchBookings();

  }, []);

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#f5f2ea",

        paddingTop: "170px",
        paddingLeft: "50px",
        paddingRight: "50px",
        paddingBottom: "50px",
      }}
    >

      {/* TOP SECTION */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "40px",
        }}
      >

        <h1
          style={{
            color: "#2d2418",
            fontSize: "50px",
            margin: 0,
            fontFamily: "serif",
            letterSpacing: "2px",
          }}
        >
          Hotel Admin Dashboard
        </h1>

        <button
          onClick={handleLogout}
          style={{
            background: "#b38b59",
            color: "white",
            border: "2px solid #d4af37",
            padding: "14px 24px",
            borderRadius: "12px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 0 10px rgba(212,175,55,0.5)",
            transition: "0.3s",
          }}
        >
          Logout
        </button>

      </div>

      {/* TABLE */}
      <div
        style={{
          overflowX: "auto",
        }}
      >

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            background: "white",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
          }}
        >

          <thead
            style={{
              background: "#2d2418",
              color: "white",
            }}
          >

            <tr>

              <th style={thStyle}>Name</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Phone</th>
              <th style={thStyle}>Room</th>
              <th style={thStyle}>Check In</th>
              <th style={thStyle}>Check Out</th>
              <th style={thStyle}>Price</th>
              <th style={thStyle}>Action</th>

            </tr>

          </thead>

          <tbody>

            {bookings.map((booking) => (

              <tr key={booking._id}>

                <td style={tdStyle}>
                  {booking.name}
                </td>

                <td style={tdStyle}>
                  {booking.email}
                </td>

                <td style={tdStyle}>
                  {booking.phone}
                </td>

                <td style={tdStyle}>
                  {booking.roomType}
                </td>

                <td style={tdStyle}>
                  {booking.checkIn}
                </td>

                <td style={tdStyle}>
                  {booking.checkOut}
                </td>

                <td style={tdStyle}>
                  ₹{booking.roomPrice}
                </td>

                <td style={tdStyle}>

                  <button
                    onClick={() =>
                      deleteBooking(booking._id)
                    }
                    style={{
                      background: "crimson",
                      color: "white",
                      border: "none",
                      padding: "10px 16px",
                      borderRadius: "10px",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

const thStyle = {
  padding: "18px",
  fontSize: "18px",
  fontWeight: "bold",
};

const tdStyle = {
  padding: "16px",
  textAlign: "center",
  borderBottom: "1px solid #ddd",
};

export default Dashboard;