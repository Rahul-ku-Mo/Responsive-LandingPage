import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { createTheme } from "@mui/material";
import Progress from "./ProgressBar/Progress";

const Home = () => {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",

          alignItems: "flex-start",
          flexWrap: "nowrap",
          marginTop: { xs: "240px", lg: "240px", md: "240px" },
        }}
      >
        <Typography
          varirent="h1"
          sx={{
            color: "white",
            fontWeight: "700",
            fontSize: { md: "80px", xs: "40px" },
            lineHeight: { md: "96px", xs: "48px" },
            fontFamily: "'Libre Baskerville', serif",
            zIndex: "1",
            paddingLeft: { md: "150px", xs: "16px" },
          }}
        >
          Cari Cari
        </Typography>

        <Box sx={{ width: { md: "611px", xs: "331px" } }}>
          <Typography
            sx={{
              color: "white",
              fontWeight: "100",
              fontSize: { md: "24px", xs: "16px" },
              marginTop: "24px",
              lineHeight: { md: "32px", xs: "28px" },
              fontFamily: "'Nunito Sans', sans-=4serif",
              paddingLeft: { md: "150px", xs: "16px" },
              color: "#ffffff75",
            }}
          >
            Live from their sofa to yours. Get closer to your favorite artists,
            and never miss out.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            paddingLeft: { md: "150px", sm: "10px" },
            flexWrap: "wrap",
          }}
        >
          <Progress newIcon={true} Label={"Likes Everyday"} />
          <Progress Label={"Online Events"} />
          <Progress Label={"Followers "} />
          <Progress Label={"New Events"} />
        </Box>
      </Container>
    </>
  );
};

export default Home;
