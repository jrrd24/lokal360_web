import React, { useState, useEffect } from "react";
import { Controller } from "react-hook-form";
import { TextField, IconButton } from "@mui/material";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";

const CustomInput = ({
  control,
  name,
  rules = {},
  label,
  secureTextEntry,
  sx,
  variant,
  readOnly,
  defaultValue,
}) => {
  const [viewPass, setViewPass] = useState(true);
  const [activeVariant, setActiveVariant] = useState("outlined");

  const handleTogglePassword = () => {
    setViewPass(!viewPass);
  };

  //Set Variant
  useEffect(() => {
    variant != null ? setActiveVariant(variant) : setActiveVariant("outlined");
  });

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => (
        <TextField
          label={label}
          type={secureTextEntry ? (viewPass ? "password" : "text") : "text"}
          value={field.value}
          onChange={field.onChange}
          onBlur={field.onBlur}
          variant={activeVariant}
          size="medium"
          InputProps={{
            readOnly: readOnly,
            ...(secureTextEntry && {
              endAdornment: (
                <IconButton onClick={handleTogglePassword} edge="end">
                  {viewPass ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              ),
            }),
          }}
          error={!!fieldState.error}
          helperText={fieldState.error ? fieldState.error.message : ""}
          sx={sx}
          defaultValue={defaultValue}
        />
      )}
    />
  );
};

export default CustomInput;
