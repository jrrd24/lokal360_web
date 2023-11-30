import {
  Alert,
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import theme from "../../Theme";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import OwnerDetailsForm from "./Forms/OwnerDetailsForm";
import DocumentsForm from "./Forms/DocumentsForm";
import ConfirmDetailsForm from "./Forms/ConfirmDetailsForm";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useRequestProcessor } from "../../hooks/useRequestProcessor";
import { LoadingCircle } from "../../components/Loading/Loading";
import CustomAlert from "../../components/CustomAlert";
import useAlert from "../../hooks/useAlert";
import { Logout } from "@mui/icons-material";
import useLogout from "../../hooks/useLogout";
import { useNavigate } from "react-router-dom";

function ShopRegistration() {
  const { useCustomQuery, useCustomMutate } = useRequestProcessor();
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();
  const logout = useLogout();
  const navigate = useNavigate();

  // For React Hook Form
  const {
    control,
    handleSubmit,
    formState: { isDirty },
    trigger,
    register,
    setValue,
    getValues,
    reset,
  } = useForm();

  // Handle Alert Click
  const {
    open: openAlert,
    severity,
    alertMsg,
    showAlert,
    hideAlert,
  } = useAlert();

  const steps = ["Owner Details", "Documents Upload", "Confirm Details"];
  const [ownerDetails, setOwnerDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    shopName: "",
    shopType: "",
    productsCategory: "",
  });

  const [documentsData, setDocumentsData] = useState({
    DTI_COBNR: null,
    DTI_Other: null,
    BIR_COR: null,
    gov_id_front: null,
    gov_id_back: null,
    products_list: null,
  });

  const handleOwnerDetailsSubmit = (data) => {
    // Update the ownerDetails state
    setOwnerDetails((prevDetails) => {
      const updatedDetails = { ...prevDetails, ...data };
      return updatedDetails;
    });
  };

  const handleDocumentsSubmit = (data) => {
    // Update the documentsData state
    setDocumentsData((prevData) => {
      const updatedData = { ...prevData, ...data };
      return updatedData;
    });
  };

  //API CALL FOR REGISTERING SHOP
  const { mutate } = useCustomMutate(
    "registerShop",
    async (data) => {
      const response = await axiosPrivate.post(
        `/api/register_shop/register/?userID=${auth.userID}`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    },
    [],
    {
      onError: (error) => {
        showAlert("error", error);
      },
      onMutate: () => {
        return <LoadingCircle />;
      },
      onSuccess: () => {
        showAlert("success", "Shop Registration Submitted Successfully");
        reset();
      },
    }
  );

  const onSubmit = async () => {
    const requestData = { ...ownerDetails };
    if (documentsData.BIR_COR instanceof File) {
      requestData.BIR_COR = documentsData.BIR_COR;
    }

    if (documentsData.DTI_COBNR instanceof File) {
      requestData.DTI_COBNR = documentsData.DTI_COBNR;
    }

    if (documentsData.DTI_Other instanceof File) {
      requestData.DTI_Other = documentsData.DTI_Other;
    }

    if (documentsData.gov_id_back instanceof File) {
      requestData.gov_id_back = documentsData.gov_id_back;
    }

    if (documentsData.gov_id_front instanceof File) {
      requestData.gov_id_front = documentsData.gov_id_front;
    }

    if (documentsData.products_list instanceof File) {
      requestData.products_list = documentsData.products_list;
    }

    mutate(requestData);
  };

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = async () => {
    const isOwnerDetailsFormValid = await trigger();
    if (isDirty && isOwnerDetailsFormValid) {
      if (activeStep === steps.length - 1) {
        // If it's the last step, await onSubmit before proceeding
        await onSubmit();
      }
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  //API CALL GET USER INFO

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

  const handleLogOut = async () => {
    await logout();
    navigate("/login");
  };

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
              <Alert severity="success">
                Your Shop Application is Submitted!
              </Alert>
              <Typography sx={{ mt: 2, mb: 1 }}>
                Please Wait for the Administrator's Response. You will be
                updated through your Mobile Phone Number:{" "}
                <b>{ownerDetails.phoneNumber}</b> and Email:
                <b>{ownerDetails.email}</b> in around 3-5 working days
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignSelf: "flex-end",
                  gap: 2,
                  "@media (max-width: 600px)": { alignSelf: "center" },
                }}
              >
                <Button
                  variant="contained"
                  startIcon={<Logout />}
                  onClick={handleLogOut}
                >
                  <Typography
                    variant="sectionTitleSmall"
                    sx={{ color: "inherit", fontSize: 16 }}
                  >
                    Logout
                  </Typography>
                </Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div>
                {activeStep === 0 ? (
                  <OwnerDetailsForm
                    control={control}
                    trigger={trigger}
                    getValues={getValues}
                    data={data}
                    onSubmit={handleOwnerDetailsSubmit}
                    handleBack={handleBack}
                    handleNext={handleNext}
                    activeStep={activeStep}
                  />
                ) : activeStep === 1 ? (
                  <DocumentsForm
                    control={control}
                    register={register}
                    setValue={setValue}
                    getValues={getValues}
                    onSubmit={handleDocumentsSubmit}
                    handleBack={handleBack}
                    handleNext={handleNext}
                    activeStep={activeStep}
                    showAlert={showAlert}
                  />
                ) : (
                  <ConfirmDetailsForm
                    ownerDetails={ownerDetails}
                    documentsData={documentsData}
                  />
                )}
              </div>

              {activeStep === steps.length - 1 && (
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
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    type="submit"
                  >
                    <Typography
                      variant="sectionTitleSmall"
                      sx={{ color: "inherit", fontSize: 16 }}
                    >
                      Finish
                    </Typography>
                  </Button>
                </Box>
              )}
            </React.Fragment>
          )}
        </Box>
      </form>

      {/*Display Alert */}
      <CustomAlert
        open={openAlert}
        setOpen={hideAlert}
        severity={severity}
        alertMsg={alertMsg}
      />
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
    maxWidth: 700,
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
