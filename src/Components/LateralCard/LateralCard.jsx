import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import CardTitle from "../CardTitle/CardTitle";
import CardItem from "../CardItem/CardItem";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const LateralCard = ({
	imageUrl,
	title,
	rank,
	ratings,
	animeId
}) => {
	return (
		<>
			<div className="card mb-3">
				<div className="row g-0">
					<div className="col-md-4">
						<img src={imageUrl} className="img-fluid rounded-start" style={{ objectFit: "cover", height: "20rem" }} />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<CardTitle title={title} />
							<CardItem item="See more" value={'Check for rating below'} />
							<Link to={"/anime/" + animeId}>
								<Button text="Read more..." />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default LateralCard;