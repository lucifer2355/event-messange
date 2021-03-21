import React from "react";
import * as Yup from "yup";

import {
  AppForm as Form,
  AppFormField as FormField,
  SubmitButton,
} from "../forms";
import { AddEventValues } from "../../store/addEvent/types";

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .label("Title")
    .required(),
  message: Yup.string()
    .label("Message")
    .required(),
  emailFrom: Yup.string()
    .email()
    .label("Email From"),
  emailTo: Yup.string()
    .email()
    .label("Email To"),
  phoneNoFrom: Yup.number().label("Phone No. From"),
  phoneNoTo: Yup.number().label("Phone No. To"),
  platforms: Yup.array().label("Platforms"),
});

const AddEventForm: React.FC = () => {
  const initialValue: AddEventValues = {
    title: "",
    message: "",
    emailFrom: "",
    emailTo: "",
    phoneNoFrom: null,
    phoneNoTo: null,
    platforms: [{ whatsApp: false }, { email: false }],
  };

  const handleSubmit: any = (values: AddEventValues) => {
    console.log("Add event values", values);
  };

  return (
    <div>
      <Form
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <FormField
          label='Title'
          name='title'
          type='text'
          style={{ fontSize: "1.2rem" }}
        />
        <FormField
          label='Message'
          name='message'
          type='text'
          style={{ fontSize: "1.2rem" }}
        />

        <SubmitButton title='Save' />
      </Form>
    </div>
  );
};

export default AddEventForm;
