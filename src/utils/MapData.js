import React from "react";
import { Typography } from "@mui/material";

function MapData({ inputData, component: Component, sortByField, showUpTo }) {
  console.log(inputData, Component, sortByField, showUpTo);
  const sortedData = inputData
    .slice()
    .sort((a, b) => b[sortByField] - a[sortByField]);
  const showLimit = sortedData.slice(0, showUpTo);
  return (
    <div>
      {showLimit.length > 0 ? (
        showLimit.map((data) => <Component key={data.id} data={data} />)
      ) : (
        <Typography>No Record Found</Typography>
      )}
    </div>
  );
}

export default MapData;
