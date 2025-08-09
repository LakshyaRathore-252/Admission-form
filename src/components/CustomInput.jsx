import React, { memo } from "react";
import {
  Box,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
  FormLabel,
  FormControl,
} from "@mui/material";
import { FastField } from "formik";

const CustomInput = ({
  label ="",
  labelSx = {},
  labelVariant = "body2",
  labelWeight = "bold",
  inputSx = {},
  height = 40,
  width = "100%",
  fullWidth = false,
  fontWeight = "normal",
  FontSize = "14px",
  size = "small",
  required = false,
  variant = "outlined",
  type = "text",
  TextLabel = "",
  options = [],
  name,
  ...rest
}) => {
  if (!name) {
    console.error("CustomInput: 'name' prop is required for Formik FastField binding.");
    return null;
  }

  return (
    <FastField name={name}>
      {({ field, meta, form }) => {
        const showError = meta.touched && Boolean(meta.error);
        const helperText = meta.touched ? meta.error : "";

        const commonLabel = (
          <Typography
            variant={labelVariant}
            fontWeight={labelWeight}
            sx={{ mb: 0.5, ...labelSx }}
          >
            {label} {required && <span style={{ color: "red" }}>*</span>}
          </Typography>
        );

        return (
          <Box sx={{ width }}>
            {label && type !== "radio" && type !== "checkbox" && commonLabel}

            {type === "checkbox" && (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={!!field.value}
                    onChange={(e) => form.setFieldValue(name, e.target.checked)}
                    {...rest}
                  />
                }
                label={label}
              />
            )}

            {type === "radio" && (
              <FormControl error={showError}>
                {label && <FormLabel>{label}</FormLabel>}
                <RadioGroup
                  row
                  value={field.value || ""}
                  onChange={(e) => form.setFieldValue(name, e.target.value)}
                  {...rest}
                >
                  {options?.map((opt, i) => (
                    <FormControlLabel
                      key={i}
                      value={typeof opt === "string" ? opt : opt.value}
                      control={<Radio />}
                      label={typeof opt === "string" ? opt : opt.label}
                    />
                  ))}
                </RadioGroup>
                {showError && <Typography variant="caption" color="error">{helperText}</Typography>}
              </FormControl>
            )}

            {(type !== "radio" && type !== "checkbox") && (
              <TextField
                {...field}
                type={type}
                variant={variant}
                label={TextLabel}
                size={size}
                fullWidth={fullWidth}
                required={required}
                error={showError}
                helperText={showError ? helperText : rest.helperText}
                sx={{
                  width: fullWidth ? "100%" : width ? width : { xs: "100%", sm: "200px", md: "250px" },
                  "& .MuiInputBase-root": {
                    height,
                  },
                  ...inputSx,
                }}
                {...rest}
              />
            )}
          </Box>
        );
      }}
    </FastField>
  );
};

export default memo(CustomInput);
