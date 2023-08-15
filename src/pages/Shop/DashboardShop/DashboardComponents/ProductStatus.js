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

function ProductStatus({ hideShowAll }) {
  return (
    <Stack spacing={2} sx={{ maxWidth: "100%" }}>
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
                  13
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
                  10
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
                  3
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
                  1
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
