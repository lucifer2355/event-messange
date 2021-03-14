import React from "react";
import { TextField } from "@material-ui/core";

interface AppTextFieldProps {
  label: string;
  name: string;
  type: string;
  style: React.CSSProperties;
  error?: boolean;
  variant?: "filled" | "outlined" | "standard";
  onChange?: any;
  value?: any;
  other?: any;
}

const AppTextField: React.FC<AppTextFieldProps> = ({
  label,
  name,
  variant = "outlined",
  type,
  style,
  error,
  onChange,
  value,
  ...other
}) => {
  return (
    <div className='textField'>
      <TextField
        id={label}
        error={error}
        label={label}
        name={name}
        variant={variant}
        type={type}
        onChange={onChange}
        value={value}
        InputProps={{ style: style }}
        InputLabelProps={{ style: style }}
        className='textField__style'
        {...other}
      />
    </div>
  );
};

export default AppTextField;
