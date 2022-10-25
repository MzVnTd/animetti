import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const CardTitle = ({
	title
}) => {
	return (
		<h5
			className="card-title"
		>
			{title}
		</h5>
	);
};

export default CardTitle;