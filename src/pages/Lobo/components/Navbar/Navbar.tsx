import { useState } from 'react';
import { images } from '../../constants';
import './Navbar.css';
import {successToasterStyles, toggleBodyOverflow} from '../../../../utils/utils.ts';
import { MdMenu, MdClose } from 'react-icons/md';
import toast from "react-hot-toast";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
    toggleBodyOverflow(toggleMenu);
  };

  return (
    <div className="navbar">
      <div className="navbar__container">
        <a>
          <img src={images.Logo} alt="Logo" className="navbar__container-logo" />
        </a>
        <div className="navbar__container-links">
          <a className="navbar__container-links_item">
            Institutions
          </a>
          <a onClick={()=> toast.success('Will be available after release.',successToasterStyles)}
            className="navbar__container-links_item">
            Profile
          </a>
        </div>
        <MdMenu onClick={handleToggleMenu} className="burger-button" />
      </div>
      {toggleMenu && (
        <div className="navbar__smallscreen">
          <MdClose onClick={handleToggleMenu} className="burger-button-close" />
          <div className="navbar__smallscreen-links">
            <a className="navbar__smallscreen-links_item" onClick={handleToggleMenu}>
              Institutions
            </a>

            <a
                  onClick={()=>{
                    toast.success('Will be available after release.',successToasterStyles)
                    handleToggleMenu()
                  }}
              className="navbar__smallscreen-links_item"
            >
              Profile
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
