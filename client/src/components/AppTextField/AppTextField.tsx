import React from "react";
import { TextField } from "@material-ui/core";

interface AppTextFieldProps {
  label: string;
  variant?: "filled" | "outlined" | "standard";
  type: string;
  style: React.CSSProperties;
}

const AppTextField: React.FC<AppTextFieldProps> = ({
  label,
  variant = "outlined",
  type,
  style
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
      />
    </div>
  );
};

export default AppTextField;
