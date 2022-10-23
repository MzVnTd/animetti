import React from 'react';

const Heading = ({ 
    className,
    size,
    text,
}) => { return <p
                class={className}
                style={{fontSize:size}}
                >
                {text}
                </p> 
}

export default Heading;