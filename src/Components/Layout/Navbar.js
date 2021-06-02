import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Functional Component:
const Navbar = ({ icon, title }) => {
   return (
      // Our Navbar:
      <nav className="navbar">
         {/* Github logo and title of out Project*/}
         <h1 className="Brand">
            <i className={icon} /> {title}
         </h1>

         {/* page link to Home and About*/}
         <ul className="links-wrapper">
            <li>
               <Link to="/G-Search" className="links">
                  Home
               </Link>
            </li>
            <li>
               <Link to="/G-Search/about" className="links">
                  About
               </Link>
            </li>
         </ul>
      </nav>
   );
};

// Default Props:
Navbar.defaultProps = {
   title: 'G-Search',
   icon: 'fab fa-github',
};

// PropTypes :
Navbar.propTypes = {
   title: PropTypes.string.isRequired,
   icon: PropTypes.string.isRequired,
};

export default Navbar;
