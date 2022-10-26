import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Button = ({
	link,
	text,
}) => {
	return (
		<a href={link}>
			<button
			type="button"
			className="btn btn-primary"
		>
			{text}
		</button>
		</a>
		
	);
};

export default Button;