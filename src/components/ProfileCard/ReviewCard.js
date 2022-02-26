import { Card, CardContent, CardHeader } from "@mui/material";
import React from "react";
import { Avatar } from "@mui/material";
import { Typography } from "@mui/material";


import { Box } from "@mui/system";
const ReviewCard = ({ avaImg }) => {
  return (
    <>
      <Card
        sx={{
          width: "360px",
          maxHeight: "300px",
          borderRadius: "16px",
          boxShadow: " 8px -8px rgba(39, 108, 115, 1)",
          border: "2px solid #E5AF56",
          marginRight: "26px",
          background: "rgba(10, 11, 26, 1)",
          marginTop: "20px"
        }}
      >
        <Box sx={{ display: "flex" , alignItems: "flex-end" , padding: "36px 16px 20px 24px" }}>
        <Avatar src={avaImg} aria-label="Hellen Jummy" sx={{marginRight: "16px"}} />
        <Box>
          <Typography sx ={{ fontSize: "16px" , lineHeight: "32px" , color: "white", fontFamily: `'Quattrocento', serif`}}>
            Hellen Jummy
          </Typography>
         <Typography sx= {{ fontSize : "11px" , lineHeight: "16px", color: "rgba(229, 197, 88, 1)" , fontFamily: "'Nunito Sans', sans-serif" , textTransform: "uppercase" }}>
         Palo Alto, CA
         </Typography>
        </Box>
        </Box>

        <CardContent sx={{ paddingLeft: "0px"}}> 
          <Typography
            sx={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: "400",
              fontStyle: "normal",
              color: "white",
              padding: "0px 18px 40px 24px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in
            donec in nisi vitae. Vestibulum pellentesque eget laoreet
            adipiscing.
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default ReviewCard;
