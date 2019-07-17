import React from 'react';
import { withFormik, Form, Field } from "formik";
const UserForm = () => {
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

export default withFormik({
    mapPropsToValues({name, email, password, tos}){
        return {
            name: name || "",
            email: email || "",
            password: password || "",
            tos: tos || ""
        }
    },
    handleSubmit(values){
        console.log(values);
    }
})(UserForm);