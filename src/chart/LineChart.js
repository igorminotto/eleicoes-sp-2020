import React, { useState } from 'react';
import { CartesianGrid, Legend, Line, LineChart as RechartLineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { isIOS } from '../utils/platformUtils';

export const LineChart = ({ election, selectedInstitutes, width, height = 500 }) => {
    const { candidates, pollsData } = election;
    const isSmallChart = width < 800;
    const useDateAxis = !isIOS() && !isSmallChart;

    const isCandidateActive = (candidateId, activeCandidates) => {
        return activeCandidates.indexOf(candidateId) > -1;
    };

    const generateLegendPayload = (candidates, activeCandidates) => candidates.map(c => ({
        value: c.description,
        id: c.id,
        color: isCandidateActive(c.id, activeCandidates) ? c.color : "#EEE"
    }));

    const [activeCandidates, setActiveCandidates] = useState(candidates.map(c => c.id));
    const [legendPayload, setLegendPayload] = useState(generateLegendPayload(candidates, activeCandidates));

    const formatDate = (daysToElection) => {
        const d = new Date(election.date);
        d.setDate(d.getDate() + daysToElection);
        return d.toLocaleDateString();
    };

    const formatTick = (daysToElection) => {
        return formatDate(daysToElection) + (daysToElection ? "" : " (1º Turno)");
    };

    const formatTooltipLabel = (daysToElection) => {
        var poll = pollsData.find(p => p.daysToElection === daysToElection);
        var date = formatDate(daysToElection);
        return `${poll.institute} em ${date}`;
    }

    const candidateLine = (candidate) => {
        if (!activeCandidates.includes(candidate.id))
            return;

        return <Line
            type="linear"
            key={candidate.id}
            dataKey={candidate.id}
            name={candidate.description}
            stroke={candidate.color}
            strokeWidth={4}
            dot={{ stroke: candidate.color, strokeWidth: 2 }} />;
    };

    const toggleCandidate = (candidateId) => {
        const index = activeCandidates.indexOf(candidateId);

        if (index > -1)
            activeCandidates.splice(index, 1);
        else
            activeCandidates.push(candidateId);

        setActiveCandidates([...activeCandidates]);
        setLegendPayload(generateLegendPayload(candidates, activeCandidates));
    }

    return <RechartLineChart 
            data={pollsData.filter(pd => selectedInstitutes.indexOf(pd.institute) !== -1)} 
            width={width} 
            height={height} 
            margin={{ top: 5, right: 60, bottom: 5, left: 0 }}>
        {candidates.map(candidate => candidateLine(candidate))}
        <CartesianGrid 
            stroke="#ddd"
            strokeDasharray="2 2" />
        <XAxis 
            type={useDateAxis ? "number" : "category"}
            dataKey="daysToElection"
            tickFormatter={formatTick}
            domain={useDateAxis ? [-30,0] : null} />
        <YAxis 
            domain={[0, 35]} />
        <Tooltip
            labelFormatter={daysToElection => formatTooltipLabel(daysToElection)}
            formatter={value => `${value}%`} />
        <Legend 
            payload={legendPayload}
            layout={isSmallChart ? "horizontal" : "vertical"} 
            align={isSmallChart ? "left" : "right"}
            verticalAlign={isSmallChart ? "bottom" : "top"}
            iconType="circle"
            wrapperStyle={{ paddingLeft: 20 }}
            onClick={item => console.log(item) || toggleCandidate(item.id)}/>
    </RechartLineChart>;
};