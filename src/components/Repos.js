import React from 'react';
import { useContext } from 'react';
import styled from 'styled-components';
import { GithubContext } from '../context/context';
import { Pie2D, Column2D, Bar2D, Doughnut2D } from './Charts';
const Repos = () => {
  const { repos } = useContext(GithubContext);

  const langs = repos.reduce((total, repo) => {
    const { language, stargazers_count } = repo;

    if (language) {
      total[language]
        ? (total[language] = {
            ...total[language],
            value: total[language].value + 1,
            stars: total[language].stars + stargazers_count,
          })
        : (total[language] = {
            label: language,
            value: 1,
            stars: stargazers_count,
          });
    }
    return total;
  }, {});

  const mostUsedLangs = Object.values(langs)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  const starsPerLangs = Object.values(langs)
    .sort((a, b) => b.stars - a.stars)
    .slice(0, 5)
    .map((item) => {
      return { ...item, value: item.stars };
    });

  const mostForked = repos
    .sort((a, b) => b.forks_count - a.forks_count)
    .slice(0, 5)
    .map((item) => {
      return { label: item.name, value: item.forks_count };
    });
  // console.log(repos);

  const mostStared = repos
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 5)
    .map((item) => {
      return { label: item.name, value: item.stargazers_count };
    });

  // console.log(mostUsedLangs);
  // console.log(starsPerLangs);
  return (
    <section className="section">
      <Wrapper className="section-center">
        <Pie2D>{mostUsedLangs}</Pie2D>
        <Column2D>{mostStared}</Column2D>
        <Doughnut2D>{starsPerLangs}</Doughnut2D>
        <Bar2D>{mostForked}</Bar2D>
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
