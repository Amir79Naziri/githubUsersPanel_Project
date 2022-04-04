import React from 'react';
import { Info, Repos, User, Search, Navbar } from '../components';
import loadingImage from '../images/preloader.gif';
import { GithubContext } from '../context/context';
import { useContext } from 'react';

const Dashboard = () => {
  const { loading } = useContext(GithubContext);

  const conditionalRender = () => {
    if (loading) {
      return <img className="loading-img" src={loadingImage} alt="" />;
    } else {
      return (
        <>
          <Info />
          <User />
          <Repos />
        </>
      );
    }
  };

  return (
    <main>
      <Navbar />
      <Search />
      {conditionalRender()}
    </main>
  );
};

export default Dashboard;
