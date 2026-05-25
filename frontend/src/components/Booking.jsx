import { useState } from "react";

import { useLocation } from "react-router-dom";

import axios from "axios";

import emailjs from "@emailjs/browser";

function Booking() {

  const location = useLocation();

  const queryParams = new URLSearchParams(
    location.search
  );

  const roomType =
    queryParams.get("type");

  const roomPrice =
    queryParams.get("price");

  const [formData, setFormData] =
    useState({

      name: "",

      email: "",

      phone: "",

      checkIn: "",

      checkOut: "",
    });

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  // SEND EMAIL
  const sendEmail = () => {

    const templateParams = {

      name: formData.name,

      room: roomType,

      checkin: formData.checkIn,

      checkout: formData.checkOut,

      email: formData.email,
    };

    emailjs
      .send(

        "service_gmtwia9",

        "template_qnkgfpv",

        templateParams,

        "yfHQq6q6xG3mtmLTI"
      )

      .then((response) => {

        console.log(
          "EMAIL SENT",
          response
        );

      })

      .catch((error) => {

        console.log(
          "EMAIL ERROR",
          error
        );
      });
  };

  // SUBMIT BOOKING
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const bookingData = {

        ...formData,

        roomType,

        roomPrice,
      };

      await axios.post(

        "https://hotel-backend-bikd.onrender.com/api/bookings",

        bookingData
      );

      // SEND EMAIL
      sendEmail();

      alert(
        "Booking Confirmed & Email Sent!"
      );

      // CLEAR FORM
      setFormData({

        name: "",

        email: "",

        phone: "",

        checkIn: "",

        checkOut: "",
      });

    } catch (error) {

      console.log(error);

      alert("Booking Failed");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",

        backgroundImage:
          "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop')",

        backgroundSize: "cover",

        backgroundPosition: "center",

        display: "flex",

        justifyContent: "center",

        alignItems: "center",

        paddingTop: "100px",
      }}
    >

      <div
        style={{
          width: "500px",

          background:
            "rgba(0,0,0,0.75)",

          padding: "40px",

          borderRadius: "25px",

          backdropFilter: "blur(10px)",

          color: "white",
        }}
      >

        <h1
          style={{
            textAlign: "center",

            marginBottom: "30px",

            fontFamily: "serif",

            color: "#d4af37",
          }}
        >
          Confirm Your Booking
        </h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <label>Check In</label>

          <input
            type="date"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <label>Check Out</label>

          <input
            type="date"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <div
            style={{
              marginTop: "20px",

              marginBottom: "20px",
            }}
          >

            <h3>
              Room: {roomType}
            </h3>

            <h3>
              Price: ₹{roomPrice}
            </h3>

          </div>

          <button
            type="submit"
            style={buttonStyle}
          >
            Confirm Booking
          </button>

        </form>

      </div>

    </div>
  );
}

const inputStyle = {

  width: "100%",

  padding: "14px",

  marginTop: "10px",

  marginBottom: "20px",

  borderRadius: "10px",

  border: "1px solid rgba(255,255,255,0.3)",

  background:
    "rgba(255,255,255,0.1)",

  color: "white",

  fontSize: "16px",

  outline: "none",

  boxSizing: "border-box",
};

const buttonStyle = {

  width: "100%",

  padding: "16px",

  border: "none",

  borderRadius: "12px",

  background: "#d4af37",

  color: "black",

  fontSize: "18px",

  fontWeight: "bold",

  cursor: "pointer",
};

export default Booking;