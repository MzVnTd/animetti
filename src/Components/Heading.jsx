import React from 'react';

const Heading = ({ 
    className,
    text,
    size
}) => { return <p
                size={size}
                class={className}
                >
                {text}
                </p> 
}

export default Heading;