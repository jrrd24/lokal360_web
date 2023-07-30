import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { TextField, IconButton } from "@mui/material";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";

const CustomInput = ({ control, name, rules = {}, label, secureTextEntry }) => {
  const [viewPass, setViewPass] = useState(true);

  const handleTogglePassword = () => {
    setViewPass(!viewPass);
  };

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
          variant="outlined"
          size="medium"
          InputProps={
            secureTextEntry && {
              endAdornment: (
                <IconButton onClick={handleTogglePassword} edge="end">
                  {viewPass ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              ),
            }
          }
          error={!!fieldState.error}
          helperText={fieldState.error ? fieldState.error.message : ""}
        />
      )}
    />
  );
};

export default CustomInput;
