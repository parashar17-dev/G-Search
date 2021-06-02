import React, { useContext } from 'react';
import Useritem from './Useritem.js';
import Spinner from '../Layout/Spinner.js';
import GithubContext from '../../context/github/githubContext';

const Users = () => {
   const githubContext = useContext(GithubContext);
   const { users, loading } = githubContext;

   // If still loading show the spinner else
   // show all the userItemComponents we created:
   if (loading) return <Spinner />;
   return (
      <div className="users">
         {users.map((user) => (
            <Useritem key={user.id} user={user} />
         ))}
      </div>
   );
};

export default Users;
