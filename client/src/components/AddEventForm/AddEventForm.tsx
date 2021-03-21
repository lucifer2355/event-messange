import React from "react";
import * as Yup from "yup";

import {
  AppForm as Form,
  AppFormField as FormField,
  SubmitButton,
} from "../forms";

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .label("Title")
    .required(),
  message: Yup.string()
    .label("Message")
    .required(),
  phoneNoFrom: Yup.number().label("Phone No. From"),
  phoneNoTo: Yup.number().label("Phone No. To"),
});

const AddEventForm: React.FC = () => {
  return <div></div>;
};

export default AddEventForm;
