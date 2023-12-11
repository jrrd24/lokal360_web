import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Zoom,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import theme from "../../../../../Theme";
import { useForm } from "react-hook-form";
import ButtonSave from "../../../../../components/Buttons/ButtonSave";
import ButtonCloseDialog from "../../../../../components/Buttons/ButtonCloseDialog";
import MapComponent from "./MapComponent";
import "leaflet/dist/leaflet.css";
import { useRequestProcessor } from "../../../../../hooks/useRequestProcessor";
import useAxiosPrivate from "../../../../../hooks/useAxiosPrivate";
import useAuth from "../../../../../hooks/useAuth";
import { LoadingCircle } from "../../../../../components/Loading/Loading";

function SetLocationDialog({
  open,
  handleClose,
  handleSave,
  latitude,
  longitude,
}) {
  const isSmScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const [coordinates, setCoordinates] = useState({
    latitude: null,
    longitude: null,
  });

  const { useCustomMutate } = useRequestProcessor();
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();

  //API CALL FOR SETTING SHOP COORDINATES
  const { mutate } = useCustomMutate(
    "setShopCoordinates",
    async (data) => {
      const response = await axiosPrivate.patch(
        `/api/shopInfo/set_coordinates/?shopID=${auth.shopID}`,
        data
      );
      return response.data;
    },
    ["getShopInfo"],
    {
      onError: (error) => {
        handleSave("error", error);
      },
      onMutate: () => {
        return <LoadingCircle />;
      },
      onSuccess: () => {
        handleClose();
        handleSave("success", "Shop Data Updated Successfully");
      },
    }
  );

  const handleSubmit = () => {
    const requestData = {
      latitude: parseFloat(parseFloat(coordinates.latitude).toFixed(8)),
      longitude: parseFloat(parseFloat(coordinates.longitude).toFixed(8)),
    };

    mutate(requestData);
  };

  return (
    <Dialog
      fullScreen={isSmScreen}
      fullWidth={true}
      maxWidth={"md"}
      open={open}
      onClose={handleClose}
      hideBackdrop={true}
      TransitionComponent={Zoom}
      sx={{ ...theme.components.dialog.dialogBox }}
      PaperProps={{ sx: { ...theme.components.dialog.paperProps } }}
    >
      {/* Dialog Title/ Buttons */}
      <DialogTitle sx={{ ...theme.components.dialog.dialogTitle }}>
        <Box sx={{ ...theme.components.dialog.dialogTitleContent }}>
          {/* Dialog Title*/}
          <Typography variant="sectionTitle">Set Pinned Location</Typography>

          {/*  Buttons */}
          <DialogActions sx={{ gap: "16px" }}>
            <ButtonSave
              type="submit"
              onClick={handleSubmit}
              isDirty={coordinates.latitude && coordinates.latitude}
              sx={{ display: { xs: "none", sm: "none", md: "block" } }}
            />
            <ButtonCloseDialog handleClose={handleClose} />
          </DialogActions>
        </Box>
      </DialogTitle>

      {/* Dialog Content */}
      <DialogContent sx={{ ...theme.components.dialog.dialogContent }}>
        <MapComponent
          setCoordinates={setCoordinates}
          latitude={latitude}
          longitude={longitude}
        />
      </DialogContent>

      {/* Show Save Button at Bottom for small screens */}
      <Box sx={{ ...theme.components.dialog.saveButtonSmall }}>
        <DialogActions sx={{ py: 2, display: "flex" }}>
          <ButtonSave
            type="submit"
            isDirty={coordinates.latitude && coordinates.latitude}
          />
        </DialogActions>
      </Box>
    </Dialog>
  );
}

export default SetLocationDialog;
