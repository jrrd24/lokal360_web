import React, { useState, useEffect } from "react";
import { Controller } from "react-hook-form";
import {
  TextField,
  IconButton,
  MenuItem,
  Box,
  InputAdornment,
} from "@mui/material";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";

const CustomInput = ({
  control,
  name,
  rules = {},
  label,
  secureTextEntry,
  sx,
  width,
  multiline,
  select,
  selectMenuItems,
  variant,
  value,
  component: icon,
}) => {
  const [viewPass, setViewPass] = useState(true);
  const [activeVariant, setActiveVariant] = useState("outlined");

  const handleTogglePassword = () => {
    setViewPass(!viewPass);
  };

  //Set Variant
  useEffect(() => {
    variant != null ? setActiveVariant(variant) : setActiveVariant("outlined");
  }, [variant]);

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={value || ""}
      render={({ field, fieldState }) => (
        <TextField
          name={name}
          label={label}
          type={secureTextEntry ? (viewPass ? "password" : "text") : "text"}
          value={field.value}
          onChange={field.onChange}
          onBlur={field.onBlur}
          variant={activeVariant}
          multiline={multiline}
          maxRows={multiline ? 4 : undefined}
          select={select}
          size={"medium"}
          InputProps={{
            ...(secureTextEntry && {
              endAdornment: (
                <IconButton onClick={handleTogglePassword} edge="end">
                  {viewPass ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              ),
            }),
            ...(icon
              ? {
                  startAdornment: (
                    <Box sx={{ pt: "4px" }}>
                      <InputAdornment position="start">
                        {React.createElement(icon, { sx: { fontSize: 20 } })}
                      </InputAdornment>
                    </Box>
                  ),
                  readOnly: false,
                }
              : {}),
          }}
          error={!!fieldState.error}
          helperText={fieldState.error ? fieldState.error.message : ""}
          sx={{ ...sx, width: width }}
        >
          {select
            ? selectMenuItems.map((option) => (
                <MenuItem
                  key={option.value}
                  value={option.value}
                  id={option.value}
                >
                  {option.label}
                </MenuItem>
              ))
            : ""}
        </TextField>
      )}
    />
  );
};

function ReadOnlyCustomInput({
  name,
  label,
  defaultValue,
  width,
  multiline,
  sx,
  component: Icon,
}) {
  return (
    <TextField
      key={name}
      name={name}
      label={label}
      variant="outlined"
      value={defaultValue || "- -"}
      multiline={multiline}
      maxRows={multiline ? 4 : undefined}
      InputProps={
        Icon
          ? {
              startAdornment: (
                <Box sx={{ pt: "4px" }}>
                  {" "}
                  {/* Add padding to the Box */}
                  <InputAdornment position="start">
                    <Icon sx={{ fontSize: 20 }} />
                  </InputAdornment>
                </Box>
              ),
              readOnly: true,
            }
          : { readOnly: true }
      }
      sx={{
        width: width,
        "& .MuiFilledInput-input": {
          paddingTop: multiline ? "8px" : "30px",
        },
        ...sx,
      }}
      InputLabelProps={{}}
    />
  );
}

export { CustomInput, ReadOnlyCustomInput };
