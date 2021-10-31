import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div
            className="container shadow mb-4"
            style={{ backgroundColor: "white", opacity: 0.5 }}
        >
            <ul className="nav navbar navbar-light">
                {" "}
                <li className="nav-item">
                    <Link className="nav-link" to="/">
                        Обо мне
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/projects">
                        Мои проекты
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contacts">
                        Контакты
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;
