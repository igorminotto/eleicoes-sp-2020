import React from 'react';
import { RechartLineChart } from '../charts/LineChart';
import Container from '../components/Container';
import Footer from './Footer';

const App = () => (
  <div className="App">
    <Container>
      <h1 className="margin-bottom">Eleições São Paulo 2020</h1>
      <RechartLineChart />
    </Container>
    <Footer />
  </div>
);

export default App;
