import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  const [gitHubUser, setGitHubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);
  const [request, setRequest] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: '' });

  const toggleError = (show = false, msg = '') => setError({ show, msg });

  const checkRequest = () => {
    axios
      .get(`${rootUrl}/rate_limit`)
      .then((res) => res.data)
      .then((data) => {
        const {
          rate: { remaining },
        } = data;

        setRequest(remaining);

        if (remaining === 0) {
          toggleError(true, 'sorry, you have exceeded your hourly limit!');
        }
      })
      .catch((err) => console.log(err));
  };

  const searchUser = async (user) => {
    toggleError();
    setLoading(true);
    try {
      let response = await axios.get(`${rootUrl}/users/${user}`);

      setGitHubUser(response.data);
    } catch (err) {
      if (err.message === 'Request failed with status code 404')
        toggleError(true, 'there is no user with this username!');
      else console.log(err);
    } finally {
      checkRequest();
      setLoading(false);
    }
  };

  useEffect(() => {
    checkRequest();
  }, []);

  return (
    <GithubContext.Provider
      value={{
        gitHubUser,
        followers,
        repos,
        request,
        error,
        searchUser,
        loading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
