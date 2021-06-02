import React, { Fragment } from 'react';

const About = () => {
   return (
      <Fragment>
         <div className="about">
            <h1>About This App</h1>
            <p>App to Search Github Users</p>
            <p>Version 1.0.0</p>
            <h3>Created By Atul</h3>
            <p>
               View Project on my
               <strong>
                  <a href="https://github.com/parashar17-dev"> Github</a>
               </strong>
            </p>
            <a></a>
         </div>
      </Fragment>
   );
};

export default About;
