import React from "react";
import { useFormikContext } from "formik";

import AppTextField from "../AppTextField/AppTextField";

interface AppFormFieldProps {
  label: string;
  name: string;
  type: string;
  width?: number;
  style?: React.CSSProperties;
  other?: React.ReactNode;
}

const AppFormField: React.FC<AppFormFieldProps> = ({
  label,
  name,
  width,
  type,
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
        style={{ fontSize: "1.2rem" }}
        onChange={(text: any) => setFieldValue(name, text.target.value)}
        value={formValues[name]}
        {...otherProps}
      />
    </>
  );
};

export default AppFormField;
