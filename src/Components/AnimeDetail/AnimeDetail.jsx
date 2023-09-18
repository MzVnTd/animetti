import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import DetailElement from "../DetailElement/DetailElement";
import RatingBox from "../RatingStars/RatingBox";
import CardText from "../CardText/CardText";
import TextArea from "../TextArea/TextArea";

const AnimeDetail = ({
	details,
	value,
	onRatingChange,
	userRating,
	scoredBy,
	comments,
	newComment,
	handleSendClick,
	handleTextChange
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
						<TextArea text={newComment} handleSendClick={handleSendClick} handleTextChange={handleTextChange}/>
						{
							comments.map((comment, index) => (
								<CardText username={comment.username} text={comment.comment}/>
							))
						}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AnimeDetail;