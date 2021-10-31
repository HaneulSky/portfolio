import React from "react";
import myphoto from "../images/myphoto.jpg";

const About = () => {
    return (
        <div className="container h-100 mb-4">
            {" "}
            <div className="d-flex mb-4">
                <img
                    src={myphoto}
                    className="img-thumbnail rounded-circle w-25 h-25 flex-shrink-0"
                    alt="Мое фото"
                />
                <div className="flex-grow-1 ms-3">
                    {" "}
                    <h3>Об авторе</h3>
                    <p className="fst-normal">
                        Привет! Меня зовут Татьяна. Я начинающий фронтенд
                        разработчик.
                    </p>
                    <p className="fst-normal">
                        Несколько фактов обо мне:
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <i className="bi bi-house-door"></i> Живу в
                                Санкт-Петербурге
                            </li>
                            <li className="list-group-item">
                                <i className="bi bi-lightbulb"></i> Учусь
                                фронтенду
                            </li>
                            <li className="list-group-item">
                                <i className="bi bi-heart"></i> Люблю книги,
                                музыку и Реакт
                            </li>
                            <li className="list-group-item">
                                <i className="bi bi-people"></i> Владею
                                Корейским и Английским
                            </li>
                        </ul>
                    </p>
                </div>
            </div>
            <figure>
                <blockquote className="blockquote">
                    <p>
                        Многие жизненные неудачи случались с людьми, которые не
                        осознавали, насколько близки они были к успеху, когда
                        сдались.
                    </p>
                </blockquote>
                <figcaption className="blockquote-footer">
                    Томас А. Эдисон
                </figcaption>
            </figure>
        </div>
    );
};

export default About;
