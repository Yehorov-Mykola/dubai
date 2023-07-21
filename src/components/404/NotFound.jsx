import "./notFound.scss";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Button from "../button/Button";
import {useMedia} from 'use-media';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

function NotFound() {

  return (
    <section className="contact">
      <div className="container container--middle">
        <div className="contact__up">
          <h2 className="section-title">404 Error</h2>
        </div>
      </div>
      <div className="contact__content">
        <div className="container">
        </div>
      </div>
    </section>
  );
}

export default NotFound;
