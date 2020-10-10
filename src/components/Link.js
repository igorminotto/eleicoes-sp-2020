import React from 'react';

const Link = ({ href, children, newWindow = false }) => {
    var extraFields = {};

    if (newWindow) {
        extraFields.target = "_blank";
        extraFields.rel = "noopener noreferrer";
    }

    return <a href={href} {...extraFields}>{children}</a>;
}

export default Link;