import React from 'react';
import PollRepository from '../data/PollRepository';
import { LineGraph } from '../graphs/LineGraph';
import './App.css';

function App() {
  const pollRepository = new PollRepository();
  const pollsLinearData = pollRepository.getLinearData();
  console.log(pollsLinearData); 
  return (
    <div className="App" style={{height: 500 }}>
      <LineGraph data={pollsLinearData}/>
    </div>
  );
}

export default App;
