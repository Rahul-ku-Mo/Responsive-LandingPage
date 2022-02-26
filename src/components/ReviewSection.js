import React from "react";
import ReviewCard from "./ProfileCard/ReviewCard";
import SectionHeading from "./shared/SectionHeading";
import { Box } from "@mui/system";
import hj from "../Images/hj.png";
import sj from "../Images/sj.png";
import bj from "../Images/bj.png";
import { Container } from "@mui/material";
const ReviewSection = () => {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{ background: "rgba(10, 11, 26, 1)"}}
      >
        <SectionHeading secHead={"Reviews"} page={true} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "154px",
            flexWrap: "wrap"
          }}
        >
          <ReviewCard avaImg={hj} />
          <ReviewCard avaImg={sj} />
          <ReviewCard avaImg={bj} />
        </Box>
      </Container>
    </>
  );
};

export default ReviewSection;
