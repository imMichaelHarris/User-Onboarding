import React from "react";
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
      name: Yup.string().min(3, "Name must be at least 3 characters").required(),
      email: Yup.string().email().required(),
      password: Yup.string().min(8).required(),
      tos: Yup.bool()
  }),

  handleSubmit(values) {
    console.log(values);
  }
})(UserForm);
