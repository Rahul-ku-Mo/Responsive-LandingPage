import React from "react";
import { Box } from "@mui/system";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Typography } from "@mui/material";

const Progress = ({newIcon , Label}) => {
  return (
    <>
      <Box
        sx={{
          height: { md: "208px" , xs: "144px"},
          width: { md: "208px" , xs: "144px"},
          borderRadius: "50%",
          border: "2px solid #DD4CAC",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: { md: "100px" , xs: "20px"},
          marginRight: { md: "83px" , xs: "10px"},
         
        }}
      >
       {newIcon ?  <FavoriteBorderIcon 
          sx={{ color: "rgba(2, 89, 235, 1)", zIndex: "1" }}
        />
        :
        <CollectionsBookmarkIcon
          sx={{ color: "rgba(2, 89, 235, 1)", zIndex: "1" }}
        />}
        <Typography
          sx={{
            fontSize: "24px",
            lineHeight: "32px",
            fontFamily: "'Libre Baskerville', serif",
            color: "white",
            zIndex: "1",
          }}
        >
          0
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Nunito Sans', sans-serif",
            fontSize: "16px",
            lineHeight: "32px",
            color: "white",
            
          }}
        >
          {Label}
        </Typography>
      </Box>
    </>
  );
};

export default Progress;
