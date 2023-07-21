import "./mailForm.scss";
import Button from "../button/Button";
import React, {useState} from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import i18n from "./../../_i18n/_i18n";
import { useTranslation } from "react-i18next";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

function MailForm({ title, subtitle }) {
  const [t] = useTranslation(["translation"]);
  const [submit, setSubmit] = useState(false);

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
              errors.email = t("mailForm.error");
            return errors;
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            console.log(values);
            setSubmit(true);
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
                  placeholder= {t("mailForm.placeholder")}
                />                
              </label>
              <Button blackBtn submit mailForm>
              {t("mailForm.btn")}
              </Button>
              {errors.email && touched.email ? (<div className="mail-form__error">{errors.email}</div>) : null}
              {submit &&  (<div className="mail-form__error">{t("mailForm.submit")}</div>)}
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}
export default MailForm;
