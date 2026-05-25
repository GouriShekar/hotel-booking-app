import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Rating,
  Button,
} from "@mui/material";

import { Link } from "react-router-dom";

function RoomCard({ image, type, price, rating }) {
  return (
    <Card
      sx={{
        width: 320,
        borderRadius: "24px",
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
        transition: "0.4s",
        "&:hover": {
          transform: "translateY(-10px)",
        },
      }}
    >

      <CardMedia
        component="img"
        height="220"
        image={image}
        alt={type}
      />

      <CardContent>

        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "#2d2418",
            mb: 1,
          }}
        >
          {type}
        </Typography>

        <Rating
          value={rating}
          precision={0.5}
          readOnly
          sx={{ mb: 2 }}
        />

        <Typography
          variant="h6"
          sx={{
            color: "#b38b59",
            fontWeight: "bold",
            mb: 3,
          }}
        >
          ₹{price} / night
        </Typography>

        <Button
          component={Link}
          to={`/booking?type=${encodeURIComponent(type)}&price=${price}`}
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: "#2d2418",
            borderRadius: "30px",
            py: 1.2,
            "&:hover": {
              backgroundColor: "#b38b59",
            },
          }}
        >
          Book Now
        </Button>

      </CardContent>

    </Card>
  );
}

export default RoomCard;