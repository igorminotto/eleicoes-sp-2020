import React from 'react';
import { RechartLineChart } from '../charts/LineChart';
import Container from './Container';

const App = () => {
  const source = "https://pt.wikipedia.org/wiki/Elei%C3%A7%C3%A3o_municipal_de_S%C3%A3o_Paulo_em_2020";

  return <div className="App">
    <Container>
      <h1 className="margin-bottom">Eleições São Paulo 2020</h1>
      <RechartLineChart />
      <small>Fonte: <a href={source}>{source}</a></small>
    </Container>
  </div>;
}

export default App;
