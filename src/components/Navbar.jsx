import React, { useState } from 'react';
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCog, faComment, faEnvelope, faMusic, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
const Nav = () => {
  const [isOpen,SetState] = useState(false);
  function toggleMenu() {
    SetState(!isOpen);
  }
    return(
        <nav className="nav" >
          <div className="navi">
            <a href="#"><FontAwesomeIcon icon={faUser} className="icons"/>      Profile</a>
          </div>
          <div className="navi"> 
             <a href="#"><FontAwesomeIcon icon={faEnvelope} className="icons"/>      Messages</a>
          </div>
           <div className="navi">
             <a href="#"><FontAwesomeIcon icon={faNewspaper} className="icons"/>    News</a>
          </div>
          <div className="navi">
             <a href="#"><FontAwesomeIcon icon={faMusic} className="icons"/>    Music</a>
          </div>
          <div className="navi">
            <a href="#"><FontAwesomeIcon icon={faCog} className="icons"/>    Settings</a>
          </div>
      </nav>
    )
}
export default Nav;