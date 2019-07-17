import React from 'react';
import { withFormik, Form, Field } from "formik";
const Form = () => {
    return (
        <Form>
            <Field type="text" name="name" placeholder="Enter your name" />
            <Field type="email" name="email" placeholder="Enter your email" />
            <Field type="password" name="password" placeholder="Enter your password" />
            <Field type="checkbox" name="tos" />
            <button>Submit</button>
        </Form>
    );
};

export default withFormik()(Form);