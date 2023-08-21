import React from "react";
import { TextField, InputAdornment, Box } from "@mui/material";

function DisplayInfo({
  name,
  label,
  defaultValue,
  width,
  multiline,
  component: Icon,
}) {
  return (
    <TextField
      name={name}
      label={label}
      variant="filled"
      defaultValue={defaultValue}
      multiline={multiline}
      maxRows={multiline ? 4 : undefined}
      InputProps={
        Icon
          ? {
              startAdornment: (
                <Box sx={{ pt: "4px" }}>
                  {" "}
                  {/* Add padding to the Box */}
                  <InputAdornment position="start">
                    <Icon sx={{ fontSize: 20 }} />
                  </InputAdornment>
                </Box>
              ),
              readOnly: true,
            }
          : { readOnly: true }
      }
      sx={{
        width: width,
        "& .MuiFilledInput-input": {
          paddingTop: multiline ? "8px" : "30px",
        },
      }}
      InputLabelProps={{
        style: { fontSize: "22px", fontWeight: 600 },
      }}
    />
  );
}

export default DisplayInfo;
