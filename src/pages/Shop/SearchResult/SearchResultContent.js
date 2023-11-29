import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import theme from "../../../Theme";
import { useRequestProcessor } from "../../../hooks/useRequestProcessor";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import useAuth from "../../../hooks/useAuth";
import { LoadingCircle } from "../../../components/Loading/Loading";
import MapData from "../../../utils/MapData";
import ProductPreview from "../../../components/ShopOnly/ProductPreview";

function SearchResultContent() {
  const { query } = useParams();

  // API CALL GET SEARCH RESULTS
  const { useCustomQuery } = useRequestProcessor();
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();

  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await axiosPrivate
        .get(
          `/api/product/shop_mgmt/search/?shopID=${auth.shopID}&query=${query}`
        )
        .then((res) => res.data);
      setSearchResults(data.rows);
      setIsLoading(false);
    };

    fetchData();
  }, [query]);

  if (isLoading) {
    return <LoadingCircle />;
  }

  return (
    <div>
      <Box sx={{ ...theme.components.box.pageContainer }}>
        <Box sx={{ ...theme.components.box.mainContent }}>
          <Stack spacing={3} sx={{ ...classes.resultsContainer }}>
            {/* QUERY AND COUNT */}
            <div>
              <Typography variant="sectionTitle">{query}</Typography>
              <Typography variant="subtitle1">
                <Typography color={"primary"} component={"span"}>
                  <b>{searchResults.length}</b>
                </Typography>{" "}
                Total Results
              </Typography>
            </div>

            {/* RESULT */}
            <div>
              <MapData
                inputData={searchResults}
                component={ProductPreview}
                idName={"productID"}
                horizontal
                height={330}
                sortByField={"total_sold"}
              />
            </div>
          </Stack>
        </Box>
      </Box>
    </div>
  );
}

const classes = {
  resultsContainer: {
    pt: 2,
    width: "600px",
    textAlign: "left",
    "@media (max-width: 900px)": {
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    },
  },
};
export default SearchResultContent;
