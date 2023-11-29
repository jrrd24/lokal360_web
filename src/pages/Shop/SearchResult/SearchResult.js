import React, { useEffect } from "react";
import ShopSidebar from "../../../components/Sidebar/ShopSidebar";
import SearchResultContent from "./SearchResultContent";
import { useParams } from "react-router-dom";

function SearchResult() {
  const { query } = useParams();

  //Set Document Title
  useEffect(() => {
    document.title = `Result: ${query} | Lokal 360`;
    return () => {
      document.title = "Lokal 360";
    };
  }, [query]);

  return <ShopSidebar component={SearchResultContent} />;
}

export default SearchResult;
