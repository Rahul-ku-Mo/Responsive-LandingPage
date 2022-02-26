import { Box, Typography, Pagination } from "@mui/material";
import React from "react";

const SectionHeading = ({ secHead, page }) => {
  return (
    <>
      <Box
        sx={{
          margin: "53px 0px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          paddingLeft: { md: "150px", xs: "16px" },
        }}
      >
        <Box>
          <Typography
            sx={{
              fontFamily: "'Libre Baskerville', serif",
              lineHeight: { md: "40px", xs: "20px" },
              fontSize: { md: "32px", xs: "24px" },
              color: "white",
            }}
          >
            {secHead}
          </Typography>
          <Typography
            sx={{
              marginTop: "8px",
              borderTop: "3px solid rgba(2, 89, 235, 1)",
              width: "48px",
            }}
          ></Typography>
        </Box>
        {page ? (
          <Pagination count={3} color="secondary" sx ={{ paddingRight: { md: "150px", xs: "16px" }, color: "#ffffff"}}  showFirstButton showLastButton />
        ) : (
          <Typography
            sx={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: "16px",
              lineHeight: "24px",
              color: "#E5C558",
              paddingRight: { md: "150px", xs: "16px" },
            }}
          >
            View All
          </Typography>
        )}
      </Box>
    </>
  );
};

export default SectionHeading;
