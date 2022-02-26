import { Container } from "@mui/material";
import React from "react";
import Home from "./Home";
import Header from "./LayoutWrapper/Header";
import ReviewSection from "./ReviewSection";
import UpcomingShows from "./UpcomingShows";
import hero from "../Images/hero.png";



const App = () => {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          backgroundImage: `linear-gradient(rgba(5, 11, 20, 0.28),
          rgba(1, 13, 32, 0.69),
          rgba(10, 11, 26, 1)),url(${hero})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: {md:"cover" , xs:"cover"},
          backgroundPosition: { xs: "center"}
        }}
      >
        <Header />
        <Home />
      </Container>
      <UpcomingShows />
      <ReviewSection />
    </>
  );
};

export default App;
