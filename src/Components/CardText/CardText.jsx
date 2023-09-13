import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const CardText = ({
	text,
	username
}) => {
	return (
		<div class="card">
		<div className="card-body">
			<h6 className="card-title">{username}</h6>
			<p className="card-text">{text}</p>
		</div>
		</div>
	);
};

export default CardText;