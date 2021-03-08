import React from "react";
import { TextField } from "@material-ui/core";

interface AppTextFieldProps {
  label: string;
  type: string;
  style: React.CSSProperties;
  error?: boolean;
  variant?: "filled" | "outlined" | "standard";
  other?: React.ReactNode;
}

const AppTextField: React.FC<AppTextFieldProps> = ({
  label,
  variant = "outlined",
  type,
  style,
  error,
  ...other
}) => {
  return (
    <div className='textField'>
      <TextField
        id={label}
        error={error}
        label={label}
        variant={variant}
        type={type}
        InputProps={{ style: style }}
        InputLabelProps={{ style: style }}
        className='textField__style'
        {...other}
      />
    </div>
  );
};

export default AppTextField;
