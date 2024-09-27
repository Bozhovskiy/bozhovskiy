import React, { useEffect, useRef, useState } from "react";
import "./Roadmap.css";
import { roadmapId } from "../api.js";
import { useParams } from "react-router-dom";
import images from "../constants/images.js";
import {AlertRoadmap, Loader, Navbar, Review} from "../components";
import useResizer from "../constants/isMobile.js";

const Roadmap = () => {
    const [reviewOpen, setReviewOpen] = useState(false);
    const [roadmap, setRoadmap] = useState(null); // Initialize as null to check if loaded
    const [isLoading, setIsLoading] = useState(true);
    const [alert, setAlert] = useState([]); // Initialize with an empty array
    const [done, setDone] = useState(
        localStorage.getItem("done") ? JSON.parse(localStorage.getItem("done")) : []
    );
    const [isSave, setIsSave] = useState(false);
    const [windowHeight, setWindowHeight] = useState(1000);
    const isMobile = useResizer();
    const middleRef = useRef(null);
    const { id } = useParams();

    // Fetch roadmap data
    const fetchRoadmaps = async () => {
        try {
            const data = await roadmapId(id);
            setRoadmap(data);
            const alertArray = data.blocks.map((block) =>
                Array.from({ length: block.components.length }, () => false)
            );
            setAlert(alertArray);
            if (localStorage.getItem("done")) {
                setDone(JSON.parse(localStorage.getItem("done")));
            }
        } catch (error) {
            console.error("Error fetching roadmap:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchRoadmaps().then();
    }, []);

    // Update done items in local storage
    const setDoneStorage = (componentId) => {
        setDone((prevDone) => {
            const updatedDone = prevDone.includes(componentId)
                ? prevDone.filter((id) => id !== componentId)
                : [...prevDone, componentId];
            localStorage.setItem("done", JSON.stringify(updatedDone));
            return updatedDone;
        });
    };

    // Handle window resize
    const handleSizeChange = () => {
        setWindowHeight(window.innerHeight);
    };

    useEffect(() => {
        if (middleRef.current) {
            setWindowHeight(middleRef.current.getBoundingClientRect().height);
        }
        window.addEventListener("resize", handleSizeChange);
        return () => {
            window.removeEventListener("resize", handleSizeChange);
        };
    }, [windowHeight]);

    // Handle save roadmap
    const saveRoad = () => {
        setIsSave((prevSave) => !prevSave);
    };

    // Handle alert changes
    const handleAlertChange = (blockIndex, componentIndex, bool) => {
        console.log(blockIndex)
        console.log(componentIndex)
        console.log(bool)
        setAlert((prevState) =>
            prevState.map((alertRow, rowIndex) =>
                rowIndex === blockIndex
                    ? alertRow.map(
                        (alertValue, valueIndex) => valueIndex === componentIndex && bool
                    )
                    : alertRow.map(() => false)
            )
        );
    };
    console.log(alert)

    if (isLoading) {
        return (
            <div className="loading-screen">
                <Loader />
            </div>
        );
    }

    return (<>
        <Navbar/>
        <div className="roadmapId" style={isMobile ? { overflowX: "hidden" } : {}}>
            {reviewOpen && (
                <Review setOpen={setReviewOpen} />
            )}
            <div className="roadmapId__navbar" />
            <div className="roadmapId__middle" ref={middleRef}>
                {roadmap && (
                    <div className="roadmapId__middle__centered">
                        <div className="roadmapId__middle__centered__header">
                            <div className="roadmapId__middle__centered__cat">
                                <img src={roadmap.cat.ico} alt="icon" />
                                {roadmap.cat.title}
                            </div>
                            <div className="roadmapId__middle__centered__profile">
                                <img src={images.Profile} alt="icon" />
                                {roadmap.user}
                            </div>
                        </div>
                        <div className="roadmapId__middle__centered__title">
                            {roadmap.title}
                        </div>
                        <div className="roadmapId__middle__centered__description">
                            {roadmap.description}
                        </div>
                        <div className="roadmapId__middle__centered__footer">
                            <div className="roadmapId__middle__centered__footer__hours">
                                <p>
                                    {roadmap.difficulty || "Beginner"}
                                </p>
                                <span></span>
                                <p>~{roadmap.estimated_hours}h</p>
                            </div>
                            <div className="roadmapId__middle__centered__footer__rating">
                                <div className="save_roadmap-plsDontlag" onClick={saveRoad}>
                                    {isSave ? (
                                        <img src={images.Saved} alt="EyeIcon" />
                                    ) : (
                                        <img src={images.Save} alt="EyeIcon" />
                                    )}
                                    {isSave ? "Saved" : "Save"}
                                </div>
                                <span></span>
                                <img
                                    src={images.StarIcon}
                                    alt="StarIcon"
                                    onClick={() => setReviewOpen(true)}
                                />
                                <p onClick={() => setReviewOpen(true)}>
                                    {roadmap.average_rating} / 5
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div
                className="roadmapId__blocks_menu"
                style={isMobile ? { marginTop: 350, height: "auto", width: "100vw", overflowX: "hidden" } : {}}
            >
                {roadmap?.blocks?.map((block, index) => (
                    <div
                        className="roadmapId__block"
                        style={isMobile ? { width: "100%", marginTop: 30 } : {}}
                        key={block.id}
                    >
                        <div className="roadmapId__block__header">{block.title}</div>
                        <div className="roadmapId__block__description">
                            {block.description}
                        </div>

                        {block.components.length > 0 && (
                            <>
                                <progress
                                    max={block.components.length}
                                    value={block.components.filter((c) => done.includes(c.id)).length}
                                ></progress>
                                <span className="span__progress">
                  {Math.floor(
                      (block.components.filter((c) => done.includes(c.id)).length /
                          block.components.length) *
                      100
                  ) + "%"}
                </span>
                                <div className="roadmapId__component">
                                    Components
                                    {block.components.map((component, m) => (
                                        <React.Fragment key={component.id}>
                                            {alert[index]?.[m] && (
                                                <AlertRoadmap
                                                    index={index}
                                                    m={m}
                                                    handleAlert={handleAlertChange}
                                                    component={component}
                                                />
                                            )}
                                            <div
                                                className={"roadmapId__component__info"}
                                                onClick={() => handleAlertChange(index, m, true)}
                                            >
                        <span
                            style={
                                done.includes(component.id)
                                    ? { textDecoration: "line-through" }
                                    : {}
                            }
                        >
                          {component.title.length > 35
                              ? component.title.slice(0, 35) + "..."
                              : component.title}
                        </span>
                                                <img
                                                    src={
                                                        done.includes(component.id)
                                                            ? images.Complete
                                                            : images.UnComplete
                                                    }
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setDoneStorage(component.id);
                                                    }}
                                                    alt="Complete"
                                                    className="roadmapId__block--img"
                                                />
                                            </div>
                                        </React.Fragment>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default Roadmap;
