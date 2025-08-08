import React from "react";
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

const CustomInput = ({
  label,
  labelSx = {},
  labelVariant = "body2",
  labelWeight = "bold",
  inputSx = {},
  height = 40,
  width = "100%",
  fullWidth = false,
  fontWeight = "normal",
  FontSize="14px",
  size = "small",
  required = false,
  variant = "outlined",
  type = "text",
  TextLabel = "",
  options = [], // for radio buttons
  value,
  onChange,
  ...rest
}) => {
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
      {/* Show label for all input types */}
      {label && type !== "radio" && type !== "checkbox" && commonLabel}

      {/* Handle different input types */}
      {type === "checkbox" && (
        <FormControlLabel
          control={
            <Checkbox
              checked={!!value} // force boolean
              onChange={(e) => {
                if (onChange) {
                  onChange({
                    target: {
                      name: rest.name,
                      value: e.target.checked ? (rest.value ?? true) : false,
                    },
                  });
                }
              }}
              {...rest}
            />
          }
          label={label}
        />
      )}


      {type === "radio" && (
        <FormControl>
          {label && <FormLabel>{label}</FormLabel>}
          <RadioGroup row value={value} onChange={onChange} {...rest}>
            {options?.map((opt, i) => (
              <FormControlLabel
                key={i}
                value={typeof opt === 'string' ? opt : opt.value}
                control={<Radio />}
                label={typeof opt === 'string' ? opt : opt.label}
              />
            ))}
          </RadioGroup>
        </FormControl>
      )}


      {(type !== "radio" && type !== "checkbox") && (
        <TextField
          type={type}
          variant={variant}
          label={TextLabel}
          size={size}
          width={width}
          fullWidth={fullWidth}
          required={required}
          value={value}
          onChange={onChange}
          sx={{
            width: fullWidth
              ? "100%"
              : width
                ? width
                : { xs: "100%", sm: "200px", md: "250px" },
            '& .MuiInputBase-root': {
              height,
            },
            ...inputSx,
          }}

          {...rest}
        />
      )}
    </Box>
  );
};

export default CustomInput;
