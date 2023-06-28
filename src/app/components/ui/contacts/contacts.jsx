import React from "react";
import contactsStyle from "./contacts.module.css";
// className="list-group list-group-horizontal rounded m-auto flex-wrap"

const Contacts = () => {
    return (
        <ul className={contactsStyle.contacts}>
            <li className={contactsStyle.contact}>
                <a
                    href="https://github.com/HaneulSky"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i
                        className="bi bi-github"
                        style={{ fontSize: 1.5 + "rem" }}
                    ></i>
                </a>
            </li>
            <li className={contactsStyle.contact}>
                <a
                    href="https://t.me/kotatiana"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i
                        className="bi bi-telegram"
                        style={{ fontSize: 1.5 + "rem" }}
                    ></i>
                </a>
            </li>
            <li className={contactsStyle.contact}>
                <i className="bi bi-envelope"></i>{" "}
                <a
                    href="mailto:ko20tatiana@yandex.ru"
                    role="button"
                    className="btn btn-light "
                    target="_blank"
                    rel="noreferrer"
                >
                    ko20tatiana@yandex.ru
                </a>
            </li>
            <li className={contactsStyle.contact}>
                <i className="bi bi-telephone"></i>{" "}
                <i className="bi bi-whatsapp"></i> 8(921)388-40-24
            </li>
            <li className={contactsStyle.contact}>
                <a
                    href="https://drive.google.com/file/d/11tLL7SYF8Ggcmcx-9t7d0mXmf1wYshl9/view?usp=sharing"
                    role="button"
                    className="btn btn-light "
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="bi bi-cloud-arrow-down"></i> Мое резюме
                </a>
            </li>
        </ul>
    );
};

export default Contacts;
