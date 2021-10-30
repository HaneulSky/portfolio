import React from "react";

const Contacts = () => {
    return (
        <div className="container d-flex flex-column justify-content-center">
            <ul className="list-group list-group-horizontal rounded m-auto">
                <li className="list-group-item border border-info">
                    <a href="https://github.com/HaneulSky">
                        <i className="bi bi-github"></i>
                    </a>
                </li>
                <li className="list-group-item  border border-info">
                    <a href="https://t.me/kotatiana">
                        <i className="bi bi-telegram"></i>
                    </a>
                </li>
                <li className="list-group-item  border border-info">
                    <i className="bi bi-envelope"></i> ko20tatiana@yandex.ru
                </li>
                <li className="list-group-item  border border-info">
                    <i className="bi bi-telephone"></i> 89213884024
                </li>
                <li className="list-group-item  border border-info">
                    <a
                        href="https://drive.google.com/file/d/1XG6DFFAscOX7GVtfcdKMz2zRGOq9Ibsg/view?usp=sharing"
                        role="button"
                        className="btn btn-light "
                    >
                        <i className="bi bi-cloud-arrow-down"></i> Мое резюме
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Contacts;
