import React from "react";
import { Box } from "@mui/material";
import PageInfoComponent from "../../../components/PageInfoAndTime/PageInfoComponent";
import useDataGetPrivate from "../../../hooks/useDataGetPrivate";
import useLogout from "../../../hooks/useLogout";
import { useNavigate } from "react-router-dom";

function DashboardContent() {
  const HOME_URL = `/api/home/`;

  const logout = useLogout();
  const navigate = useNavigate();
  const { data, loading, error } = useDataGetPrivate(HOME_URL);

  const handleLogOut = async () => {
    await logout();
    navigate("/login");
  };
  return (
    <Box sx={{ backgroundColor: "transparent" }}>
      <PageInfoComponent
        PageName={"Admin Dashboard"}
        Subtitle={"Welcome Admin"}
      />
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      <button onClick={handleLogOut}>LOGOUT</button>
    </Box>
  );
}

export default DashboardContent;
