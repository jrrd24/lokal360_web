import {
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import React from "react";
import theme from "../../Theme";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import OwnerDetailsForm from "./Forms/OwnerDetailsForm";
import DocumentsForm from "./Forms/DocumentsForm";
import ConfirmDetailsForm from "./Forms/ConfirmDetailsForm";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useRequestProcessor } from "../../hooks/useRequestProcessor";
import { LoadingCircle } from "../../components/Loading/Loading";

function ShopRegistration() {
  // For React Hook Form
  const {
    control,
    handleSubmit,
    formState: { isDirty },
    trigger,
    register,
    setValue,
  } = useForm();

  const steps = ["Owner Details", "Documents Upload", "Confirm Details"];

  const onSubmit = async (data, event) => {};

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = async () => {
    const isOwnerDetailsFormValid = await trigger();
    if (isDirty && isOwnerDetailsFormValid) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  //API CALL GET USER INFO
  const { useCustomQuery } = useRequestProcessor();
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();

  const { data, isLoading } = useCustomQuery(
    "getOwnerInfoForRegistration",
    () =>
      axiosPrivate
        .get(`/api/register_shop/owner_info/?userID=${auth.userID}`)
        .then((res) => res.data),
    { enabled: true }
  );

  if (isLoading) {
    return <LoadingCircle />;
  }

  return (
    <div style={{ ...classes.pageContainer }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ ...classes.formContainer }}>
          <Typography variant="sectionTitle">Register Shop</Typography>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div>
                {activeStep === 0 ? (
                  <OwnerDetailsForm
                    control={control}
                    trigger={trigger}
                    data={data}
                  />
                ) : activeStep === 1 ? (
                  <DocumentsForm
                    control={control}
                    register={register}
                    setValue={setValue}
                  />
                ) : (
                  <ConfirmDetailsForm />
                )}
              </div>

              <Box
                sx={{
                  display: "flex",
                  alignSelf: "flex-end",
                  gap: 2,
                  "@media (max-width: 600px)": { alignSelf: "center" },
                }}
              >
                <Button
                  variant="outlined"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                >
                  <Typography
                    variant="sectionTitleSmall"
                    sx={{ color: "inherit", fontSize: 16 }}
                  >
                    Back
                  </Typography>
                </Button>

                <Button variant="contained" onClick={handleNext}>
                  <Typography
                    variant="sectionTitleSmall"
                    sx={{ color: "inherit", fontSize: 16 }}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Typography>
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Box>
      </form>
    </div>
  );
}

const classes = {
  pageContainer: {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    background: "linear-gradient(to right bottom, #E4E1F9, #ACA4EC)",
  },

  formContainer: {
    mt: 5,
    mb: 10,
    minWidth: 700,
    backgroundColor: theme.palette.background.paper,
    px: 5,
    py: 5,
    borderRadius: 5,
    display: "flex",
    flexDirection: "column",
    gap: 5,
    "@media (max-width: 900px)": {
      mt: 0,
      mb: 0,
      minHeight: "100%",
      minWidth: "100%",
    },
    "@media (max-width: 600px)": {
      px: 2,
    },
  },
};

export default ShopRegistration;
