import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const Link = ({
    className,
    link,
    text,
}) =>{

    return (
        <a className = {className}
        href = {link}>
            {text}
        </a>
        )
        
}

export default Link;