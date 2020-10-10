import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import ChartService from './ChartService';
import { isIOS } from '../utils/platformUtils';

export const RechartLineChart = ({ width, height = 500 }) => {
    const chartService = new ChartService();
    const { election, candidates, pollsData } = chartService.getData();
    const isSmallChart = width < 800;
    const useDateAxis = !isIOS() && !isSmallChart;

    const formatDate = (daysToElection) => {
        const d = new Date(election.date);
        d.setDate(d.getDate() + daysToElection);
        return d.toLocaleDateString();
    };

    return <LineChart data={pollsData} width={width} height={height} margin={{ top: 5, right: 60, bottom: 5, left: 0 }}>
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
            type={useDateAxis ? "number" : "category"}
            dataKey="daysToElection"
            tickFormatter={formatDate}
            domain={useDateAxis ? [-30,0] : null}
            />
        <YAxis 
            domain={[0, 35]} />
        <Tooltip
            labelFormatter={daysToElection => formatDate(daysToElection) 
                + " | " 
                + pollsData.find(p => p.daysToElection === daysToElection).name}
            formatter={value => `${value}%`}/>
        <Legend 
            align={isSmallChart ? "left" : "right"}
            verticalAlign={isSmallChart ? "bottom" : "top"}
            iconType="circle"
            wrapperStyle={{ paddingLeft: 20 }}
            layout={isSmallChart ? "horizontal" : "vertical"} />
    </LineChart>;
};