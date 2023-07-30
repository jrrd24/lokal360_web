import React from 'react'
import { Box, Button } from "@mui/material";
import Cookies from "js-cookie";
import PageInfoComponent from "../../../components/PageInfoAndTime/PageInfoComponent";
import { useNavigate } from 'react-router-dom';

function SettingsContent() {
  const navigate = useNavigate();
  const handleLogout =()=>{
    Cookies.remove('access-token')
    navigate("/");

  }
    return (
        <Box sx={{ backgroundColor: "transparent" }}>
          <PageInfoComponent
            PageName={"Settings"}
            Subtitle={"View Admin Settings"}
          />

          <Button onClick={handleLogout}>LogOut</Button>
        </Box>
      );
}

export default SettingsContent