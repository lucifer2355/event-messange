import React from "react";
import { useFormikContext } from "formik";

import AppTextField from "../AppTextField/AppTextField";

interface AppFormFieldProps {
  name: string;
  type: string;
  width?: number;
  style?: React.CSSProperties;
  other?: React.ReactNode;
}

const AppFormField: React.FC<AppFormFieldProps> = ({
  name,
  width,
  type,
  style,
  ...otherProps
}) => {
  const { setFieldValue, errors, values } = useFormikContext();
  const formValues: any = values;
  const formErrors: any = errors;
  console.log("error", errors);

  return (
    <>
      <AppTextField
        error={formErrors[name]}
        label={name}
        type={type}
        style={{ fontSize: "1.2rem" }}
        other={{
          name: "email",
          onChange: (text: any) => setFieldValue(name, text),
          value: formValues[name]
        }}
        {...otherProps}
      />
    </>
  );
};

export default AppFormField;
