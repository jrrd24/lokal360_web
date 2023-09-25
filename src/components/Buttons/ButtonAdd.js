import React from "react";
import { Button, Typography } from "@mui/material";
import { AddCircleOutline } from "@mui/icons-material";
import theme from "../../Theme";

function ButtonAdd({ label, onClickAction }) {
  return (
    <Button
      variant="outlined"
      startIcon={<AddCircleOutline />}
      onClick={onClickAction}
      sx={{
        backgroundColor: `${theme.palette.background.paper}`,
        borderRadius: 5,
      }}
    >
      {
        <Typography variant="seeAll" sx={{ color: "inherit", fontSize: 18 }}>
          {label}
        </Typography>
      }
    </Button>
  );
}

export default ButtonAdd;
