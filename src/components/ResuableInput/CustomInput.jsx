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

// Helper for label rendering
const RenderLabel = ({ label, required, variant, weight, sx }) =>
  label ? (
    <Typography
      variant={variant}
      fontWeight={weight}
      sx={{ mb: 0.5, ...sx }}
    >
      {label}
      {required && <span style={{ color: "red" }}>*</span>}
    </Typography>
  ) : null;

// Helper for radio/checkbox options
const getOptionProps = (opt) =>
  typeof opt === "string"
    ? { value: opt, label: opt }
    : { value: opt.value, label: opt.label };

const CustomInput = memo(({
  label = "",
  labelSx = {},
  labelVariant = "body2",
  labelWeight = "bold",
  inputSx = {},
  height = 40,
  width = "100%",
  fullWidth = false,
  fontWeight = "normal",
  FontSize = "14px", // Not used in original, but kept for compatibility
  size = "small",
  required = false,
  variant = "outlined",
  type = "text",
  TextLabel = "",
  options = [],
  name,
  inputMode,
  ...rest
}) => {
  if (!name) {
    console.error("CustomInput: 'name' prop is required for Formik FastField binding.");
    return null;
  }

  // Input sanitization based on inputMode
  const sanitizeValue = (value) => {
    if (inputMode === "numericOnly") return value.replace(/[^0-9]/g, "");
    if (inputMode === "alphaOnly") return value.replace(/[^a-zA-Z\s]/g, "");
    return value;
  };

  return (
    <FastField name={name}>
      {({ field, meta, form }) => {
        const showError = meta.touched && Boolean(meta.error);
        const helperText = meta.touched ? meta.error : rest.helperText;

        // Main input switch
        let inputNode;
        if (type === "checkbox") {
          inputNode = (
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
          );
        } else if (type === "radio") {
          inputNode = (
            <FormControl error={showError}>
              <RenderLabel
                label={label}
                required={required}
                variant={labelVariant}
                weight={labelWeight}
                sx={labelSx}
              />
              <RadioGroup
                row
                value={field.value || ""}
                onChange={(e) => form.setFieldValue(name, e.target.value)}
                {...rest}
              >
                {options.map((opt, i) => {
                  const { value, label } = getOptionProps(opt);
                  return (
                    <FormControlLabel
                      key={value + i}
                      value={value}
                      control={<Radio />}
                      label={label}
                    />
                  );
                })}
              </RadioGroup>
              {showError && (
                <Typography variant="caption" color="error">
                  {helperText}
                </Typography>
              )}
            </FormControl>
          );
        } else {
          inputNode = (
            <TextField
              {...field}
              type={type}
              variant={variant}
              label={TextLabel}
              size={size}
              fullWidth={fullWidth}
              required={required}
              error={showError}
              helperText={helperText}
              sx={{
                width: fullWidth ? "100%" : width,
                "& .MuiInputBase-root": { height },
                ...inputSx,
              }}
              onChange={(e) => {
                form.setFieldValue(name, sanitizeValue(e.target.value));
              }}
              {...rest}
            />
          );
        }

        return (
          <Box sx={{ width }}>
            {(label && type !== "radio" && type !== "checkbox") && (
              <RenderLabel
                label={label}
                required={required}
                variant={labelVariant}
                weight={labelWeight}
                sx={labelSx}
              />
            )}
            {inputNode}
          </Box>
        );
      }}
    </FastField>
  );
});

export default CustomInput;