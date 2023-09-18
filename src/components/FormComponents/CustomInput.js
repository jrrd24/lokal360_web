/*
* CUSTOM INPUT
* Contains the ff: CustomInput, ReadOnlyCustomInput, and CustomNumberInput
?       CustomInput: for any textfields or select (comboBox) in a form, also includes textfields with
?                    icon adornments, and multiline textFields
?       ReadOnlyCustomInput: display read-only information in textFields
?       CustomNumberInput: for textfields with Number/ Currency Inputs
* Reason for separating CustomInput and CustomNumberInput:
*       To avoid making CustomInput too complicated with extra conditional statements and props.
*       Also since NumericFormat is used instead of Text Field
*/

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
import { NumericFormat } from "react-number-format";

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
  value: propValue,
  setPromoType,
  component: icon,
}) => {
  const [viewPass, setViewPass] = useState(true);
  const [fieldValue, setFieldValue] = useState("");

  useEffect(() => {
    if (setPromoType) {
      setPromoType(fieldValue);
    }
  }, [fieldValue, setPromoType]);

  // Set 'fieldValue' to 'propValue' if it's defined
  useEffect(() => {
    setFieldValue(propValue || "");
  }, [propValue]);

  const handleTogglePassword = () => {
    setViewPass(!viewPass);
  };

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={propValue || ""}
      type=""
      render={({ field, fieldState }) => (
        <TextField
          name={name}
          label={label}
          type={secureTextEntry ? (viewPass ? "password" : "text") : "text"}
          value={fieldValue}
          onChange={
            setFieldValue
              ? (e) => {
                  field.onChange(e);
                  setFieldValue(e.target.value);
                }
              : field.onChange
          }
          onBlur={field.onBlur}
          variant={"outlined"}
          multiline={multiline}
          rows={multiline ? 4 : undefined}
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

const ReadOnlyCustomInput = ({
  name,
  label,
  defaultValue,
  width,
  multiline,
  sx,
  component: Icon,
}) => {
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
};

const CustomNumberInput = ({
  sx,
  control,
  name,
  rules,
  value: propValue,
  label,
  width,
  type,
  disabled,
}) => {
  const [fieldValue, setFieldValue] = useState(0);
  useEffect(() => {
    type === "Percent Discount"
      ? setFieldValue(propValue * 100)
      : setFieldValue(propValue || 0);
  }, [propValue]);
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={propValue}
      render={({ field, fieldState }) => (
        <NumericFormat
          name={name}
          label={label}
          customInput={TextField}
          displayType="input"
          thousandSeparator={true}
          value={fieldValue}
          onValueChange={(values) => {
            const { value } = values;
            field.onChange({
              target: {
                name: name,
                value: value,
              },
            });
          }}
          onBlur={field.onBlur}
          variant="outlined"
          size="medium"
          disabled={disabled}
          allowNegative={false} // Optional: Prevent negative values
          InputProps={{
            startAdornment:
              type === "Peso Discount" || type === "Free Shipping" ? (
                <InputAdornment position="start">₱</InputAdornment>
              ) : (
                ""
              ),
            endAdornment:
              type === "Percent Discount" ? (
                <InputAdornment position="start">%</InputAdornment>
              ) : (
                ""
              ),
          }}
          error={!!fieldState.error}
          helperText={fieldState.error ? fieldState.error.message : ""}
          sx={{ ...sx, width: width }}
        />
      )}
    />
  );
};

export { CustomInput, ReadOnlyCustomInput, CustomNumberInput };
