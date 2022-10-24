import React from 'react';

const Icon = ({ href, role, className, dataMdbRippleColor, iclass }) => {

    return (
        <a
            className={className}
            href={href}
            role={role}
            data-mdb-ripple-color={dataMdbRippleColor}
        ><i iclass={iclass}></i>
        </a>
    )
}
export default Icon;