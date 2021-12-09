import React from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function ResultsList() {
  const { recentSearches } = useSelector((state) => state.location);

  return (
    <div className="list-section">
      <Typography
        variant="h5"
        gutterBottom
        component="div"
        sx={{ marginBottom: "30px" }}
      >
        List of last 10 searches
      </Typography>
      <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        {recentSearches.map((item, index) => {
          return (
            <Typography
              key={index}
              variant="subtitle1"
              gutterBottom
              component="div"
            >
              {item}
            </Typography>
          );
        })}
      </Box>
    </div>
  );
}

export default ResultsList;
