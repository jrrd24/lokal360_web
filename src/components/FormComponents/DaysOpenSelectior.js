import React from "react";
import { Controller } from "react-hook-form";
import { FormControlLabel, Checkbox, FormGroup, Grid } from "@mui/material";

function DaysOpenSelector({ name, control, label, days, width }) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={days}
      render={({ field }) => (
        <FormGroup style={{ width: width }}>
          <p>{label}</p>
          <Grid container spacing={0}>
            {Object.keys(field.value).map((day) => (
              <Grid key={day} item xs={6}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name={name}
                      checked={field.value[day]}
                      onChange={(e) => {
                        const updatedDays = {
                          ...field.value,
                          [day]: e.target.checked,
                        };
                        field.onChange(updatedDays);
                      }}
                    />
                  }
                  label={day}
                />
              </Grid>
            ))}
          </Grid>
        </FormGroup>
      )}
    />
  );
}

export default DaysOpenSelector;
