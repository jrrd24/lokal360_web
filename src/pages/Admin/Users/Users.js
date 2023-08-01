import React, { useEffect } from "react";
import AdminSidebar from "../../../components/Sidebar/AdminSidebar";
import UsersContent from "./UsersContent";

function Users() {
  //Set Document Title
  useEffect(() => {
    document.title = "Users | Lokal 360";
    return () => {
      document.title = "Lokal 360";
    };
  }, []);
  return <AdminSidebar component={UsersContent} />;
}

export default Users;
