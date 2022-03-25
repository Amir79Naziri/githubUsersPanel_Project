import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  useEffect(() => {
    const loadData = async () => {
      const raw = await axios.get(rootUrl);
      const user = await raw.data;
    };

    // loadData();
  }, []);

  return (
    <GithubContext.Provider value={'hello'}>{children}</GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
