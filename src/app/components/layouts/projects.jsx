import React from "react";
import mesto from "../images/mesto.jpg";
import travels from "../images/travels.jpg";
import ProjectCard from "../ui/projectCard";

const Projects = () => {
    return (
        <div className="container mb-4">
            <div className="card-group">
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
