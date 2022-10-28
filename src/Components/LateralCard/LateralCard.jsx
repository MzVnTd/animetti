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
			<div class="card mb-3">
				<div class="row g-0">
					<div class="col-md-4">
						<img src={imageUrl} class="img-fluid rounded-start" style={{ objectFit: "cover", height: "20rem" }} />
					</div>
					<div class="col-md-8">
						<div class="card-body">
							<CardTitle title={title} />
							<CardItem item="Ranking" value={'#' + rank} />
							<CardItem item="Ratings" value={ratings} small={true} />
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