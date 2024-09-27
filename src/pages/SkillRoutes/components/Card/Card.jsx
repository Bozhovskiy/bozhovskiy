import React from "react";
import "./Card.css";
import images from "../../constants/images";

const Card = ({ data }) => {
  console.log(data)
  const { cat, user, average_rating, title, difficulty, estimated_hours } =
    data;


  const textColor =
    cat.title === "Machine Learning"
      ? "#8A30E5"
      : cat.title === "UI/UX Design"
      ? "#30A4E5"
      : cat.title === "Backend"
      ? "#E5A730"
      : cat.title === "Android"
      ? "#E53030"
      : cat.title === "Data Science"
      ? "#E130E5"
      : "#304DE5";

  const categoryClass =
    cat.title === "Computer Science"
      ? "category-cs"
      : cat.title === "UI/UX Design"
      ? "category-ui"
      : cat.title === "Backend"
      ? "category-be"
      : cat.title === "Android"
      ? "category-android"
      : cat.title === "DevOps"
      ? "category-devops"
      : cat.title === "Data Science"
      ? "category-ds"
      : "category-fe";

  const shortenedTitle = title.length > 70 ? title.slice(0, 70) + "..." : title;
  return (
    <div
      className={`app__card ${categoryClass}`}
    >
      <div className="app__card-category">
        <div className="app__card-category-logo">
          <img src={cat.ico} alt="LogoImage" />
        </div>
        <p style={{ color: textColor }}>{cat.title}</p>
      </div>
      <div className="app__card-user">
        <img src={images.Profile} alt="UserImage" />
        <p>{user}</p>
      </div>
      <div className="app__card-info">
        <p>{shortenedTitle}</p>
      </div>
      <div className="app__card-difficulty">
        <p>{difficulty}</p>
        <span></span>
        <p>~{estimated_hours}h</p>
        <img src={images.StarIcon} alt="StarIcon" />
        <p>{average_rating}</p>
      </div>
      <span></span>
      <div className="app__card__button">GO TO ROADMAP</div>
    </div>
  );
};

export default Card;
