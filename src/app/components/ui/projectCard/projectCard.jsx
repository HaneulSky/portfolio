import React from "react";
import PropTypes from "prop-types";
import projectCardStyles from "./projectCard.module.css";

const ProjectCard = ({ image, alt, children, link, page }) => {
    const cardClasses = `card shadow ${projectCardStyles.card}`;
    return (
        <div className={cardClasses}>
            <img
                src={image}
                className="card-img-top"
                alt={alt}
                style={{ maxWidth: 100 + "%", height: 150 + "px" }}
            />
            <div className="card-body d-flex flex-column">
                <div className={projectCardStyles.text}>{children}</div>
                <div className="align-self-end mt-auto">
                    <a
                        href={page}
                        title="Посмотреть сайт"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i
                            className="bi bi-box-arrow-up-left"
                            style={{ fontSize: 30 + "px" }}
                        ></i>
                    </a>{" "}
                    <a
                        href={link}
                        title="Посмотреть код проекта"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i
                            className="bi bi-github"
                            style={{ fontSize: 30 + "px" }}
                        ></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

ProjectCard.propTypes = {
    image: PropTypes.string,
    alt: PropTypes.string,
    children: PropTypes.array,
    link: PropTypes.string,
    page: PropTypes.string
};

export default ProjectCard;
