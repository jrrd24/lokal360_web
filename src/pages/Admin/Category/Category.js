import React, { useEffect } from "react";
import CategoryContent from "./CategoryContent";
import AdminSidebar from "../../../components/Sidebar/AdminSidebar";

function Category() {
  //Set Document Title
  useEffect(() => {
    document.title = "Category | Lokal 360";
    return () => {
      document.title = "Lokal 360";
    };
  }, []);

  return <AdminSidebar component={CategoryContent} />;
}

export default Category;
