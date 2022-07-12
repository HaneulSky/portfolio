import React from "react";
import contactsStyle from "./contacts.module.css";
// className="list-group list-group-horizontal rounded m-auto flex-wrap"

const Contacts = () => {
    return (
            <ul className={contactsStyle.contacts}>
                <li className={contactsStyle.contact}>
                    <a href="https://github.com/HaneulSky">
                        <i className="bi bi-github" style={{ fontSize: 1.5 + "rem" }}></i>
                    </a>
                </li>
                <li className={contactsStyle.contact}>
                    <a href="https://t.me/kotatiana">
                        <i className="bi bi-telegram" style={{ fontSize: 1.5 + "rem" }}></i>
                    </a>
                </li>
                <li className={contactsStyle.contact}>
                    <i className="bi bi-envelope"></i>{" "}
                    <a
                        href="mailto:ko20tatiana@yandex.ru"
                        role="button"
                        className="btn btn-light "
                    >
                        ko20tatiana@yandex.ru
                    </a>
                </li>
                <li className={contactsStyle.contact}>
                    <i className="bi bi-telephone"></i> <i className="bi bi-whatsapp"></i>  8(921)388-40-24
                </li>
                <li className={contactsStyle.contact}>
                    <a
                        href="https://drive.google.com/file/d/1vKcGXVWSyVItrNdRmxe33-dJ2DtxaKYN/view?usp=sharing"
                        role="button"
                        className="btn btn-light "
                    >
                        <i className="bi bi-cloud-arrow-down"></i> Мое резюме
                    </a>
                </li>
            </ul>
    );
};

export default Contacts;
