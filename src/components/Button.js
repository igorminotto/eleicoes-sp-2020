import React from 'react';
import './Button.css';

const Button = ({ content, selected, onClick }) => {
    return <div onClick={onClick} 
        className={selected ? 'button selected' : 'button'}>
        {content}
    </div>
};

export default Button;