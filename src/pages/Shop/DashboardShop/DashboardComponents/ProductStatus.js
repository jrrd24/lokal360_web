import React from "react";
import {
  Box,
  Stack,
  Typography,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import styles from "../../../../css/Styles.module.css";
import CustomLink from "../../../../components/CustomLink";
import theme from "../../../../Theme";
import NumberFormat from "../../../../utils/NumberFormat";
import { useRequestProcessor } from "../../../../hooks/useRequestProcessor";
import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";
import useAuth from "../../../../hooks/useAuth";
import { LoadingCircle } from "../../../../components/Loading/Loading";

function ProductStatus({ hideShowAll }) {
  // GET PRODUCT STATUS COUNT
  const { useCustomQuery } = useRequestProcessor();
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();

  const { data, isLoading } = useCustomQuery(
    "getProductStatusCount",
    () =>
      axiosPrivate
        .get(`/api/product/prod_status_count/?shopID=${auth.shopID}`)
        .then((res) => res.data),
    { enabled: true }
  );

  if (isLoading) {
    <LoadingCircle />;
  }

  let {
    in_stock_count = 0,
    low_stock_count = 0,
    out_of_stock_count = 0,
    discontinued_count = 0,
  } = data || {};

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      {/*Section NaME */}
      <Stack
        direction={"row"}
        sx={{ alignItems: "baseline", justifyContent: "space-between" }}
      >
        <Typography variant="sectionTitle">Product Status</Typography>
        <Box
          className={`${styles.grow}`}
          sx={{ display: hideShowAll ? "none" : "block" }}
        >
          <CustomLink to="/shop/products">{"See All"}</CustomLink>
        </Box>
      </Stack>

      {/*Status Table Container*/}
      <TableContainer>
        <Table size="small">
          <TableBody>
            {/*In Stock */}
            <TableRow className={`${styles.changeBG}`}>
              <TableCell>
                <Typography variant="body1"> In Stock</Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant="sectionTitleSmall"
                  sx={{ color: `${theme.palette.success.main}` }}
                >
                  <NumberFormat value={in_stock_count} />
                </Typography>
              </TableCell>
            </TableRow>

            {/*Low Stock */}
            <TableRow className={`${styles.changeBG}`}>
              <TableCell>
                <Typography variant="body1"> Low Stock</Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant="sectionTitleSmall"
                  sx={{ color: `${theme.palette.warning.main}` }}
                >
                  <NumberFormat value={low_stock_count} />
                </Typography>
              </TableCell>
            </TableRow>

            {/*Out Of Stock */}
            <TableRow className={`${styles.changeBG}`}>
              <TableCell>
                <Typography variant="body1"> Out of Stock</Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant="sectionTitleSmall"
                  sx={{ color: `${theme.palette.danger.main}` }}
                >
                  <NumberFormat value={out_of_stock_count} />
                </Typography>
              </TableCell>
            </TableRow>

            {/*Discontinued */}
            <TableRow className={`${styles.changeBG}`}>
              <TableCell>
                <Typography variant="body1"> Discontinued</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="sectionTitleSmall" sx={{ color: "#444" }}>
                  <NumberFormat value={discontinued_count} />
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
}

export default ProductStatus;
