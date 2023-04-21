import "./mailForm.scss";
import Button from "../button/Button";
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

function MailForm({ title, subtitle }) {
  return (
    <section className="mail-form">
      <div className="container">
        <p className="mail-form__subtitle">{subtitle}</p>
        <h2 className="mail-form__title">{title}</h2>
        <Formik
          initialValues={{
            email: "",
          }}
          validate={(data) => {
            const errors = {};
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email))
              errors.email = "Error: wrong email";
            return errors;
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className="mail-form__item">
              <label className="mail-form__label">
                <Field
                  className={`mail-form__input ${
                    errors.email ? "mail-form__input--invalid" : ""
                  }`}
                  name="email"
                  type="email"
                  placeholder="Enter your mail"
                />                
              </label>
              <Button blackBtn submit mailForm>
                Send
              </Button>
              {errors.email && touched.email ? (<div className="mail-form__error">{errors.email}</div>) : null}
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}
export default MailForm;
