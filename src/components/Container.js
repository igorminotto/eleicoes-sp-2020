import React from 'react';
import './Container.css';

const Container = React.forwardRef(
    ({ children }, ref) => <div className="container" ref={ref}>{children}</div>
);

export default Container;