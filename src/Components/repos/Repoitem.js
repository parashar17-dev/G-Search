import React from 'react';

function Repoitem({ repo }) {
   return (
      <div className="repo general-info-wrapper">
         <h3>
            <a href={repo.html_url}>{repo.name}</a>
         </h3>
      </div>
   );
}

export default Repoitem;
