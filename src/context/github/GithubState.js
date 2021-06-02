import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './GithubReducer';

import {
   SEARCH_USERS,
   SET_LOADING,
   CLEAR_USERS,
   GET_REPOS,
   GET_USER,
} from '../types.js';

const githubClientId = 'e246095fd6e83ccdb436';
const githubClientSecret = '2dd36d25e2aa0e54221dfd8b00bdb2c5dae97cec';

/*if (process.env.NODE_ENV !== 'production') {
   githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
   githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
   githubClientId = process.env.GITHUB_CLIENT_ID;
   githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}*/
const GithubState = (props) => {
   const initialState = {
      users: [],
      user: {},
      repos: [],
      loading: false,
   };

   const [state, dispatch] = useReducer(GithubReducer, initialState);

   // Search Users
   // Method to load the Searched Users:
   const searchUsers = async (text) => {
      // setting loading to true while data loads:
      // And show spinner:
      setloading();

      // Getting data from API using Axios :
      const res = await axios.get(
         `https://api.github.com/search/users?q=${text}&?client_id=${githubClientId}&client_secret=${githubClientSecret}`
      );
      // setting the users state to the data we got
      // and loading to false to remove spinner
      dispatch({
         type: SEARCH_USERS,
         payload: res.data.items,
      });
   };

   // Get Users
   // To get data of a particular user
   // When we click on the more button
   const getUser = async (username) => {
      setloading();
      const res = await axios.get(
         `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
      );
      dispatch({
         type: GET_USER,
         payload: res.data,
      });
   };

   // Get Repos
   // Getting Repos of a particular User
   const getUserRepos = async (username) => {
      setloading();
      const res = await axios.get(
         `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&?client_id=${githubClientId}&client_secret=${githubClientSecret}`
      );
      dispatch({
         type: GET_REPOS,
         payload: res.data,
      });
   };

   // Clear Users
   // Method to Clear users from state
   // Using Clear Button:
   const clearUsers = () => dispatch({ type: CLEAR_USERS });

   // Set Loading
   const setloading = () => dispatch({ type: SET_LOADING });
   return (
      <GithubContext.Provider
         value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            searchUsers,
            clearUsers,
            getUser,
            getUserRepos,
         }}
      >
         {props.children}
      </GithubContext.Provider>
   );
};

export default GithubState;
