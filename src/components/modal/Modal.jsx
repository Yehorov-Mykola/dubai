import "./modal.scss";
import Button from "../button/Button";
import React, {useEffect} from "react";
import useOutsideClick from "../../assets/hooks/useOutsideClick";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
//import { CSSTransition } from "react-transition-group";
import { useTranslation } from "react-i18next";

function Modal({ onClose, opened }) {
  const { ref } = useOutsideClick(onClose);
  const [t] = useTranslation(["translation"]);

  const SignupSchema = Yup.object().shape({
    name: Yup.string().min(2, t("modal.short")).required(t("modal.required")),
    phone: Yup.string().min(6, t("modal.short")).required(t("modal.required")),
  });

  useEffect(() => {
    document.body.classList.add('no-scroll');
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  return (
    <>
      <div
        className="modal__wrapper">
        <div className="modal modal-box" ref={ref}>
          <h2 className="modal__title">{t("modal.title")}</h2>
          <p className="modal__subtitle">{t("modal.subtitle")}</p>

          <Formik
            initialValues={{
              name: "",
              phone: "",
            }}
            validate={(data) => {
              const errors = {};
              if (/[0-9]/.test(data.name)) errors.name = t("modal.error");
              return errors;
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              console.log(values);
              onClose();
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
                    placeholder={t("modal.namePlaceholder")}
                  />
                  {errors.name && touched.name ? (
                    <div>{errors.name}</div>
                  ) : null}
                </label>
                <label className="form__label">
                  <Field
                    className={`form__input ${
                      errors.phone ? "form__input--invalid" : ""
                    }`}
                    name="phone"
                    type="tel"
                    placeholder={t("modal.phonePlaceholder")}
                  />
                  {errors.phone && touched.phone ? (
                    <div>{errors.phone}</div>
                  ) : null}
                </label>
                <div className="modal__btn-wrapper">
                  <Button submit>{t("modal.btn")}</Button>
                </div>
              </Form>
            )}
          </Formik>
          <button className="modal__close" onClick={onClose}></button>
        </div>
      </div>
    </>
  );
}
export default Modal;
