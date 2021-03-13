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
  const { setFieldValue, errors, touched, values } = useFormikContext();
  const formValues: any = values;

  return (
    <>
      <AppTextField
        // error={errors.email}
        label={name}
        type='email'
        style={{ fontSize: "1.2rem" }}
        other={{
          name: "email",
          onChange: (text: any) => setFieldValue(name, text),
          value: formValues[name]
        }}
        {...otherProps}
      />
      {/* <AppTextField
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text: any) => setFieldValue(name, text)}
        value={values[name]}
        width={width}
        {...otherProps}
      /> */}
    </>
  );
};

export default AppFormField;
