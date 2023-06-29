import React from "react";
import myphoto from "../../images/myphoto.jpg";
import aboutStyles from "./about.module.css";

const About = () => {
    const photoStyles = `rounded-circle flex-shrink-0 ${aboutStyles.photo}`;
    const containerStyles = `d-flex mb-4 ${aboutStyles.container}`;
    const stacklItemStyles = `badge rounded-pill bg-success ${aboutStyles.item}`;
    const stack = [
        "HTML5",
        "CSS3",
        "TypeScript",
        "JavaScript(ES6, ES5)",
        "Vue",
        "Vuex",
        "React",
        "Redux",
        "БЭМ",
        "Bootstrap",
        "MaterialUI",
        "MongoDB",
        "Webpack",
        "GIT",
        "NodeJs"
    ];
    return (
        <div className="container h-100 mb-4">
            {" "}
            <div className={containerStyles}>
                <img src={myphoto} className={photoStyles} alt="Мое фото" />
                <div className="flex-grow-1 ms-3">
                    {" "}
                    <h3>Об авторе</h3>
                    <p className="fst-normal" style={{ fontSize: 1 + "rem" }}>
                        Приветствую! Меня зовут Татьяна. Я фронтенд разработчик.
                    </p>
                    <p className="fst-normal">Несколько фактов обо мне:</p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <i className="bi bi-house-door"></i> Живу в
                            Санкт-Петербурге
                        </li>
                        <li className="list-group-item">
                            <i className="bi bi-lightbulb"></i> Учусь фронтенду
                        </li>
                        <li className="list-group-item">
                            <i className="bi bi-heart"></i> Люблю книги, музыку
                            и Фронтенд
                        </li>
                        <li className="list-group-item">
                            <i className="bi bi-people"></i> Владею
                            Корейским(TOPIK II) и Английским(A2)
                        </li>
                    </ul>
                    <div className={aboutStyles.stack}>
                        <h5>Мой стэк:</h5>
                        {stack.map((item) => (
                            <span className={stacklItemStyles} key={item}>
                                {item}
                            </span>
                        ))}
                    </div>
                    <p className="fst-normal">
                        Сейчас работаю в компании, где разрабатываю проекты в
                        команде из 8 человек, используя Vue/Vuex/TypeScript.
                    </p>
                    <p className="fst-normal">
                        Предпочитаю делать сложные и интересные задачи, т.к.
                        хочу развиваться как разработчик.(понимаю, что бывают и
                        односложные задачи - куда уж без этого). Для изучения
                        технологий я читаю книги (напр. &quot;Выразительный
                        JavaScript&quot;, &quot;Грокаем алгоритмы&quot; и др.),
                        читаю статьи на хабре, смотрю обучающие видео на
                        ютуб(напр. ulbiTV, Владилен Минин, АйТи Синяк и др.),
                        решаю задачи на codewars и leetcode.
                    </p>
                    <p className="fst-normal">
                        {" "}
                        Остались вопросы? Свяжитесь со мной любым удобным
                        способом:{" "}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
