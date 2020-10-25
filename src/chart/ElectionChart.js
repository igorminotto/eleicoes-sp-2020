import React, { useState } from 'react';
import ElectionService from '../election/ElectionService';
import InstitutesControl from '../institutes/InstitutesControl';
import { LineChart } from './LineChart';

export const ElectionChart = ({ width }) => {
    const electionService = new ElectionService();
    const election = electionService.getElection();
    const [selectedInstitutes, setSelectedInstitutes] = useState(election.institutes);

    return <>
        <LineChart 
            election={election} 
            selectedInstitutes={selectedInstitutes}
            width={width} />
        <InstitutesControl 
            institutes={election.institutes} 
            onChange={setSelectedInstitutes} />
    </>
};