import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import ChartService from './ChartService';

export const RechartLineChart = () => {
    const chartService = new ChartService();
    const { data, candidates } = chartService.getData();
    const electionRaceDomain = [new Date("2020-09-20 00:00:00"), new Date("2020-11-15 00:00:00")];

    const formatDate = (timestamp) => new Date(timestamp).toLocaleDateString();

    console.log(data, candidates);

    return <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        {candidates.map(candidate => <Line 
            type="monotone" 
            dataKey={candidate.id} 
            name={candidate.key} 
            stroke={candidate.color}
            dot={{ stroke: candidate.color, strokeWidth: 1 }} />)}

        <CartesianGrid stroke="#ddd" strokeDasharray="2 2" />
        <XAxis type="number" 
            dataKey="date"
            tickFormatter={formatDate}
            domain={electionRaceDomain.map(d => d.getTime())} />
        <YAxis domain={[0, 35]}/>
        <Tooltip />
        <Legend />
    </LineChart>
};