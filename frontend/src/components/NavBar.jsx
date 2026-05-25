import { AppBar, Toolbar, Typography, Button } from "@mui/material";

import { Link } from "react-router-dom";

function NavBar() {

  return (
    <AppBar
      position="fixed"
      sx={{
        background:
          "rgba(20,20,20,0.85)",
        backdropFilter: "blur(10px)",
        boxShadow: "none",
      }}
    >

      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 40px",
        }}
      >

        {/* LOGO */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            letterSpacing: "3px",
            color: "#d4af37",
            fontFamily: "serif",
          }}
        >
          BLUE HERON
        </Typography>

        {/* NAV LINKS */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
          }}
        >

          <Button
            component={Link}
            to="/"
            sx={navButton}
          >
            Home
          </Button>

          <Button
            component={Link}
            to="/rooms"
            sx={navButton}
          >
            Rooms
          </Button>

          {/* ADMIN BUTTON */}
          <Button
            component={Link}
            to="/login"
            sx={{
              color: "#d4af37",
              border: "2px solid #d4af37",
              borderRadius: "50px",
              padding: "8px 24px",
              fontWeight: "bold",
              transition: "0.3s",

              "&:hover": {
                background: "#d4af37",
                color: "black",
              },
            }}
          >
            Admin
          </Button>

        </div>

      </Toolbar>

    </AppBar>
  );
}

const navButton = {
  color: "white",
  fontSize: "16px",
  fontWeight: "500",

  "&:hover": {
    color: "#d4af37",
  },
};

export default NavBar;