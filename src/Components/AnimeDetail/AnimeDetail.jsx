import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import DetailElement from "../DetailElement/DetailElement";
import RatingBox from "../RatingStars/RatingBox";

const AnimeDetail = ({
	details,
	value,
	onRatingChange,
	userRating,
	scoredBy
}) => {

	if (details === null) {
		return <h1 className="display-5">Loading...</h1>;
	}

	return (
		<div className="card">
			<div className="row g-0">
				<div className="col-md-4 border-end">
					<div className="d-flex flex-column align-middle">
						<img src={details.images === undefined ? "" : details.images.jpg.large_image_url} alt="" />
					</div>
				</div>
				<div className="col p-4">
					<div className="d-flex justify-content-between align-items-center">
						<h1 className="display-5">{details.title}</h1>
					</div>
					<div className="row">
						<DetailElement index="Year" value={details.year} />
						<DetailElement index="Synopsis" value={details.synopsis} />
						<DetailElement index="User rating" value={value} />
						<RatingBox value={userRating} onRatingChange={onRatingChange}/>
						<DetailElement index="Scored by" value={scoredBy} />
						<DetailElement index="Type" value={details.type} />
						<DetailElement index="Source" value={details.source} />
						<DetailElement index="Episodes" value={details.episodes} />
						<DetailElement index="Status" value={details.status} />
						<iframe height="400vh" title={details.title} src={details.trailer.embed_url} frameBorder="0" allowFullScreen />
					</div>
				</div>
			</div>
		</div>
	);
};

export default AnimeDetail;