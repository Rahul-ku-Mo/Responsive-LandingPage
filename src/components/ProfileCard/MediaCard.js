import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import style from "./MediaCard.module.css";
import { Box } from "@mui/system";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const MediaCard = ({ actorName, type, actorImage }) => {
  return (
    <Card
      sx={{
        width: 276,
        maxheight: 395,
        borderRadius: "8px",
        boxShadow: " 8px -8px rgba(48, 26, 104, 1)",
        marginRight: "16px",
        marginTop:"16px",
        backgroundColor: "black"
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={actorImage}
        alt={actorName}
      />
      <CardContent sx={{ background: "rgba(17, 18, 41, 1)" }}>
        <Typography
          sx={{
            fontFamily: "'Nunito Sans', sans-serif",
            fontSize: "12px",
            lineHeight: "14px",
            color: "#682F26",
            background: "#E5C558",
            padding: "2px 6px",
            borderRadius: "2px",
            width: "fit-content",
            fontWeight: "600",
            fontStyle: "normal",
            border: "1px solid rgba(17, 18, 41, 1)",
          }}
        >
          {type}
        </Typography>
        <Typography
          gutterBottom
          component="div"
          sx={{
            fontFamily: "'Libre Baskerville', serif",
            lineHeight: "32px",
            fontSize: "20px",
            fontWeight: "bold",
            color: "white",
          }}
        >
          {actorName}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "16px",
          justifyContent: "space-between",
          background: "rgba(17, 18, 41, 1)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            color: "rgba(2, 89, 235, 1)",
          }}
          className={style.more}
        >
          <Typography
            size="small"
            sx={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: "16px",
              lineHeight: "32px",
              fontWeight: "semiBold",
              cursor: "pointer"
            }}
            
          >
            More Info
          </Typography>
          <ArrowRightAltIcon sx={{ color: "rgba(2, 89, 235, 1)" }} />
        </Box>
        <Box
          sx={{
            borderLeft: "2px solid grey",
            paddingLeft: "20px",
            textAlign: "right",
            display: "flex",
            alignItems: "center",
          }}
        >
          <BookmarksIcon
            sx={{ color: "rgba(219, 76, 170, 1)", cursor: "pointer" }}
            className={style.card}
          />
        </Box>
      </CardActions>
    </Card>
  );
};

export default MediaCard;
