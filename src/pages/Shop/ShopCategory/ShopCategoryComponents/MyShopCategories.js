import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import ButtonAdd from "../../../../components/Buttons/ButtonAdd";
import DataGridCategories from "./DataGridCategories";
import { useMediaQuery } from "@mui/material";
import NewCategoryDialog from "./NewCategoryDialog/NewCategoryDialog";

function MyShopCategories() {
  const isSmScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

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
      <Box sx={{ ...classes.main }}>
        <Stack spacing={2} direction={"column"}>
          {/*Section Name */}
          <Box direction={"row"} sx={{ ...classes.sectionName }}>
            <Typography variant="sectionTitle">My Categories</Typography>
            <ButtonAdd label={"New Category"} onClickAction={handleOpen} />
          </Box>
          <DataGridCategories />
        </Stack>
      </Box>

      {/*New Category Dialog Box */}
      <NewCategoryDialog
        open={open}
        handleClose={handleClose}
        isSmScreen={isSmScreen}
      />
    </div>
  );
}

const classes = {
  main: {
    maxWidth: "600px",
    "@media (max-width: 720px)": {
      justifyContent: "center",
      maxWidth: "100%",
    },
  },

  sectionName: {
    display: "flex",
    flexDirection: "row",
    gap: "16px",
    flexWrap: "wrap",
    alignItems: "baseline",
    justifyContent: "flex-start",
    "@media (max-width: 415px)": {
      gap: "6px",
    },
  },
};
export default MyShopCategories;
