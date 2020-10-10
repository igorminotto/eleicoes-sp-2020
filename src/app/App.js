import React, { useEffect, useRef, useState } from 'react';
import { RechartLineChart } from '../charts/LineChart';
import Container from '../components/Container';
import Footer from './Footer';

const App = () => {
  const [width, setWidth] = useState(0);
  const containerRef = useRef(null);

  const resize = () => setWidth(containerRef.current?.offsetWidth || width);
  
  useEffect(resize, []);
  window.addEventListener("resize", resize);

  return <div className="App">
    <Container ref={containerRef}>
      <h1 className="margin-bottom">Eleições São Paulo 2020</h1>
      <RechartLineChart width={width}/>
    </Container>
    <Footer />
  </div>;
};

export default App;
