import './Project.css';
import React from "react";

interface ProjectProps {
    header: string;
    text: string;
    imgSrc: string;
    url: string;
}

const Project: React.FC<ProjectProps> = ({ header, text, imgSrc, url }) => {
    return (
        <div className="project__card reveal__left" onClick={() => window.location.href = url}>
            <div className="project__card__text">
                <h1>{header}</h1>
                <p>
                    {text.split('\n').map((item, index) => (
                        <React.Fragment key={index}>
                            {item}
                            {index < text.split('\n').length - 1 && <br />}
                        </React.Fragment>
                    ))}
                </p>
            </div>
            <div className="project__card__image" style={{ backgroundImage: `url(${imgSrc})` }}>
            </div>
        </div>
    );
};

export default Project;
