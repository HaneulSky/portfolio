import React from "react";
import mesto from "../images/mesto.jpg";
import travels from "../images/travels.jpg";
import fastCompany from "../images/fast-company.jpg";
import ProjectCard from "../ui/projectCard";

const Projects = () => {
    return (
        <div className="container mb-4">
            <div className="card-group">
                <ProjectCard
                    image={fastCompany}
                    alt="превью проекта fast-company"
                    description="пока пустота"
                    link="https://github.com/HaneulSky/fast-company/"
                    page="https://haneulsky.github.io/fast-company/"
                >
                    <p>
                        Сервис, позволяющий найти компанию (учебный проект на
                        реакте). Список пользователей получается из fake api,
                        есть фильтрация по профессиям, настроена сортировка по
                        всем столбцам кроме профессий. У каждого пользователя
                        есть отдельная страница, есть возможность
                        отредактировать пользователя, добавить комментарий.
                        Также присутствуют формы входа/регистрации.
                    </p>
                    <p>P.S. Проект в стадии разработки!</p>
                    <p>
                        Стек технологий: HTML, CSS, JS, React.JS, Webpack, GIT
                    </p>
                </ProjectCard>
                <ProjectCard
                    image={mesto}
                    alt="превью проекта место"
                    description="пока пустота"
                    link="https://github.com/HaneulSky/project11"
                    page="https://haneulsky.github.io/project11/"
                >
                    <p>
                        Учебный проект, применен БЭМ, семантическая верстка,
                        сделан адаптив. Фотографии получаются с сервера. Можно
                        добавить новую фотографию, удалить старую или поставить
                        лайк. Также можно отредактировать имя и профессию
                        автора.
                    </p>
                    <p>Стек технологий: HTML, CSS, JS, Webpack, GIT</p>
                </ProjectCard>
                <ProjectCard
                    image={travels}
                    alt="превью проекта путешествия по России"
                    description="пока пустота"
                    link="https://github.com/HaneulSky/project4"
                    page="https://haneulsky.github.io/project4/"
                >
                    <p>
                        Учебный проект, применен БЭМ, семантическая верстка,
                        сделан адаптив
                    </p>
                    <p>Стек технологий: HTML, CSS, Webpack, GIT</p>
                </ProjectCard>
            </div>
        </div>
    );
};

export default Projects;
