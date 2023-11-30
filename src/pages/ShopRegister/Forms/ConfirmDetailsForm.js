import {
  Alert,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { ReadOnlyCustomInput } from "../../../components/FormComponents/CustomInput";
import { ReadOnlyPhoneNumberPicker } from "../../../components/FormComponents/CustomPhoneNumberPicker";
import { Phone } from "@mui/icons-material";
import { ProductsCategory } from "../../../utils/MapSelectMenuItems";

function ConfirmDetailsForm({ ownerDetails, documentsData }) {
  const isMaxWidth = useMediaQuery("(max-width:600px)");
  const labels = [
    "DTI Certificate of Business Name Registration",
    "Other DTI Form",
    "BIR Certificate of Registration",
    "Valid Government Issued ID (Front)",
    "Valid Government Issued ID (Back)",
    "Store Products / Menu",
  ];

  return (
    <div>
      {" "}
      <Stack spacing={5}>
        {/*Owner Info */}
        <Stack spacing={3}>
          <Typography variant="sectionTitleSmall">Owner Information</Typography>

          <Stack
            direction={isMaxWidth ? "column" : "row"}
            spacing={3}
            sx={{ minWidth: "100%" }}
          >
            <ReadOnlyCustomInput
              name="firstName"
              label="First Name"
              defaultValue={ownerDetails.firstName}
              width={isMaxWidth ? "100%" : "48%"}
            />

            <ReadOnlyCustomInput
              name="lastName"
              label="Last Name"
              defaultValue={ownerDetails.lastName}
              width={isMaxWidth ? "100%" : "48%"}
            />
          </Stack>

          <Stack
            direction={isMaxWidth ? "column" : "row"}
            spacing={3}
            sx={{ minWidth: "100%" }}
          >
            <ReadOnlyCustomInput
              name="email"
              label="Email"
              defaultValue={ownerDetails.email}
              width={isMaxWidth ? "100%" : "48%"}
            />

            <ReadOnlyPhoneNumberPicker
              label="Phone Number"
              value={ownerDetails.phoneNumber}
              width="48%"
              component={Phone}
            />
          </Stack>
        </Stack>

        <Divider />

        {/*Shop Info */}
        <Stack spacing={3}>
          <Typography variant="sectionTitleSmall">Shop Details</Typography>

          <ReadOnlyCustomInput
            name="shopName"
            label="Shop Name"
            defaultValue={ownerDetails.shopName}
            width="100%"
          />
          <Stack
            direction={isMaxWidth ? "column" : "row"}
            spacing={3}
            sx={{ minWidth: "100%" }}
          >
            <ReadOnlyCustomInput
              name="shopType"
              label="Shop Type"
              defaultValue={ownerDetails.shopType}
              width={isMaxWidth ? "100%" : "48%"}
            />

            <ReadOnlyCustomInput
              name="productsCategory"
              label="Products Category"
              defaultValue={ownerDetails.productsCategory}
              select
              selectMenuItems={ProductsCategory()}
              width="48%"
            />
          </Stack>
        </Stack>

        <Divider />
        {/* Place to display images */}
        <Stack spacing={3} sx={{ textAlign: "left" }}>
          <Typography variant="sectionTitleSmall">Images</Typography>

          {Object.entries(documentsData).map(([key, file], index) => (
            <div key={index}>
              <Typography variant="body2">{labels[index] || key}</Typography>
              {file && file.type && file.type.startsWith("image/") ? (
                <img
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  style={{ maxWidth: "100%" }}
                />
              ) : (
                <Alert severity="error">
                  No File Uploaded or Invalid File Type
                </Alert>
              )}
            </div>
          ))}
        </Stack>
      </Stack>
    </div>
  );
}

export default ConfirmDetailsForm;
