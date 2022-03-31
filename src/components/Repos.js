import React from 'react';
import { useContext } from 'react';
import styled from 'styled-components';
import { GithubContext } from '../context/context';
import { ExampleChart, Pie2D, Column3D, Bar3D, Doughnut2D } from './Charts';
const Repos = () => {
  const { repos } = useContext(GithubContext);
  const langs = repos.reduce((total, repo) => {
    if (repo.language) {
      total[repo.language]
        ? (total[repo.language].value += 1)
        : (total[repo.language] = { label: repo.language, value: 1 });
    }
    return total;
  }, {});

  const mostUsedLangs = Object.values(langs)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  return (
    <section className="section">
      <Wrapper className="section-center">
        <Pie2D>{mostUsedLangs}</Pie2D>
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
