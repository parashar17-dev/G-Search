import React, { Fragment } from 'react';
import Users from '../users/Users';
import Search from '../Layout/Search';

function Home() {
   return (
      <Fragment>
         <Search />
         <Users />
      </Fragment>
   );
}

export default Home;
