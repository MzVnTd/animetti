import React from 'react';

const Heading = ({
	className,
	size,
	text,
}) => {
	return <p
		className={className}
		style={{ fontSize: size }}
	>
		{text}
	</p>
}

export default Heading;