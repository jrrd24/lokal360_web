import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProfileContent from "./ProfileContent";
import ShopSidebar from "../../components/Sidebar/ShopSidebar";

const Profile = React.memo(() => {
  const [username, setUsername] = useState("user");

  //Set Page Title
  useEffect(() => {
    document.title = `${username} | Lokal 360`;
    return () => {
      document.title = "Lokal 360";
    };
  }, [username]);

  return (
    <ShopSidebar
      component={() => <ProfileContent setUsername={setUsername} />}
    />
  );
});

export default Profile;
