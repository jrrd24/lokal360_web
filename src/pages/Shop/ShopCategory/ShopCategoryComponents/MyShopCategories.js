import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import ButtonAdd from "../../../../components/Buttons/ButtonAdd";
import DataGridCategories from "./DataGridCategories";
import NewCategoryDialog from "./NewCategoryDialog/NewCategoryDialog";

function MyShopCategories({
  open,
  setOpen,
  handleSave,
  handleDelete,
  openEdit,
  setOpenEdit,
}) {
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
          <DataGridCategories
            openEdit={openEdit}
            setOpenEdit={setOpenEdit}
            handleSave={handleSave}
            handleDelete={handleDelete}
          />
        </Stack>
      </Box>

      {/*New Category Dialog Box */}
      <NewCategoryDialog
        open={open}
        handleClose={handleClose}
        handleSave={handleSave}
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
