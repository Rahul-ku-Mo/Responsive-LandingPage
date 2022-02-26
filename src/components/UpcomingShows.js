import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MediaCard from "./ProfileCard/MediaCard";
import bday from "../Images/bDay.png";
import aJere from "../Images/aJere.png";
import sRao from "../Images/sRao.png";
import vYesu from "../Images/vYesu.png";
import SectionHeading from "./shared/SectionHeading";

function UpcomingShows() {
  return (
    <>
      <Container maxWidth= "xl" sx={{ background : "rgba(10, 11, 26, 1)"}}>
        <SectionHeading secHead={"Upcoming Shows"} page={false}/>
        <Box sx={{ display: "flex", flexWrap: "wrap" , justifyContent: "center"}}>
          <MediaCard
            actorName={"Benny Dayal"}
            type={"Folk"}
            actorImage={bday}
          />
          <MediaCard
            actorName={"Vijay Yesudas"}
            type={"Bollywood"}
            actorImage={vYesu}
          />
          <MediaCard
            actorName={"Andrea Jeremiah"}
            type={"Folk"}
            actorImage={aJere}
          />
          <MediaCard actorName={"Shilpa Rao"} type={"Folk"} actorImage={sRao} />
        </Box>
      </Container>
    </>
  );
}

export default UpcomingShows;
