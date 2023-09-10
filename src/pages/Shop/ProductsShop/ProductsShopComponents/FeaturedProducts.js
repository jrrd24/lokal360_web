import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import ButtonAdd from "../../../../components/Buttons/ButtonAdd";
import theme from "../../../../Theme";
import FeaturedProductsDialog from "./FeaturedProductsDialog/FeaturedProductsDialog";

function FeaturedProducts() {
  // Handle Open Dialog Box (AddProduct)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ width: "100%" }}>
      <Stack spacing={2} direction={"column"}>
        {/*Section Name */}
        <Box direction={"row"} sx={{ ...theme.components.box.sectionName }}>
          <Typography variant="sectionTitle">Featured Products</Typography>
          <ButtonAdd label={"Add / Edit Featured"} onClickAction={handleOpen} />
          {/*TODO: Add onClick for Button */}
        </Box>

        {/*TODO: Add featured products */}
        <Box sx={{ ...classes.featuredProductsContainer }}>
          <Box sx={{ height: 265, width: 180, backgroundColor: "#ffbb03" }} />
          <Box sx={{ height: 265, width: 180, backgroundColor: "#ffd14d" }} />
          <Box sx={{ height: 265, width: 180, backgroundColor: "#6ef" }} />
        </Box>
      </Stack>

      <FeaturedProductsDialog open={open} handleClose={handleClose} />
    </div>
  );
}

const classes = {
  featuredProductsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    flexWrap: "wrap",
    alignItems: "flex-start",
    width: "100%",
    overflow: "auto",
    height: 275,
    "@media (max-width: 709px)": {
      justifyContent: "flex-start",
    },
  },
};

export default FeaturedProducts;
