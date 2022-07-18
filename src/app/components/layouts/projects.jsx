import React from "react";
import mesto from "../images/mesto.jpg";
import travels from "../images/travels.jpg";
import newsExplorer from "../images/news-explorer.jpg";
import ProjectCard from "../ui/projectCard/projectCard";
import blog from "../images/blog.png";

const Projects = () => {
    return (
        <div className="container mb-4">
            <div className="card-group">
                <ProjectCard
                    image={blog}
                    alt="превью проекта my blog"
                    description="пока пустота"
                    link="https://github.com/HaneulSky/jfd-blog-client"
                    page="https://fanciful-meerkat-a0e71a.netlify.app/"
                >
                    <p>
                        Дипломный проект курсов Result school. Проект называется
                        &quot;Мой блог&quot;. Присутствует регистрация/вход пользователя,
                        возможность добавлять, удалять и редактировать статьи.
                        Все данные хранятся в базе данных MongoDB.
                    </p>
                    <p>P.S. Проект в стадии разработки! В планах: реализовать адаптив, добавить редактор текста, реализовать добавление картинок и видео.</p>
                    <p>
                        Стек технологий: ReactJS, Redux, NodeJS, MongoDB,
                        MaterialUI, Bootstrap, Heroku/Netlify
                    </p>
                </ProjectCard>
                <ProjectCard
                    image={newsExplorer}
                    alt="превью проекта news explorer"
                    description="пока пустота"
                    link="https://github.com/HaneulSky/finalproject"
                    page="https://haneulsky.github.io/finalproject/"
                >
                    <p>
                        Сервис по поиску новостей. Реализован поиск статей по ключевому слову за последние 7 дней.
                        Максимальное число статей - 100. Реализована кнопка &quot;показать еще&quot;, которая добавляет по 3 новости.
                        Есть страница статистики, на которой показано количество статей по ключевому слову за каждый день за последнюю неделю.
                        На странице &quot;О проекте&quot; есть блок с коммитами в репозитории, где лежит данный проект.
                        Слайдер реализован с помощью библиотеки Swiper. Для коммитов использован Github rest api.
                        Также сделан адаптив под разные размеры экранов, применен БЭМ.
                    </p>
                    <p>P.S. Проект в стадии разработки!</p>
                    <p>
                        Стек технологий: HTML, CSS, JS, Webpack, GIT
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
