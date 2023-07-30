import React from "react";
import LoginForm from "./LoginForm";
import LoginHeader from "./LoginHeader";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";

const Login = () => {
  return (
    <Container
      disableGutters
      maxWidth="100%"
      sx={{
        height: "100vh",
        background: "linear-gradient(to right bottom, #E4E1F9, #ACA4EC)",
      }}
    >
      <LoginHeader />

      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          height: "100%",
          pt: 5,
          display: "flex",
        }}
      >
        <Grid
          item
          sx={{ display: { xs: 'none', lg: 'block', xl: 'block' } }}
        >
          <img
            src={require("../../assets/login_web.png")}
            style={{ width: 750, height: 600 }}
            alt="Logo"
          />
        </Grid>

        <Grid item xs>
          <LoginForm />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
