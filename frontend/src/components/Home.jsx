import {
  Box,
  Typography,
  Container,
  Grid,
  Button
} from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box>

      {/* HERO SECTION */}
      <Box
        sx={{
          height: "100vh",
          backgroundImage: 'url("/hotel.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >

        {/* OVERLAY */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(0,0,0,0.75), rgba(0,0,0,0.45))",
          }}
        />

        {/* HERO CONTENT */}
        <Box
          sx={{
            position: "relative",
            textAlign: "center",
            color: "white",
            px: 2,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: 700,
              letterSpacing: 3,
              textShadow: "2px 4px 20px rgba(0,0,0,0.5)",
              fontSize: {
                xs: "3rem",
                md: "6rem",
              },
            }}
          >
            BLUE HERON
          </Typography>

          <Typography
            sx={{
              mt: 2,
              fontSize: {
                xs: "1rem",
                md: "1.5rem",
              },
              letterSpacing: 2,
            }}
          >
            Luxury • Elegance • Comfort
          </Typography>

          <Button
  component={Link}
  to="/rooms"
  variant="contained"
  sx={{
    mt: 5,
    px: 5,
    py: 1.5,
    borderRadius: "40px",
    backgroundColor: "#b38b59",
    fontSize: "16px",
    "&:hover": {
      backgroundColor: "#967347",
    },
  }}
>
  Explore Luxury
