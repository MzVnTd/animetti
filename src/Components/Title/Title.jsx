import React from 'react';
import "bootstrap/dist/css/bootstrap.css";

const Title = ({ 
    className,
    text,
}) => { return <h1
                className={className}
                >
                {text}
                </h1> 
}

export default Title;