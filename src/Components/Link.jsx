import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const Link = ({
    className,
    link,
    text,
}) =>{

    return (
        <a class = {className}
        href = {link}>
            {text}
        </a>
        )
        
}

export default Link;