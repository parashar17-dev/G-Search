import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

// Functional Component:
const Useritem = ({ user: { login, avatar_url } }) => {
   return (
      <div className="useritems">
         {/* image of the person on github */}
         <img src={avatar_url} alt="My Image" className="image" />

         {/* Name of the User */}
         <h5 className="login">{login}</h5>

         {/* Link to his profile */}
         <Link to={`/G-Search/user/${login}`} className="html_url">
            <button className="btn">More</button>
         </Link>
      </div>
   );
};

// PropTypes :
Useritem.propTypes = {
   user: Proptypes.object.isRequired,
};
export default Useritem;
