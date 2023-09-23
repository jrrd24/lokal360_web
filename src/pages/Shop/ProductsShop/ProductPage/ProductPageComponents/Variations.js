import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import ButtonAdd from "../../../../../components/Buttons/ButtonAdd";
import theme from "../../../../../Theme";
import DataGridVariations from "./DataGridVariations";
import NewVariationDialog from "./NewVariationDialog/NewVariationDialog";

function Variations({
  variations,
  openNewVar,
  setOpenNewVar,
  openEditVar,
  setOpenEditVar,
  handleSave,
  handleDelete,
  productID,
  name,
}) {
  const handleOpen = () => {
    setOpenNewVar(true);
  };
  const handleClose = () => {
    setOpenNewVar(false);
  };

   

  return (
    <div>
      <Stack spacing={3} width={"100%"}>
        {/*Section Name */}
        <Box direction={"row"} sx={{ ...theme.components.box.sectionName }}>
          <Typography variant="sectionTitle">Variations</Typography>
          <ButtonAdd label={"New Variation"} onClickAction={handleOpen} />
          {/*TODO: Add onClick for Button */}
        </Box>

        <Box sx={{ alignSelf: "center", width: "100%" }}>
          <DataGridVariations
            data={variations}
            open={openEditVar}
            setOpen={setOpenEditVar}
            handleSave={handleSave}
            handleClose={handleClose}
            handleDelete={handleDelete}
          />
        </Box>
      </Stack>

      <NewVariationDialog
        open={openNewVar}
        handleSave={handleSave}
        handleClose={handleClose}
        name={name}
      />
    </div>
  );
}

export default Variations;