</Button>
        </Box>
      </Box>

      {/* ABOUT SECTION */}
      <Container
        maxWidth="lg"
        sx={{
          py: {
            xs: 8,
            md: 14,
          },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            mb: 5,
            fontWeight: 700,
            color: "#2d2418",
            textAlign: "center",
            position: "relative",
            "&::after": {
              content: '""',
              width: "80px",
              height: "3px",
              backgroundColor: "#b38b59",
              display: "block",
              margin: "15px auto 0",
            },
          }}
        >
          Our Story
        </Typography>

        <Typography
          sx={{
            fontSize: "18px",
            lineHeight: 2.2,
            textAlign: "justify",
            color: "#555",
          }}
        >
          Established in the early 1950s, Blue Heron Hotel began
          as an exclusive heritage retreat welcoming dignitaries,
          artists, and travelers from around the world.

          <br /><br />

          Over decades, the hotel evolved into one of the most
          prestigious luxury destinations, combining timeless
          architecture with modern hospitality and elegance.

          <br /><br />

          Every corner of our hotel reflects sophistication,
          comfort, and unforgettable experiences crafted for
          guests seeking luxury and tranquility.
        </Typography>
      </Container>

      {/* STATS SECTION */}
      <Box
        sx={{
          backgroundColor: "#2d2418",
          color: "white",
          py: 10,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5} textAlign="center">

            <Grid item xs={12} md={3}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "bold",
                  color: "#d6b37b",
                }}
              >
                75+
              </Typography>

              <Typography sx={{ mt: 1 }}>
                Luxury Rooms
              </Typography>
            </Grid>

            <Grid item xs={12} md={3}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "bold",
                  color: "#d6b37b",
                }}
              >
                24/7
              </Typography>

              <Typography sx={{ mt: 1 }}>
                Room Service
              </Typography>
            </Grid>

            <Grid item xs={12} md={3}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "bold",
                  color: "#d6b37b",
                }}
              >
                5★
              </Typography>

              <Typography sx={{ mt: 1 }}>
                Luxury Experience
              </Typography>
            </Grid>

            <Grid item xs={12} md={3}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "bold",
                  color: "#d6b37b",
                }}
              >
                50K+
              </Typography>

              <Typography sx={{ mt: 1 }}>
                Happy Guests
              </Typography>
            </Grid>

          </Grid>
        </Container>
      </Box>

      {/* FACILITIES */}
      <Container
        maxWidth="lg"
        sx={{
          py: {
            xs: 8,
            md: 14,
          },
        }}
      >

        <Typography
          variant="h3"
          sx={{
            mb: 8,
            fontWeight: 700,
            color: "#2d2418",
            textAlign: "center",
            position: "relative",
            "&::after": {
              content: '""',
              width: "80px",
              height: "3px",
              backgroundColor: "#b38b59",
              display: "block",
              margin: "15px auto 0",
            },
          }}
        >
          Luxury Facilities
        </Typography>

        <Grid container spacing={8} alignItems="center">

          {/* DINING */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/dining.png"
              sx={{
                width: "100%",
                height: 350,
                objectFit: "cover",
                borderRadius: "24px",
                transition: "0.4s",
                cursor: "pointer",
                boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
                "&:hover": {
                  transform: "scale(1.03)",
                },
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              sx={{
                mb: 3,
                fontWeight: "bold",
                color: "#2d2418",
              }}
            >
              Fine Dining
            </Typography>

            <Typography
              sx={{
                lineHeight: 2,
                color: "#555",
                fontSize: "17px",
              }}
            >
              Experience gourmet cuisine prepared by world-class chefs
              in an atmosphere designed for elegance and comfort.
            </Typography>
          </Grid>

          {/* POOL */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              sx={{
                mb: 3,
                fontWeight: "bold",
                color: "#2d2418",
              }}
            >
              Infinity Pool
            </Typography>

            <Typography
              sx={{
                lineHeight: 2,
                color: "#555",
                fontSize: "17px",
              }}
            >
              Relax beside our luxurious temperature-controlled pool
              with premium lounge seating and refreshing beverages.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/pool.png"
              sx={{
                width: "100%",
                height: 350,
                objectFit: "cover",
                borderRadius: "24px",
                transition: "0.4s",
                cursor: "pointer",
                boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
                "&:hover": {
                  transform: "scale(1.03)",
                },
              }}
            />
          </Grid>

          {/* GYM */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/gym.png"
              sx={{
                width: "100%",
                height: 350,
                objectFit: "cover",
                borderRadius: "24px",
                transition: "0.4s",
                cursor: "pointer",
                boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
                "&:hover": {
                  transform: "scale(1.03)",
                },
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              sx={{
                mb: 3,
                fontWeight: "bold",
                color: "#2d2418",
              }}
            >
              Wellness & Fitness
            </Typography>

            <Typography
              sx={{
                lineHeight: 2,
                color: "#555",
                fontSize: "17px",
              }}
            >
              Maintain your fitness routine with our fully equipped
              gym, wellness spa, and personal training sessions.
            </Typography>
          </Grid>

        </Grid>
      </Container>

      {/* TESTIMONIALS */}
      <Box
        sx={{
          backgroundColor: "#f2eee7",
          py: 12,
        }}
      >
        <Container maxWidth="lg">

          <Typography
            variant="h3"
            sx={{
              mb: 8,
              fontWeight: 700,
              color: "#2d2418",
              textAlign: "center",
              position: "relative",
              "&::after": {
                content: '""',
                width: "80px",
                height: "3px",
                backgroundColor: "#b38b59",
                display: "block",
                margin: "15px auto 0",
              },
            }}
          >
            Guest Experiences
          </Typography>

          <Grid container spacing={5}>

            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  backgroundColor: "white",
                  p: 5,
                  borderRadius: 5,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  transition: "0.4s",
                  "&:hover": {
                    transform: "translateY(-10px)",
                  },
                }}
              >
                <Typography
                  sx={{
                    lineHeight: 2,
                    color: "#555",
                  }}
                >
                  “Absolutely stunning hotel with exceptional service
                  and luxurious ambience.”
                </Typography>

                <Typography
                  sx={{
                    mt: 3,
                    fontWeight: "bold",
                    color: "#2d2418",
                  }}
                >
                  — Sarah Williams
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  backgroundColor: "white",
                  p: 5,
                  borderRadius: 5,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  transition: "0.4s",
                  "&:hover": {
                    transform: "translateY(-10px)",
                  },
                }}
              >
                <Typography
                  sx={{
                    lineHeight: 2,
                    color: "#555",
                  }}
                >
                  “The best hotel experience we’ve ever had.
                  Everything felt premium.”
                </Typography>

                <Typography
                  sx={{
                    mt: 3,
                    fontWeight: "bold",
                    color: "#2d2418",
                  }}
                >
                  — Michael Brown
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  backgroundColor: "white",
                  p: 5,
                  borderRadius: 5,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  transition: "0.4s",
                  "&:hover": {
                    transform: "translateY(-10px)",
                  },
                }}
              >
                <Typography
                  sx={{
                    lineHeight: 2,
                    color: "#555",
                  }}
                >
                  “Beautiful rooms, amazing food, and a very relaxing
                  atmosphere.”
                </Typography>

                <Typography
                  sx={{
                    mt: 3,
                    fontWeight: "bold",
                    color: "#2d2418",
                  }}
                >
                  — Emma Johnson
                </Typography>
              </Box>
            </Grid>

          </Grid>
        </Container>
      </Box>

      {/* CTA SECTION */}
      <Box
        sx={{
          backgroundImage: 'url("/hotel.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          py: 15,
        }}
      >

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(0,0,0,0.75), rgba(0,0,0,0.45))",
          }}
        />

        <Container
          maxWidth="md"
          sx={{
            position: "relative",
            textAlign: "center",
            color: "white",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 3,
            }}
          >
            Experience Luxury Like Never Before
          </Typography>

          <Typography
            sx={{
              fontSize: "18px",
              mb: 5,
              lineHeight: 2,
            }}
          >
            Book your unforgettable stay at Blue Heron Hotel today.
          </Typography>

          <Button
  component={Link}
  to="/rooms"
  variant="contained"
  sx={{
    backgroundColor: "#b38b59",
    px: 5,
    py: 1.5,
    borderRadius: "40px",
    fontSize: "16px",
    "&:hover": {
      backgroundColor: "#967347",
    },
  }}
>
  Book Your Stay
</Button>
        </Container>
      </Box>

      {/* FOOTER */}
      <Box
        sx={{
          backgroundColor: "#1e1a14",
          color: "white",
          py: 5,
          textAlign: "center",
        }}
      >
        <Typography sx={{ mb: 1 }}>
          © 2026 Blue Heron Hotel. All rights reserved.
        </Typography>

        <Typography
          sx={{
            color: "#c7c7c7",
            fontSize: "14px",
          }}
        >
          Crafted with luxury and elegance.
        </Typography>
      </Box>

    </Box>
  );
};

export default Home;