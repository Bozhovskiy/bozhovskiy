import React from "react";
import images from "../../constants/images.js";
import './Filter.css'

const Filter = ({
  isFilterOpen,
  isRatingDropdownOpen,
  toggleRatingDropdown,
  ratingFilters,
  handleRatingChange,
  isDiffDropdownOpen,
  toggleDiffDropdown,
  difficultyFilters,
  handleDifficultyChange,
  isCategoryDropdownOpen,
  toggleCategoryDropdown,
  categoryFilters,
  handleCategoryChange,
  isTimeDropdownOpen,
  toggleTimeDropdown,
  timeFilters,
  handleTimeChange,
}) => {
  return (
    <div className={`app__roadmaps-filter ${isFilterOpen ? "open" : ""}`}>
      <div className="app__roadmaps-filter_container">
        <div className="app__roadmaps-filter_rating">
          <button
            onClick={toggleRatingDropdown}
            className={isRatingDropdownOpen ? "active" : ""}
          >
            Rating <img src={images.ArrowDownFilter} alt="ArrowDownFilter" />
          </button>
          <div
            className={`app__roadmaps-filter_rating-dropdown ${
              isRatingDropdownOpen ? "open" : ""
            }`}
          >
            <div className="app__roadmaps-filter_rating-dropdown_wrapper">
              <label>
                &lt;1
                <input
                  type="checkbox"
                  value="<1"
                  onChange={handleRatingChange}
                  checked={ratingFilters.includes("<1")}
                />
              </label>
            </div>
            <div className="app__roadmaps-filter_rating-dropdown_wrapper">
              <label>
                1-2
                <input
                  type="checkbox"
                  value="1-2"
                  onChange={handleRatingChange}
                  checked={ratingFilters.includes("1-2")}
                />
              </label>
            </div>
            <div className="app__roadmaps-filter_rating-dropdown_wrapper">
              <label>
                2-3
                <input
                  type="checkbox"
                  value="2-3"
                  onChange={handleRatingChange}
                  checked={ratingFilters.includes("2-3")}
                />
              </label>
            </div>
            <div className="app__roadmaps-filter_rating-dropdown_wrapper">
              <label>
                3-4
                <input
                  type="checkbox"
                  value="3-4"
                  onChange={handleRatingChange}
                  checked={ratingFilters.includes("3-4")}
                />
              </label>
            </div>
            <div className="app__roadmaps-filter_rating-dropdown_wrapper">
              <label>
                &gt;4
                <input
                  type="checkbox"
                  value=">4"
                  onChange={handleRatingChange}
                  checked={ratingFilters.includes(">4")}
                />
              </label>
            </div>
          </div>
        </div>
        <div className="app__roadmaps-filter_difficulty">
          <button
            onClick={toggleDiffDropdown}
            className={isDiffDropdownOpen ? "active" : ""}
          >
            Difficulty{" "}
            <img src={images.ArrowDownFilter} alt="ArrowDownFilter" />
          </button>

          <div
            className={`app__roadmaps-filter_difficulty-dropdown ${
              isDiffDropdownOpen ? "open" : ""
            }`}
          >
            <div className="app__roadmaps-filter_difficulty-dropdown_wrapper">
              <label>
                Easy
                <input
                  type="checkbox"
                  value="Easy"
                  onChange={handleDifficultyChange}
                  checked={difficultyFilters.includes("Easy")}
                />
              </label>
            </div>
            <div className="app__roadmaps-filter_difficulty-dropdown_wrapper">
              <label>
                Normal
                <input
                  type="checkbox"
                  value="Normal"
                  onChange={handleDifficultyChange}
                  checked={difficultyFilters.includes("Normal")}
                />
              </label>
            </div>
            <div className="app__roadmaps-filter_difficulty-dropdown_wrapper">
              <label>
                Hard
                <input
                  type="checkbox"
                  value="Hard"
                  onChange={handleDifficultyChange}
                  checked={difficultyFilters.includes("Hard")}
                />
              </label>
            </div>
          </div>
        </div>
        <div className="app__roadmaps-filter_category">
          <button
            onClick={toggleCategoryDropdown}
            className={isCategoryDropdownOpen ? "active" : ""}
          >
            Category <img src={images.ArrowDownFilter} alt="ArrowDownFilter" />
          </button>
          <div
            className={`app__roadmaps-filter_category-dropdown ${
              isCategoryDropdownOpen ? "open" : ""
            }`}
          >
            <div className="app__roadmaps-filter_category-dropdown_wrapper">
              <label>
                Frontend
                <input
                  type="checkbox"
                  value="Frontend"
                  onChange={handleCategoryChange}
                  checked={categoryFilters.includes("Frontend")}
                />
              </label>
            </div>
            <div className="app__roadmaps-filter_category-dropdown_wrapper">
              <label>
                Backend
                <input
                  type="checkbox"
                  value="Backend"
                  onChange={handleCategoryChange}
                  checked={categoryFilters.includes("Backend")}
                />
              </label>
            </div>
            <div className="app__roadmaps-filter_category-dropdown_wrapper">
              <label>
                DevOps
                <input
                  type="checkbox"
                  value="DevOps"
                  onChange={handleCategoryChange}
                  checked={categoryFilters.includes("DevOps")}
                />
              </label>
            </div>
            <div className="app__roadmaps-filter_category-dropdown_wrapper">
              <label>
                Android
                <input
                  type="checkbox"
                  value="Android"
                  onChange={handleCategoryChange}
                  checked={categoryFilters.includes("Android")}
                />
              </label>
            </div>
            <div className="app__roadmaps-filter_category-dropdown_wrapper">
              <label>
                Computer Science
                <input
                  type="checkbox"
                  value="Computer Science"
                  onChange={handleCategoryChange}
                  checked={categoryFilters.includes("Computer Science")}
                />
              </label>
            </div>
            <div className="app__roadmaps-filter_category-dropdown_wrapper">
              <label>
                Data Science
                <input
                  type="checkbox"
                  value="Data Science"
                  onChange={handleCategoryChange}
                  checked={categoryFilters.includes("Data Science")}
                />
              </label>
            </div>
            <div className="app__roadmaps-filter_category-dropdown_wrapper">
              <label>
                UI/UX Design
                <input
                  type="checkbox"
                  value="UI/UX Design"
                  onChange={handleCategoryChange}
                  checked={categoryFilters.includes("UI/UX Design")}
                />
              </label>
            </div>
          </div>
        </div>
        <div className="app__roadmaps-filter_time">
          <button
            onClick={toggleTimeDropdown}
            className={isTimeDropdownOpen ? "active" : ""}
          >
            Estimated time{" "}
            <img src={images.ArrowDownFilter} alt="ArrowDownFilter" />
          </button>
          <div
            className={`app__roadmaps-filter_time-dropdown ${
              isTimeDropdownOpen ? "open" : ""
            }`}
          >
            <div className="app__roadmaps-filter_time-dropdown_wrapper">
              <label>
                &lt;24h
                <input
                  type="checkbox"
                  value="<24"
                  onChange={handleTimeChange}
                  checked={timeFilters.includes("<24")}
                />
              </label>
            </div>
            <div className="app__roadmaps-filter_time-dropdown_wrapper">
              <label>
                24h-48h
                <input
                  type="checkbox"
                  value="24-48"
                  onChange={handleTimeChange}
                  checked={timeFilters.includes("24-48")}
                />
              </label>
            </div>
            <div className="app__roadmaps-filter_time-dropdown_wrapper">
              <label>
                48h-72h
                <input
                  type="checkbox"
                  value="48-72"
                  onChange={handleTimeChange}
                  checked={timeFilters.includes("48-72")}
                />
              </label>
            </div>
            <div className="app__roadmaps-filter_time-dropdown_wrapper">
              <label>
                &gt;72h
                <input
                  type="checkbox"
                  value=">72"
                  onChange={handleTimeChange}
                  checked={timeFilters.includes(">72")}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
