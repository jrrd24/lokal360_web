import React from "react";
import DataGridAds from "./DataGridAds";
import { Box, Typography, Stack } from "@mui/material";
import theme from "../../../../Theme";
import ButtonAdd from "../../../../components/Buttons/ButtonAdd";
import NewAdvertismentDialog from "./NewAdvertismentDialog/NewAdvertismentDialog";

function MyLokalAds({ handleSave, open, setOpen }) {
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Stack spacing={2} direction={"column"}>
          {/*Section Name */}
          <Box direction={"row"} sx={{ ...classes.sectionName }}>
            <Typography variant="sectionTitle">My Lokal Ads</Typography>
            <ButtonAdd label={"New Advertisment"} onClickAction={handleOpen} />

            {/*TODO: Add onClick for Button */}
          </Box>
          <DataGridAds />
        </Stack>
      </Box>

      {/*New Promo Dialog Box */}
      <NewAdvertismentDialog
        open={open}
        handleClose={handleClose}
        handleSave={handleSave}
      />
    </div>
  );
}

const classes = {
  sectionName: {
    ...theme.components.box.sectionName,
    "@media (max-width: 415px)": {
      gap: "6px",
    },
  },
};
export default MyLokalAds;
