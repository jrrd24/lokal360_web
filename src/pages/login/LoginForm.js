import React, { useContext, useState, useEffect } from "react";
import {
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  Link,
  Button,
  Divider,
  Typography,
  Stack,
} from "@mui/material";
import { CustomInput } from "../../components/FormComponents/CustomInput";
import { useForm } from "react-hook-form";
import CustomAlert from "../../components/CustomAlert";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthProvider";
import Api from "../../api/Api";

const LoginForm = () => {
  //initialize api url
  const LOGIN_URL = `/api/auth/login`;
  // React Hook Form / auth context / react-router declarations
  const navigate = useNavigate();
  const { setAuth, auth } = useContext(AuthContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //Handle Alert Click
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("error");
  const [alertMsg, setAlertMsg] = useState("");

  const handleClick = (severity, alertMsg) => {
    setSeverity(severity);
    setAlertMsg(alertMsg);
    setOpen(true);
  };

  // Function for handling login after clicking login button
  const handleLogin = async (data) => {
    const { email, password } = data;
    const payload = {
      email,
      password,
    };

    Api.post(LOGIN_URL, payload, {
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        //pass the ff to AuthContext
        const accessToken = response?.data?.accessToken;
        const roles = response?.data.roles;
        setAuth({ email, password, roles, accessToken });
        console.log("Logged In", { payload, roles, accessToken });
        //store token in js-cookie
        Cookies.set("access-token", accessToken, {
          expires: 2592000000,
          secure: false,
        });
        navigate("/Admin/Dashboard");
        console.log("AuthContext Values:", {
          auth /* other context values */,
        });
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          handleClick("warning", "Incorrect Username or Password");
        } else if (error.response && error.response.status === 404) {
          handleClick("warning", "User does not Exist");
        } else {
          handleClick("error", "Server Error. Please Try Again Later");
        }
      });
  };

  return (
    <Container
      sx={{
        bgcolor: "#ffffff",
        height: 700,
        p: 1,
      }}
    >
      <Stack
        spacing={5}
        sx={{
          p: 5,
        }}
      >
        {/*Welcome */}
        <Box sx={{ fontWeight: "medium", fontSize: 48 }}>Welcome</Box>

        {/*Login Form */}
        <form onSubmit={handleSubmit(handleLogin)}>
          {/*Email /Password /Remember Me*/}
          <Stack spacing={2}>
            {/*Email*/}
            <CustomInput
              control={control}
              name="email"
              label="Email"
              rules={{
                required: "Email Is Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid Email Address",
                },
                maxLength: {
                  value: 255,
                  message: "Max Length of Email is 255 Characters",
                },
              }}
            />

            {/*Password*/}
            <CustomInput
              control={control}
              name="password"
              label="Password"
              secureTextEntry
              rules={{
                required: "Password Is Required",
                minLength: {
                  value: 8,
                  message: "Password Should Have at least 8 Characters",
                },
                pattern: {
                  value: /^\S*$/,
                  message: "Spaces are Not Allowed ",
                },
                maxLength: {
                  value: 30,
                  message: "Max Length of Password is 30 Characters",
                },
              }}
            />

            {/*Remember Me/Forgot Password */}
            <Stack
              direction="row"
              spacing={{ xs: 3, md: 12.5 }}
              sx={{ width: "400" }}
            >
              {/*Remember Me*/}
              <FormControlLabel control={<Checkbox />} label="Remember Me" />

              {/*Forgot Password */}
              <Link
                component="button"
                variant="body2"
                onClick={() => {
                  console.info("I'm a button.");
                }}
              >
                Forgot Password
              </Link>
            </Stack>

            {/*Button*/}
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#6E5FDE",
                height: 57,
                fontWeight: "medium",
                fontSize: 20,
              }}
            >
              Log In
            </Button>
          </Stack>
        </form>

        {/*Or/ Google */}
        <Stack spacing={2}>
          {/*Or */}
          <Box style={{ display: "flex", alignItems: "center" }}>
            <Divider style={{ flexGrow: 1 }} />
            <Typography
              variant="body1"
              style={{ margin: "0 10px", fontSize: 17, color: "#8F8F8F" }}
            >
              Or
            </Typography>
            <Divider style={{ flexGrow: 1 }} />
          </Box>

          <Button
            variant="outlined"
            sx={{ backgroundColor: "#ffffff" }}
            startIcon={
              <svg
                enableBackground="new 0 0 48 48"
                height="40"
                viewBox="0 0 48 48"
                width="48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m43.611 20.083h-1.611v-.083h-18v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657c-3.572-3.329-8.35-5.382-13.618-5.382-11.045 0-20 8.955-20 20s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                  fill="#ffc107"
                />
                <path
                  d="m6.306 14.691 6.571 4.819c1.778-4.402 6.084-7.51 11.123-7.51 3.059 0 5.842 1.154 7.961 3.039l5.657-5.657c-3.572-3.329-8.35-5.382-13.618-5.382-7.682 0-14.344 4.337-17.694 10.691z"
                  fill="#ff3d00"
                />
                <path
                  d="m24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238c-2.008 1.521-4.504 2.43-7.219 2.43-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025c3.31 6.477 10.032 10.921 17.805 10.921z"
                  fill="#4caf50"
                />
                <path
                  d="m43.611 20.083h-1.611v-.083h-18v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571.001-.001.002-.001.003-.002l6.19 5.238c-.438.398 6.591-4.807 6.591-14.807 0-1.341-.138-2.65-.389-3.917z"
                  fill="#1976d2"
                />
              </svg>
            }
          >
            Continue With Google
          </Button>
        </Stack>

        {/*Alert */}
        <CustomAlert
          open={open}
          setOpen={setOpen}
          severity={severity}
          alertMsg={alertMsg}
        />
      </Stack>
    </Container>
  );
};

export default LoginForm;
