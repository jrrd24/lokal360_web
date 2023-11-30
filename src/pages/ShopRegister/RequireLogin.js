import React from "react";
import LoginForm from "../login/LoginForm";
import { Box, Stack } from "@mui/material";

function RequireLogin() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right bottom, #E4E1F9, #ACA4EC)",
      }}
    >
      <Stack>
        <Box sx={{ maxWidth: 400 }}>
          <LoginForm loginOnly />
        </Box>
      </Stack>
    </div>
  );
}

export default RequireLogin;
