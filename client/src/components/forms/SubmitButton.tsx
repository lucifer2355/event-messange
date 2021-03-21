import React from "react";
import { useFormikContext } from "formik";
import CircularProgress from "@material-ui/core/CircularProgress";

import AppButton from "../AppButton/AppButton";

interface SubmitButtonProps {
  title: string;
  isLoading: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ title, isLoading }) => {
  const { handleSubmit } = useFormikContext();

  return (
    <>
      {!isLoading && <AppButton title={title} onClick={handleSubmit} />}
      {isLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </div>
      )}
    </>
  );
};

export default SubmitButton;
