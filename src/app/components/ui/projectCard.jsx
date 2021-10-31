import React from "react";
import PropTypes from "prop-types";

const ProjectCard = ({ image, alt, children, link, page }) => {
    return (
        <div className="card shadow" style={{ width: 18 + "rem" }}>
            <img src={image} className="card-img-top" alt={alt} />
            <div className="card-body d-flex flex-column">
                <p className="card-text align-self-start">{children}</p>
                <div className="align-self-end mt-auto">
                    <a href={page}>
                        <i className="bi bi-info-circle-fill"></i>
                    </a>{" "}
                    <a href={link}>
                        <i className="bi bi-github"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

ProjectCard.propTypes = {
    image: PropTypes.string,
    alt: PropTypes.string,
    children: PropTypes.string,
    link: PropTypes.string,
    page: PropTypes.string
};

export default ProjectCard;
