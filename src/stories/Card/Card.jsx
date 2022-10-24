import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import PropTypes from 'prop-types';

const Card = ({
	imageUrl,
	size = PropTypes.oneOf(['small', 'medium']),
	title
}) => {
	return (
		<>
			<div
				className="card"
				style={{ width: size=='small'? "18rem": "36rem" }}
			>
				<img
					src={imageUrl}
					className="card-img-top"
					style={{ objectFit: "cover", height: size=='small'? "20rem" : "40rem"}}
				/>
				<div
					className="card-body"
				>
					<h5
						className="card-title"
					>
						{title}
					</h5>
				</div>
			</div>
		</>
	);
};

export default Card;