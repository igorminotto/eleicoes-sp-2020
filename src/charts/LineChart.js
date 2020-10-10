import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import ChartService from './ChartService';

export const RechartLineChart = ({ width }) => {
    const chartService = new ChartService();
    const { data, candidates } = chartService.getData();
    const electionRaceDomain = [new Date("2020-09-20 00:00:00"), new Date("2020-11-15 00:00:00")];
    const size = [width, 500];
    const resizeLimit = 800;

    const formatDate = (timestamp) => new Date(timestamp).toLocaleDateString();

    return <LineChart data={data} width={size[0]} height={size[1]} margin={{ top: 5, right: 60, bottom: 5, left: 0 }}>
        {candidates.map(candidate => <Line 
            type="linear" 
            key={candidate.id}
            dataKey={candidate.id} 
            name={candidate.description} 
            stroke={candidate.color}
            strokeWidth={3}
            dot={{ stroke: candidate.color, strokeWidth: 2 }} />)}
        <CartesianGrid 
            stroke="#ddd" 
            strokeDasharray="2 2" />
        <XAxis 
            type="category" 
            dataKey="date"
            tickFormatter={formatDate}
            domain={electionRaceDomain.map(d => d.getTime())} />
        <YAxis 
            domain={[0, 35]} />
        <Tooltip
            labelFormatter={ts => new Date(ts).toLocaleDateString()}
            formatter={p => `${p}%`}/>
        <Legend 
            align={width < resizeLimit ? "left" : "right"}
            verticalAlign={width < resizeLimit ? "bottom" : "top"}
            iconType="circle"
            wrapperStyle={{ paddingLeft: 20 }}
            layout={width < resizeLimit ? "horizontal" : "vertical"} />
    </LineChart>;
};