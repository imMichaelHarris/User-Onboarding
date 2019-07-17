import React from "react";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
const UserForm = ({ errors, touched }) => {
  return (
    <Form className="user-form">
        <legend>User Form</legend>
      <label>
        Name
        <Field autoComplete="off"type="text" name="name" placeholder="Enter your name" />
        {touched.name && errors.name && <p>{errors.name}</p>}
      </label>
      <label>
        Email
        <Field type="email" name="email" placeholder="Enter your email" />
      </label>
      <label>Password
        <Field
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        {touched.password && errors.password && <p>{errors.password}</p>}
      </label>
      <label htmlFor="">
        I've read and accept the Terms of Service
        <Field type="checkbox" name="tos" />
        {touched.tos && errors.tos && <p>{errors.tos}</p>}
      </label>
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
      tos: tos || null
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(18, "Password cannot be longer than 18 characters")
      .required(),
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string()
      .min(8, "Password must be at lease 8 characters")
      .required(),
    tos: Yup.bool()
      .nullable()
      .required("You must accept the terms of service")
  }),

  handleSubmit(values) {
    console.log(values);
    console.log(values.tos);
    axios
      .post("https://reqres.in/api/users", values)
      .then(res => {
        console.log(res);
        window.alert(`${res.data.name} was created successfully!`);
      })
      .catch(err => console.log(err.response));
  }
})(UserForm);
