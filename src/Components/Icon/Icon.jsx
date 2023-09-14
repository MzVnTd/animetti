import React from 'react';

const Icon = ({ xmlns, width, height, fill, className, viewBox, d }) => {

	return (
		<svg xmlns={xmlns} width={width} height={height} fill={fill}
			className={className} viewBox={viewBox}>
			<path
				d={d}>
			</path>
		</svg>
	)
}
export default Icon;
