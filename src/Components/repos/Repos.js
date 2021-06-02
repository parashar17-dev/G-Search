import React from 'react';
import Repoitem from './Repoitem.js';
function Repos({ repos }) {
   console.log(repos);
   return (
      <div className="repo-wrapper">
         {repos.length !== 0 && <h1>Recent Repos:</h1>}
         {repos.map((repo) => (
            <Repoitem key={repo.id} repo={repo} />
         ))}
      </div>
   );
}

export default Repos;
