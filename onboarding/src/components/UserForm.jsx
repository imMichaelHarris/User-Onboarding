import React from "react";
import axios from 'axios';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
const UserForm = ({errors, touched}) => {
  return (
    <Form>
      <Field type="text" name="name" placeholder="Enter your name" />
      {touched.name && errors.name && <p>{errors.name}</p>}
      <Field type="email" name="email" placeholder="Enter your email" />
      <Field
        type="password"
        name="password"
        placeholder="Enter your password"
      />
      {touched.password && errors.password && <p>{errors.password}</p>}
      <Field type="checkbox" name="tos" />
      <button>Submit</button>
    </Form>
  );
};

export default withFormik({
  mapPropsToValues({ name, email, password, tos }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      tos: tos || ""
    };
  },

  validationSchema: Yup.object().shape({
      name: Yup.string().min(3, "Name must be at least 3 characters").max(18, "Password cannot be longer than 18 characters").required(),
      email: Yup.string().email().required(),
      password: Yup.string().min(8, "Password must be at lease 8 characters").required(),
      tos: Yup.bool()
  }),

  handleSubmit(values) {
    console.log(values);
  }
})(UserForm);
