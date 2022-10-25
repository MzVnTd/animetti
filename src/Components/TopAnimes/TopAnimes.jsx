import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.css";
import PreviewCard from "../PreviewCard/PreviewCard";

const TopAnimes = ({
	cards = PropTypes.arrayOf(PreviewCard)
}) => {
	return (
		<div
			className="card-group"
		>
			{cards.map(card => {
				return card;
			})}
		</div>
	);
};

export default TopAnimes;