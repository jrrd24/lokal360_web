import React from "react";
import {
  Dialog,
  Box,
  Typography,
  DialogActions,
  DialogTitle,
  DialogContent,
  Stack,
} from "@mui/material";
import theme from "../../../../../Theme";
import ButtonSave from "../../../../../components/Buttons/ButtonSave";
import ButtonCloseDialog from "../../../../../components/Buttons/ButtonCloseDialog";
import { useForm } from "react-hook-form";
import DAdDetails from "./DAdDetails";
import { useMediaQuery } from "@mui/material";
import moment from "moment";
import useAuth from "../../../../../hooks/useAuth";
import useAxiosPrivate from "../../../../../hooks/useAxiosPrivate";
import { useRequestProcessor } from "../../../../../hooks/useRequestProcessor";
import { LoadingCircle } from "../../../../../components/Loading/Loading";

function NewAdvertismentDialog({ open, handleClose, handleSave }) {
  const isSmScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  //for react hook form
  const {
    control,
    handleSubmit,
    formState: { isDirty },
    watch,
    register,
    setValue,
    reset,
  } = useForm();

  // API CALL CREATE NEW LOKAL AD
  const { useCustomMutate } = useRequestProcessor();
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();

  const { mutate } = useCustomMutate(
    "newAd",
    async (data) => {
      console.log("M-DATA", data);
      const response = await axiosPrivate.post(
        `/api/ad/create/?shopID=${auth.shopID}`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    },
    ["getShopAds"],
    {
      onError: (error) => {
        if (error.response && error.response.status === 409) {
          handleSave("error", error.response.data.error);
        } else {
          handleSave("error", "Error Creating New Lokal Ad");
        }
      },
      onMutate: () => {
        <LoadingCircle />;
      },
      onSuccess: () => {
        handleClose();
        handleSave("success", "Lokal Ad Created Successfully");
        reset();
      },
    }
  );

  const onSubmit = (data, event) => {
    event.preventDefault();
    //FORMAT DATE
    const startDate = new Date(
      data.startDate.$y,
      data.startDate.$M,
      data.startDate.$D
    );
    const endDate = new Date(data.endDate.$y, data.endDate.$M, data.endDate.$D);

    const formattedStartDate = moment(startDate).format("YYYY-MM-DD");
    const formattedEndDate = moment(endDate).format("YYYY-MM-DD");

    const requestData = {
      adName: data.adName,
      adType: data.adType,
      endDate: formattedEndDate,
      startDate: formattedStartDate,
    };
    if (data.adImage instanceof File) {
      requestData.adImage = data.adImage;
    }

    mutate(requestData);
  };

  return (
    <div>
      <Dialog
        fullScreen={isSmScreen}
        fullWidth={true}
        maxWidth={"md"}
        open={open}
        onClose={handleClose}
        hideBackdrop={true}
        sx={{ backgroundColor: "#ECECEC80" }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle
            minHeight={70}
            sx={{ ...theme.components.dialog.dialogTitle }}
          >
            <Box sx={{ ...theme.components.dialog.dialogTitleContent }}>
              {/* Dialog Title*/}
              <Typography variant="sectionTitle">
                Create New Advertisement
              </Typography>

              {/*  Buttons */}
              <DialogActions sx={{ gap: "16px" }}>
                <ButtonSave
                  type="submit"
                  isDirty={isDirty}
                  sx={{ display: { xs: "none", sm: "none", md: "block" } }}
                />
                <ButtonCloseDialog handleClose={handleClose} />
              </DialogActions>
            </Box>
          </DialogTitle>

          {/* Dialog Content */}
          <DialogContent sx={{ ...theme.components.dialog.dialogContent }}>
            {/*Main*/}
            <Stack spacing={2} sx={{ width: "600px" }}>
              {/*Ads Details*/}
              <Box sx={{ py: 5 }}>
                <DAdDetails
                  control={control}
                  register={register}
                  setValue={setValue}
                  watch={watch}
                />
              </Box>
            </Stack>
          </DialogContent>

          {/* Show Save Button at Bottom for small screens */}
          <Box sx={{ ...theme.components.dialog.saveButtonSmall }}>
            <DialogActions sx={{ py: 2, display: "flex" }}>
              <ButtonSave type="submit" isDirty={isDirty} />
            </DialogActions>
          </Box>
        </form>
      </Dialog>
    </div>
  );
}

export default NewAdvertismentDialog;
