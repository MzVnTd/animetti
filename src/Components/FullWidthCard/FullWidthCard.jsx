import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import CardTitle from "../CardTitle/CardTitle";
import CardText from "../CardText/CardText";
import Button from "../Button/Button";

const FullWidthCard = ({
	title,
	imageUrl,
	genre,
	rating,
	sypnosys,
	status,
	link=null

}) => {
	return (
		<div className="card align-items-center" style={{ width: "50rem" }}>
			<img className="card-img-top m-2" src={imageUrl} alt="Card image cap" style={{ width: "25rem" }} />
			<div className="card-body">
				<CardTitle title={title}></CardTitle>
			</div>
			<ul className="list-group list-group-flush align-items-center">
				<li className="list-group-item">{genre}</li>
				<li className="list-group-item">{status}</li>
				<li className="list-group-item">{rating}</li>
			</ul>
			<div className="card-body">
				<CardText text={sypnosys}></CardText>
			</div>
			<div className="card-body d-grid gap-2 mt-4 mb-4">
				<Button link={link} text='WATCH TRAILER NOW' disabled={link===null ? true : false}></Button>
			</div>
		</div>
	);
};

export default FullWidthCard;