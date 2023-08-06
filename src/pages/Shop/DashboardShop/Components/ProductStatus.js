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

function ProductStatus() {
  return (
    <Stack spacing={1} direction={"column"}>
      {/*Section NaME */}
      <Stack
        spacing={10}
        direction={"row"}
        sx={{ alignItems: "baseline", justifyItems: "baseline" }}
      >
        <Typography variant="sectionTitle">Product Status</Typography>
        <Box className={`${styles.grow}`}>
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
                  sx={{ color: "#8CCC00" }}
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
                  sx={{ color: "#F7B801" }}
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
                  sx={{ color: "#F35B04" }}
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
