import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const DetailElement = ({
	index,
	value
}) => {
	return (
		<>
			<h5>{index}</h5>
			<p>{value}</p>
		</>
	)
}

export default DetailElement