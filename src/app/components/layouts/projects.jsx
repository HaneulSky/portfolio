import React from "react";
import mesto from "../images/mesto.jpg";
import travels from "../images/travels.jpg";

const Projects = () => {
    return (
        <div className="container d-flex flex-column justify-content-center">
            <div className="card-group">
                <div className="card shadow" style={{ width: 18 + "rem" }}>
                    <img
                        src={mesto}
                        className="card-img-top"
                        alt="картинка проекта"
                    />
                    <div className="card-body">
                        <p className="card-text">
                            Описание моего гениального проекта
                        </p>
                    </div>
                </div>
                <div className="card shadow" style={{ width: 18 + "rem" }}>
                    <img
                        src={travels}
                        className="card-img-top"
                        alt="картинка проекта"
                    />
                    <div className="card-body">
                        <p className="card-text">
                            Описание моего гениального проекта
                        </p>
                    </div>
                </div>
                <div className="card shadow" style={{ width: 18 + "rem" }}>
                    <img
                        src={travels}
                        className="card-img-top"
                        alt="картинка проекта"
                    />
                    <div className="card-body">
                        <p className="card-text">
                            Описание моего гениального проекта
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
