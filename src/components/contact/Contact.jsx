import "./contact.scss";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

function Contact() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/localization/en.json").then(function (response) {
      setData(response.data);
    });
  }, []);

  return (
    <section className="contact">
      <div className="container container--middle">
        <div className="contact__up">
          <h2 className="section-title">Con</h2>
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
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="map"
            ></iframe>
            <div className="map-info">
              <h3 className="map-info__country">
                Dubai, <span className="map-info__country">UAE</span>
              </h3>
              <p className="map-info__adress">
                269 King Str, 05th Floor, Utral Hosue Building, Dubai, VIC 3000,
                UAE.
              </p>
              <NavLink class="map-info__phone" to="/">
                +99 (0) 344 956 4050
              </NavLink>
              <div className="map-info__contact">
                <p className="map-info__contact-title">
                  Email: <span>info@sparch.co</span>
                </p>
                <p className="map-info__contact-title">Follow us:</p>
                <p className="map-info__contact-title">
                  Email: <span>info@sparch.co</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
