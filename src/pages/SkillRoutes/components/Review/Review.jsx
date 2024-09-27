import { useState } from "react";
import images from "../../constants/images";
import "./Review.css";
import { toast } from "react-hot-toast";

const Review = ({ setOpen }) => {
  const [currentRating, setCurrentRating] = useState(1);

  const handleStarClick = (rating) => {
    setCurrentRating(rating);
  };

  const handleReviewRoadmap = async () => {
      toast.success("API will work in a full version:)", {
        style: {
          border: "1px solid #000000",
          padding: "16px",
          color: "#000000",
          fontFamily: "Open Sans",
        },
      });
    setOpen(false);
  };

  const handleModalClick = (e) => {
    if (e.target.classList.contains("review")) {
      setOpen(false);
    }
  };
  return (
    <div className="review" onClick={handleModalClick}>
      <div className="review__container" onClick={(e) => e.stopPropagation()}>
        <div className="close-review">
          <img
            src={images.CrossIcon}
            alt="CrossIcon"
            onClick={() => setOpen(false)}
          />
        </div>
        <div className="wrjtwryjteyjet">
          <h1>Rate this roadmap</h1>
          <div className="stars">
            {Array.from({ length: 5 }, (_, index) => (
              <img
                key={index}
                onClick={() => handleStarClick(index + 1)}
                src={index < currentRating ? images.Star : images.EmptyStar}
                alt="star"
              />
            ))}
          </div>
        </div>
        <div
          className="roadmapId__middle__button gaelkrgjhea"
          onClick={handleReviewRoadmap}
        >
          Rate
        </div>
      </div>
    </div>
  );
};

export default Review;
