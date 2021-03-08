import React from "react";
import { Formik } from "formik";

interface AppFormProps {
  initialValues: React.MouseEvent<HTMLButtonElement, MouseEvent>;
  onSubmit: React.MouseEventHandler<HTMLButtonElement>;
  validationSchema: object;
}

const AppForm: React.FC<AppFormProps> = ({
  initialValues,
  onSubmit,
  validationSchema,
  children
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

export default AppForm;
