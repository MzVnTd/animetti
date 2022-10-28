import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Button = ({
	link,
	text,
	onClick
}) => {
	return (
		<a href={link}>
			<button
				type="button"
				className="btn btn-primary"
				onClick={onClick}
			>
				{text}
			</button>
		</a>

	);
};

export default Button;