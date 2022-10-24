import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Button = ({
	link,
	text
}) => {
	return (
		<button
			type="button"
			className="btn btn-primary"
		>
			{text}
		</button>
	);
};

export default Button;