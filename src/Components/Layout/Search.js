import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/Alert/AlertContext';

const Search = ({ setAlert }) => {
   const githubContext = useContext(GithubContext);
   const alertContext = useContext(AlertContext);
   // Input state:
   const [text, setText] = useState('');

   // Handling the input state:
   const onchangeHandler = (e) => setText(e.target.value);

   // Handling the form submit
   // Calling SearchUser func in App component to search for typed username
   const onSubmit = (e) => {
      e.preventDefault();
      if (text === '') {
         const msg = 'Please enter something';
         alertContext.setAlert(msg);
      } else {
         githubContext.searchUsers(text);
         setText('');
      }
   };

   return (
      <form onSubmit={onSubmit} className="Search">
         <input
            type="text"
            name="Name"
            placeholder="Search User..."
            value={text}
            onChange={onchangeHandler}
            className="Search-Val"
         />
         <div className="btn-wrapper">
            <input type="submit" value="Search" className="search-btn" />
            {githubContext.users.length > 0 && (
               <button
                  className="search-btn"
                  onClick={githubContext.clearUsers}
               >
                  Clear
               </button>
            )}
         </div>
      </form>
   );
};

export default Search;
