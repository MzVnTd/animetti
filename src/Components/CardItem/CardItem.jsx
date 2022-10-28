import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const CardItem = ({
	item,
	value,
	small
}) => {
	return (
		<p className="card-text">
			{small ? <small className="text-muted">{item + " - " + value}</small> : item + " - " + value}
		</p>
	);
};

export default CardItem;