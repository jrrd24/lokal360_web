import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import theme from "../../../../Theme";
import DataGridEmployees from "./DataGridEmployees";
import ButtonAdd from "../../../../components/Buttons/ButtonAdd";
import AddEmployeeDialog from "./AddEmployeeDialog/AddEmployeeDialog";

function MyEmployees({
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
    <div>
      <Box sx={{ ...classes.main }}>
        <Stack spacing={2} direction={"column"}>
          {/*Section Name */}
          <Box direction={"row"} sx={{ ...classes.sectionName }}>
            <Typography variant="sectionTitle">My Employees</Typography>
            <ButtonAdd label={"Add Employee"} onClickAction={handleOpen} />
            {/*TODO: Add onClick for Button */}
          </Box>

          <DataGridEmployees
            openEdit={openEdit}
            setOpenEdit={setOpenEdit}
            handleSave={handleSave}
            handleDelete={handleDelete}
          />
        </Stack>
      </Box>

      {/*New Promo Dialog Box */}
      <AddEmployeeDialog
        open={open}
        handleClose={handleClose}
        handleSave={handleSave}
      />
    </div>
  );
}

const classes = {
  main: {
    maxWidth: "750px",
    "@media (max-width: 1516px)": {
      justifyContent: "center",
      maxWidth: "100%",
    },
  },

  sectionName: {
    ...theme.components.box.sectionName,
    "@media (max-width: 415px)": {
      gap: "6px",
    },
  },
};

export default MyEmployees;
