import React from "react";
import { Button, Typography } from "@mui/material";
import { AddCircleOutline } from "@mui/icons-material";

function ButtonAdd({ label, onClickAction }) {
  return (
    <Button
      variant="outlined"
      startIcon={<AddCircleOutline />}
      onClick={onClickAction}
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
