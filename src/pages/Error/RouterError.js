import React from "react";
import { useLocation } from "react-router-dom";
import error404 from "../../assets/error404.png";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

function RouterError() {
  const location = useLocation();

  return (
    <Container id="error-page" sx={{ width: "100%", pt: 10 }}>
      <img
        src={require("../../assets/error404.png")}
        alt="404 Error"
        style={{ width: "20rem", height: "15rem" }}
      />
      
      <Stack spacing={2}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Oops!
        </Typography>
        <Stack spacing={0}>
          <Typography variant="h6" sx={{ fontWeight: "medium" }}>
            Error 404:
          </Typography>
          <Typography variant="subtitle">
            The page at <i>{location.pathname}</i> does not exist.
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
}

export default RouterError;
