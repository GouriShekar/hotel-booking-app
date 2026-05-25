import { Box, Typography } from "@mui/material";
import RoomCard from "./RoomCard";

const roomData = [
  {
    id: 1,
    image: "/Executive.png",
    type: "Executive Suite",
    price: 5500,
    rating: 4.8,
  },
  {
    id: 2,
    image: "/Presidential.png",
    type: "Presidential Suite",
    price: 12000,
    rating: 5,
  },
  {
    id: 3,
    image: "/Junior.png",
    type: "Junior Suite",
    price: 4000,
    rating: 4.5,
  },
  {
    id: 4,
    image: "/Studio.png",
    type: "Studio Room",
    price: 3500,
    rating: 4.4,
  },
  {
    id: 5,
    image: "/Deluxe.png",
    type: "Deluxe Room",
    price: 3000,
    rating: 4.6,
  },
  {
    id: 6,
    image: "/Penthouse.png",
    type: "Penthouse",
    price: 18000,
    rating: 5,
  },
];
function RoomList() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f8f5ef",
        paddingTop: "120px",
        paddingBottom: "80px",
        px: 3,
      }}
    >

      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          mb: 8,
          color: "#2d2418",
          fontWeight: 700,
        }}
      >
        Luxury Rooms
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 5,
        }}
      >
        {roomData.map((room) => (
          <RoomCard
            key={room.id}
            image={room.image}
            type={room.type}
            price={room.price}
            rating={room.rating}
          />
        ))}
      </Box>

    </Box>
  );
}

export default RoomList;