import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import ChartService from './ChartService';

export const RechartLineChart = () => {
    const chartService = new ChartService();
    const { data, candidates } = chartService.getData();
    const electionRaceDomain = [new Date("2020-09-20 00:00:00"), new Date("2020-11-15 00:00:00")];

    const formatDate = (timestamp) => new Date(timestamp).toLocaleDateString();

    return <ResponsiveContainer width="100%" height={500} >
        <LineChart data={data} margin={{ top: 5, right: 60, bottom: 5, left: 0 }}>
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
                type="number" 
                dataKey="date"
                tickFormatter={formatDate}
                domain={electionRaceDomain.map(d => d.getTime())} />
            <YAxis 
                domain={[0, 35]} />
            <Tooltip
                labelFormatter={ts => new Date(ts).toLocaleDateString()}
                formatter={p => `${p}%`}/>
            <Legend 
                align="right"
                verticalAlign="top"
                iconType="circle"
                wrapperStyle={{ paddingLeft: 20 }}
                layout="vertical" />
        </LineChart>
    </ResponsiveContainer>
};