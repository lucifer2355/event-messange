import React from "react";
import { TextField } from "@material-ui/core";

interface AppTextFieldProps {
  label: string;
  type: string;
  style: React.CSSProperties;
  variant?: "filled" | "outlined" | "standard";
  other?: React.ReactNode;
}

const AppTextField: React.FC<AppTextFieldProps> = ({
  label,
  variant = "outlined",
  type,
  style,
  ...other
}) => {
  return (
    <div className='textField'>
      <TextField
        id={label}
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
