import React from 'react';
import '../vincent.css'

const Link = ({text, url}) =>{

    return (
        <p className='footer-text'>
            <a href={url}>{text}</a>
        </p>
        )
        
}
export default Link;