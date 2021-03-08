import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../AppButton/AppButton";

interface SubmitButtonProps {
  title: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ title }) => {
  const { handleSubmit } = useFormikContext();

  return <AppButton title={title} onClick={handleSubmit} />;
};

export default SubmitButton;
