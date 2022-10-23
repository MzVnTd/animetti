import React from 'react';
import '../vincent.css'

const Icon = ({svg}) =>{

    return (
        <svg class="svg-icon" viewBox="0 0 20 20">
			<path d={svg}></path>
		</svg>
        ) 
}
export default Icon;