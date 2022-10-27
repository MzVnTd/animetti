import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const CardText = ({
	text
}) => {
	return (
		<p className="card-text">
			{text}
		</p>
	);
};

export default CardText;