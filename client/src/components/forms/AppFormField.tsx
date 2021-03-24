import React from "react";
import { useFormikContext } from "formik";

import AppTextField from "../AppTextField/AppTextField";

interface AppFormFieldProps {
  label?: string;
  name: string;
  type: string;
  variant?: "filled" | "outlined" | "standard";
  width?: number;
  multiline?: boolean;
  rows?: number;
  style?: any;
  other?: React.ReactNode;
}

const AppFormField: React.FC<AppFormFieldProps> = ({
  label,
  name,
  width,
  type,
  variant,
  rows,
  multiline,
  style,
  ...otherProps
}) => {
  const { setFieldValue, errors, values } = useFormikContext();
  const formValues: any = values;
  const formErrors: any = errors;

  return (
    <>
      <AppTextField
        error={formErrors[name]}
        label={label}
        name={name}
        type={type}
        variant={variant}
        multiline={multiline}
        rows={4}
        style={style}
        onChange={(text: any) => setFieldValue(name, text.target.value)}
        value={formValues[name]}
        {...otherProps}
      />
    </>
  );
};

export default AppFormField;
