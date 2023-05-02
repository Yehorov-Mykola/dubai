import "./contact.scss";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Button from "../button/Button";
import useOutsideClick from "../../assets/hooks/useOutsideClick";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

function Contact() {
  const [t] = useTranslation(["translation"]);

  const SignupSchema = Yup.object().shape({
    name: Yup.string().min(2, t("contact.form.short")),
    email: Yup.string().min(6, t("contact.form.short")).required(t("contact.form.required")),
    message: Yup.string()
      .min(6, t("contact.form.short"))
      .required(t("contact.form.required")),
  }); 

  return (
    <section className="contact">
      <div className="container container--middle">
        <div className="contact__up">
          <h2 className="section-title">{t("contact.title")}</h2>
        </div>
      </div>
      <div className="contact__content">
        <div className="container">
          <div className="contact__map-wrapper">
            <iframe
              className="contact__map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57800.05312018313!2d55.140557493766835!3d25.118669107463557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b43c675c243%3A0x7dfdb7a273cf2c58!2zQWwgU3Vmb3VoIC0gRHViYWkgTWVkaWEgQ2l0eSAtINCU0YPQsdCw0ZcgLSDQntCxJ9GU0LTQvdCw0L3RliDQkNGA0LDQsdGB0YzQutGWINCV0LzRltGA0LDRgtC4!5e0!3m2!1suk!2sua!4v1682763526622!5m2!1suk!2sua"
              width="100%"
              height="770"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="map"
            ></iframe>
            <div className="map-info">
              <h3
                className="map-info__country"
                dangerouslySetInnerHTML={{ __html: t("contact.country") }}
              />
              <p className="map-info__adress">{t("contact.adress")}</p>
              <NavLink className="map-info__phone" to={t("contact.phoneLink")}>
                {t("contact.phone")}
              </NavLink>
              <div className="map-info__contact">
                {t("contact.contactItems", { returnObjects: true }).map(
                  (item, index) => (
                    <p
                      className="map-info__contact-item"
                      key={index}
                      dangerouslySetInnerHTML={{ __html: t(item) }}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <div className="container container--middle">
            <h3
              className="contact-form__title"
              dangerouslySetInnerHTML={{ __html: t("contact.form.title") }}
            ></h3>
            <Formik
              initialValues={{
                name: "",
                email: "",
                subject: "",
                message: "",
              }}
              validate={(data) => {
                const errors = {};
                if (/[0-9]/.test(data.name)) errors.name = t("contact.form.error");
                if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)
                )
                  errors.email = t("contact.form.error");
                return errors;
              }}
              validationSchema={SignupSchema}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {({ errors, touched }) => (
                <Form className="contact-form__items">
                  <div className="contact-form__items-up">
                    <label className="contact-form__label">
                      <Field
                        className={`contact-form__input ${
                          errors.name ? "contact-form__input--invalid" : ""
                        }`}
                        name="name"
                        type="text"
                        placeholder={t("contact.form.name")}
                      />
                      {errors.name && touched.name ? (
                        <div>{errors.name}</div>
                      ) : null}
                    </label>
                    <label className="contact-form__label">
                      <Field
                        className={`contact-form__input ${
                          errors.email ? "contact-form__input--invalid" : ""
                        }`}
                        name="email"
                        type="email"
                        placeholder={t("contact.form.email")}
                      />
                      {errors.email && touched.email ? (
                        <div>{errors.email}</div>
                      ) : null}
                    </label>
                    <label className="contact-form__label">
                      <Field
                        className="contact-form__input"
                        name="subject"
                        type="text"
                        placeholder={t("contact.form.subject")}
                      />
                    </label>
                  </div>
                  <label className="contact-form__label contact-form__label--text">
                    <Field
                      className="contact-form__input contact-form__input--textarea"
                      name="message"
                      type="text"
                      placeholder={t("contact.form.message")}
                      as="textarea"
                    />
                    {errors.message && touched.message ? (
                        <div>{errors.message}</div>
                      ) : null}
                  </label>
                  <Button submit>{t("contact.form.btn")}</Button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
