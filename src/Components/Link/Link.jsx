import React from 'react';

const Link = ({text, url}) =>{

    return (
        <p className='footer-text'>
            <a href={url}>{text}</a>
        </p>
        )

}
export default Link;
