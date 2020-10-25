import React, { useState } from 'react';
import Button from '../components/Button';

const InstitutesControl = ({ institutes, onChange }) => {
    const [selectedInstitutes, setSelectedInstitutes] = useState(institutes);
    const toggleInstitute = (institute) => {
        if (selectedInstitutes.indexOf(institute) === -1) {
            selectedInstitutes.push(institute);
        } else {
            selectedInstitutes.splice(selectedInstitutes.indexOf(institute), 1);
        }
        setSelectedInstitutes(Array.from(selectedInstitutes));
        onChange(selectedInstitutes);
    };

    return <>
        <h4>Institutos</h4>
        {institutes.map(i => 
            <Button 
                content={i} 
                selected={selectedInstitutes.indexOf(i) !== -1}
                onClick={() => toggleInstitute(i)} />)}
    </>
};

export default InstitutesControl; 