/*
* MAP DATA
*   USE:     Map Data is used for mapping json data
?   PROPS:   inputData = the json data
?            component = the component container of the data
?            sortByField = the field to be used when sorting the data
?            showUpTo = number of data to be mapped (OPTIONAL)
?            idName = name of the data's unique id field
*   RETURNS: all or specified number of mapped data that is sorted 
*            depending on the passed props
*   SAMPLE:   <MapData
*                inputData={userData}
*                component={CustomerContainer}
*                sortByField={"orders"}
*                showUpTo={6}
*                idName={"shopperID"}
*              />
*/

import React from "react";
import { Typography } from "@mui/material";

function MapData({
  inputData,
  component: Component,
  sortByField,
  showUpTo,
  idName,
}) {
  const sortedData = inputData
    .slice()
    .sort((a, b) => b[sortByField] - a[sortByField]);
  const showLimit = sortedData.slice(0, showUpTo);
  return (
    <div>
      {showLimit.length > 0 ? (
        showLimit.map((data) => <Component key={data[idName]} data={data} />)
      ) : (
        <Typography>No Record Found</Typography>
      )}
    </div>
  );
}

export default MapData;
