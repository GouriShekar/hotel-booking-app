import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    // SIMPLE ADMIN CHECK
    if (
      username === "admin" &&
      password === "1234"
    ) {

      // SAVE LOGIN
      localStorage.setItem(
        "isAdmin",
        "true"
      );

      alert("Login Successful");

      navigate("/dashboard");

    } else {

      alert("Invalid Credentials");

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
      }}
    >

      <div
        style={{
          width: "400px",
          background: "rgba(0,0,0,0.7)",
          padding: "40px",
          borderRadius: "25px",
          backdropFilter: "blur(10px)",
        }}
      >

        <h1
          style={{
            color: "white",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          Admin Login
        </h1>

        <form onSubmit={handleLogin}>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
            required
            style={inputStyle}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
            style={inputStyle}
          />

          <button
            type="submit"
            style={buttonStyle}
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "16px",
  marginBottom: "20px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.3)",
  background: "rgba(255,255,255,0.1)",
  color: "white",
  fontSize: "18px",
  outline: "none",
  boxSizing: "border-box",
};

const buttonStyle = {
  width: "100%",
  padding: "16px",
  borderRadius: "12px",
  border: "none",
  background: "#b38b59",
  color: "white",
  fontSize: "18px",
  fontWeight: "bold",
  cursor: "pointer",
};

export default Login;