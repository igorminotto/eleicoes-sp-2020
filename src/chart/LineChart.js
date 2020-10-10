import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import ChartService from './ChartService';
import { isIOS } from '../utils/platformUtils';

export const RechartLineChart = ({ width }) => {
    const chartService = new ChartService();
    const { election, candidates, data } = chartService.getData();
    const size = [width, 500];
    const resizeLimit = 800;
    const useDateAxis = !isIOS();

    const formatDate = (daysToElection) => {
        const d = new Date(election.date);
        d.setDate(d.getDate() + daysToElection);
        return d.toLocaleDateString();
    };

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
            type={useDateAxis ? "number" : "category"}
            dataKey="daysToElection"
            tickFormatter={formatDate}
            domain={useDateAxis ? [-30,0] : null}
            />
        <YAxis 
            domain={[0, 35]} />
        <Tooltip
            labelFormatter={daysToElection => formatDate(daysToElection)}
            formatter={p => `${p}%`}/>
        <Legend 
            align={width < resizeLimit ? "left" : "right"}
            verticalAlign={width < resizeLimit ? "bottom" : "top"}
            iconType="circle"
            wrapperStyle={{ paddingLeft: 20 }}
            layout={width < resizeLimit ? "horizontal" : "vertical"} />
    </LineChart>;
};