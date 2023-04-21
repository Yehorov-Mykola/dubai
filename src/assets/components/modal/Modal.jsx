import "./modal.scss";
import Button from "../button/Button";
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  phone: Yup.string()
    .min(6, "Too Short!")
    .max(15, "Too Long!")
    .required("Required"),
});

function Modal() {
  const [closedBtn, setClosedBtn] = useState(true);

  return (
    <>
      {closedBtn && (
        <div
          className={`modal__wrapper`}
        >
          <div className="modal">
            <h2 className="modal__title">Leave your contacts</h2>
            <p className="modal__subtitle">
              we will contact you within three hours
            </p>

            <Formik
              initialValues={{
                name: "",
                phone: "",
              }}
              validate={(data) => {
                const errors = {};
                if (/[0-9]/.test(data.name)) errors.name = "Error: wrong name";
                return errors;
              }}
              validationSchema={SignupSchema}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {({ errors, touched }) => (
                <Form className="form">
                  <label className="form__label">
                    <Field
                      className={`form__input ${
                        errors.name ? "form__input--invalid" : ""
                      }`}
                      name="name"
                      type="text"
                      placeholder="Name"
                    />
                    {errors.name && touched.name ? (
                      <div>{errors.name}</div>
                    ) : null}
                  </label>
                  <label className="form__label">
                    <Field
                      className={`form__input ${
                        errors.email ? "form__input--invalid" : ""
                      }`}
                      name="phone"
                      type="tel"
                      placeholder="Phone"
                    />
                    {errors.phone && touched.phone ? (
                      <div>{errors.phone}</div>
                    ) : null}
                  </label>
                  <Button submit>Send</Button>
                </Form>
              )}
            </Formik>
            <button
              className="modal__close"
              onClick={() => setClosedBtn((prev) => !prev)}>                
            </button>
          </div>
        </div>
      )}
    </>
  );
}
export default Modal;
