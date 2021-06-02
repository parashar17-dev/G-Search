import React, { useEffect, Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../Layout/Spinner';
import Repos from '../repos/Repos.js';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
   const githubContext = useContext(GithubContext);
   const { user, getUser, loading, repos, getUserRepos } = githubContext;

   useEffect(() => {
      getUser(match.params.login);
      getUserRepos(match.params.login);
   }, []);

   const {
      name,
      avatar_url,
      location,
      company,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
   } = user;

   if (loading) return <Spinner />;
   return (
      <Fragment>
         <div className="hire-wrapper">
            <Link to="/G-Search">
               <button className="back">Back to Search</button>
            </Link>
            <h1 className="hireable">
               Hireable
               {hireable ? (
                  <i className="fa fa-check"></i>
               ) : (
                  <i className="fa fa-times-circle"></i>
               )}
            </h1>
         </div>

         <div className="general-info-wrapper">
            <div className="general-info">
               <img src={avatar_url} alt="image" className="user-avatar" />
               <h1 className="user-name">{name}</h1>
               {location && (
                  <p className="user-location">
                     <strong>Location</strong> : {location}
                  </p>
               )}
            </div>
            <div className="info">
               {bio && (
                  <Fragment>
                     <h1 className="bio-label">Bio:</h1>
                     <p className="bio">{bio}</p>
                  </Fragment>
               )}
               <a href={html_url} classname="profile">
                  <button className="profile">Visit Github Profile</button>
               </a>
               <ul>
                  <li className="info-li">
                     {login && (
                        <Fragment>
                           <strong>Username:</strong> {login}
                        </Fragment>
                     )}
                  </li>
                  <li>
                     {company && (
                        <Fragment>
                           <strong>Company :</strong> {company}
                        </Fragment>
                     )}
                  </li>
                  <li>
                     {blog && (
                        <Fragment>
                           <strong>Website :</strong> {blog}
                        </Fragment>
                     )}
                  </li>
               </ul>
            </div>
         </div>
         <div className="general-info-wrapper wrapper2">
            <div className="divcon followers">Followers: {followers}</div>
            <div className="divcon following">Following: {following}</div>
            <div className="divcon repos">Public Repos: {public_repos}</div>
            <div className="divcon gists">Public Gists: {public_gists}</div>
         </div>
         <Repos repos={repos} />
      </Fragment>
   );
};

export default User;
