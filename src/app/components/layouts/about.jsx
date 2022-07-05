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
                        Приветствую! Меня зовут Татьяна. Я начинающий фронтенд
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
                    <p className="fst-normal">
                        В последние годы я работала по другой специальности. Я решила сменить профессию,
                        потому что считаю, что работа должна приносить удовольствие.
                        Для того, чтобы сменить профессию я решила пойти на курсы &quot;Яндекс практикум&quot;, где
                        изучила основы разработки и на курсы школы Владилена Минина &quot;Result School&quot; для укрепления знаний и
                        изучения новых технологий.
                        Мне интересно направление frontend разработки, потому что сразу можно видеть результат
                        на экране.
                    </p>
                    <p className="fst-normal"> Остались вопросы? Свяжитесь со мной любым удобным способом: </p>
                </div>
            </div>

        </div>
    );
};

export default About;
