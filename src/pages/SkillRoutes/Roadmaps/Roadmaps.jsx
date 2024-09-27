import React, {useState, useEffect} from "react";
import "./Roadmaps.css";
import {CardLoader, Searchbar, Card, Filter, Navbar, Footer} from '../components';
import images from "../constants/images";
import {roadmapListApi} from "../api.js";
import {Link} from "react-router-dom";

const Roadmaps = () => {
    const [baseRoadmap, setRoadmap] = useState([]);
    const [roadmaps, setRoadmaps] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("By Rating");
    const [searchValue, setSearchValue] = useState("");

    const [isDiffDropdownOpen, setIsDiffDropdownOpen] = useState(false);
    const [isRatingDropdownOpen, setIsRatingDropdownOpen] = useState(false);
    const [isTimeDropdownOpen, setIsTimeDropdownOpen] = useState(false);
    const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
    // --------------------------------------------------------
    const [ratingFilters, setRatingFilters] = useState([]);
    const [difficultyFilters, setDifficultyFilters] = useState([]);
    const [categoryFilters, setCategoryFilters] = useState([]);
    const [timeFilters, setTimeFilters] = useState([]);
    const [roadmapLength, setLength] = useState(0);

    const handleSearch = (e) => {
        setSearchValue(e);
    };
    useEffect(() => {
        const fetchRoadmaps = async () => {
            const data = await roadmapListApi();
            setRoadmap(data);
            setRoadmaps(data);
            setIsLoading(false);
            setLength(data.length);
        };
        fetchRoadmaps().then();
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleDiffDropdown = () => {
        setIsDiffDropdownOpen(!isDiffDropdownOpen);
    };

    const toggleRatingDropdown = () => {
        setIsRatingDropdownOpen(!isRatingDropdownOpen);
    };

    const toggleTimeDropdown = () => {
        setIsTimeDropdownOpen(!isTimeDropdownOpen);
    };

    const toggleCategoryDropdown = () => {
        setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
    };

    const toggleFilter = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsDropdownOpen(false);
    };

    // -----------------------------------------------------------------------------
    const handleRatingChange = (event) => {
        const value = event.target.value;
        if (event.target.checked) {
            setRatingFilters([...ratingFilters, value]);
        } else {
            setRatingFilters(ratingFilters.filter((filter) => filter !== value));
        }
    };

    const handleDifficultyChange = (event) => {
        const value = event.target.value;
        if (event.target.checked) {
            setDifficultyFilters([...difficultyFilters, value]);
        } else {
            setDifficultyFilters(
                difficultyFilters.filter((filter) => filter !== value)
            );
        }
    };

    const handleCategoryChange = (event) => {
        const value = event.target.value;
        if (event.target.checked) {
            setCategoryFilters([...categoryFilters, value]);
        } else {
            setCategoryFilters(categoryFilters.filter((filter) => filter !== value));
        }
    };

    const handleTimeChange = (event) => {
        const value = event.target.value;
        if (event.target.checked) {
            setTimeFilters([...timeFilters, value]);
        } else {
            setTimeFilters(timeFilters.filter((filter) => filter !== value));
        }
    };

    useEffect(() => {
        let filteredRoadmaps = baseRoadmap;
        if (ratingFilters.length > 0) {
            filteredRoadmaps = filteredRoadmaps.filter((roadmap) => {
                for (const filter of ratingFilters) {
                    switch (filter) {
                        case "<1":
                            if (roadmap.average_rating < 1) return true;
                            break;
                        case "1-2":
                            if (roadmap.average_rating >= 1 && roadmap.average_rating < 2)
                                return true;
                            break;
                        case "2-3":
                            if (roadmap.average_rating >= 2 && roadmap.average_rating < 3)
                                return true;
                            break;
                        case "3-4":
                            if (roadmap.average_rating >= 3 && roadmap.average_rating < 4)
                                return true;
                            break;
                        case ">4":
                            if (roadmap.average_rating >= 4) return true;
                            break;
                    }
                }
                return false;
            });
        }
        if (difficultyFilters.length > 0) {
            filteredRoadmaps = filteredRoadmaps.filter((roadmap) =>
                difficultyFilters.includes(roadmap.difficulty)
            );
        }
        if (categoryFilters.length > 0) {
            filteredRoadmaps = filteredRoadmaps.filter((roadmap) =>
                categoryFilters.includes(roadmap.cat.title)
            );
        }
        if (timeFilters.length > 0) {
            filteredRoadmaps = filteredRoadmaps.filter((roadmap) => {
                for (const filter of timeFilters) {
                    switch (filter) {
                        case "<24":
                            if (roadmap.estimated_hours < 24) return true;
                            break;
                        case "24-48":
                            if (roadmap.estimated_hours >= 24 && roadmap.estimated_hours < 48)
                                return true;
                            break;
                        case "48-72":
                            if (roadmap.estimated_hours >= 48 && roadmap.estimated_hours < 72)
                                return true;
                            break;
                        case ">72":
                            if (roadmap.estimated_hours >= 72) return true;
                            break;
                    }
                }
                return false;
            });
        }
        if (searchValue) {
            filteredRoadmaps = filteredRoadmaps.filter((roadmap) => {
                const title = roadmap.title.toLowerCase();
                const description = roadmap.description.toLowerCase();
                const search = searchValue.toLowerCase();
                return title.includes(search) || description.includes(search);
            });
        }
        switch (selectedOption) {
            case "By Rating":
                filteredRoadmaps.sort((a, b) => b.average_rating - a.average_rating);
                break;
            case "By Time":
                filteredRoadmaps.sort((a, b) => b.estimated_hours - a.estimated_hours);
                break;
            case "By Difficulty":
                filteredRoadmaps.sort((a, b) => {
                    const difficulties = ["Easy", "Normal", "Hard"];
                    const difficultyA = difficulties.indexOf(a.difficulty);
                    const difficultyB = difficulties.indexOf(b.difficulty);
                    return difficultyA - difficultyB;
                });
                break;
        }
        setLength(filteredRoadmaps.length);
        setRoadmaps([...filteredRoadmaps]);
    }, [
        searchValue,
        timeFilters,
        categoryFilters,
        difficultyFilters,
        ratingFilters,
        selectedOption,
    ]);

    const handleClearFilters = () => {
        setRatingFilters([]);
        setDifficultyFilters([]);
        setCategoryFilters([]);
        setTimeFilters([]);

        setIsDiffDropdownOpen(false);
        setIsRatingDropdownOpen(false);
        setIsTimeDropdownOpen(false);
        setIsCategoryDropdownOpen(false);
        setIsFilterOpen(false);
    };

    return (<>
            <Navbar/>
            <div className="app__roadmaps">
                <div className="app__roadmaps-searchbar">
                    <Searchbar value={searchValue} handleSearch={handleSearch}/>
                    <div className="app__roadmaps-searchbar_filters">
                        <p
                            className={`${isFilterOpen ? "open" : ""}`}
                            onClick={handleClearFilters}
                        >
                            Clear filters <img src={images.CrossIcon} alt="CrossIcon"/>
                        </p>
                        <button onClick={toggleFilter}>
                            Filters <img src={images.FilterIcon} alt="FilterIcon"/>
                        </button>
                    </div>
                </div>
                <Filter
                    isFilterOpen={isFilterOpen}
                    toggleFilter={toggleFilter}
                    isRatingDropdownOpen={isRatingDropdownOpen}
                    toggleRatingDropdown={toggleRatingDropdown}
                    ratingFilters={ratingFilters}
                    handleRatingChange={handleRatingChange}
                    isDiffDropdownOpen={isDiffDropdownOpen}
                    toggleDiffDropdown={toggleDiffDropdown}
                    difficultyFilters={difficultyFilters}
                    handleDifficultyChange={handleDifficultyChange}
                    isCategoryDropdownOpen={isCategoryDropdownOpen}
                    toggleCategoryDropdown={toggleCategoryDropdown}
                    categoryFilters={categoryFilters}
                    handleCategoryChange={handleCategoryChange}
                    isTimeDropdownOpen={isTimeDropdownOpen}
                    toggleTimeDropdown={toggleTimeDropdown}
                    timeFilters={timeFilters}
                    handleTimeChange={handleTimeChange}
                    handleClearFilters={handleClearFilters}
                />
                <div className="app__roadmaps-cards">
                    <div className="app__roadmaps-cards_container">
                        <div className="app__roadmaps-cards_info">
                            <p>{roadmapLength} results</p>
                            <div className="dropdown">
                                <button onClick={toggleDropdown}>
                                    {selectedOption}{" "}
                                    <img src={images.ArrowDownFilter} alt="ArrowDownFilter"/>
                                </button>
                                <div className={`dropdown-sort ${isDropdownOpen ? "open" : ""}`}>
                                    <div
                                        className="dropdown-sort-wrapper"
                                        onClick={() => handleOptionClick("By Rating")}
                                    >
                                        <p>By Rating</p>
                                    </div>
                                    <div
                                        className="dropdown-sort-wrapper"
                                        onClick={() => handleOptionClick("By Difficulty")}
                                    >
                                        <p>By Difficulty</p>
                                    </div>
                                    <div
                                        className="dropdown-sort-wrapper"
                                        onClick={() => handleOptionClick("By Time")}
                                    >
                                        <p>By Time</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="app__main-roadmaps_cards">
                            {isLoading ? (
                                Array.from({length: 12}, (_, index) => (
                                    <CardLoader key={index}/>
                                ))
                            ) : roadmaps.length === 0 ? (
                                <h1 className="not-found">No roadmaps found...</h1>
                            ) : (
                                <>
                                    {roadmaps.map((roadmap) => (
                                        <Link to={`/skillroutes/roadmap/${roadmap.id}`} key={roadmap.id}>
                                            <Card key={roadmap.id} data={roadmap}/>
                                        </Link>
                                    ))}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
          <Footer className="foooter" />
        </>
    );
};

export default Roadmaps;
