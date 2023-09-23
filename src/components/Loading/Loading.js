import { CircularProgress, Container } from "@mui/material";
import React from "react";

function LoadingCircle() {
  return (
    <Container>
      <CircularProgress color="primary" />
    </Container>
  );
}

export { LoadingCircle };
