import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import {toast} from "react-hot-toast";
import {successToasterStyles} from "../../../../utils/utils.ts";


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);
  return (
    <div
      className={`app__navbar`}
    >
      <div className="app__navbar-container">
        <div className="app__navbar-logo">
          <Link
            to="/skillroutes"
            onClick={() => {
              setActiveLink("/skillroutes");
            }}
          >
            skillroutes
          </Link>
        </div>
        <div className="app__navbar-links">
          <Link
            to="/skillroutes"
            className={`app__navbar-links_item ${
              activeLink === "/skillroutes" ? "active" : ""
            }`}
            onClick={() => {
              setActiveLink("/skillroutes");
            }}
          >
            home
          </Link>
          <Link
            to="/skillroutes/roadmaps"
            className={`app__navbar-links_item ${
              activeLink === "/skillroutes/roadmaps" ? "active" : ""
            }`}
            onClick={() => {
              setActiveLink("/skillroutes/roadmaps");
            }}
          >
            roadmaps
          </Link>
            <a style={{cursor:"pointer"}}
              className={`app__navbar-links_item`}
              onClick={() => {
                toast.success('Will be available after release.',successToasterStyles)
              }}
            >
              profile
            </a>
        </div>
      </div>
      <div className="app__navbar-smallscreen">
        {toggleMenu ? (
          <RiCloseLine
            color="#ffffff"
            size={32}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <FiMenu
            color="#ffffff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="app__navbar-smallscreen_links slide-bottom">
            <Link
              to="/skillroutes"
              className={`app__navbar-smallscreen_links-item ${
                activeLink === "/skillroutes" ? "active" : ""
              }`}
              onClick={() => {
                setActiveLink("/skillroutes");
                setToggleMenu(false);
              }}
            >
              home
            </Link>
            <span></span>
            <Link
              to="/skillroutes/roadmaps"
              className={`app__navbar-smallscreen_links-item ${
                activeLink === "/roadmaps" ? "active" : ""
              }`}
              onClick={() => {
                setActiveLink("/skillroutes/roadmaps");
                setToggleMenu(false);
              }}
            >
              roadmaps
            </Link>
            <span></span>
              <a
                className={`app__navbar-smallscreen_links-item` }
                onClick={() => {
                  toast.success('Will be available after release.',successToasterStyles)
                  setToggleMenu(false);
                }}
              >
                profile
              </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
