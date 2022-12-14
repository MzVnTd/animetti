import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import CardTitle from "../CardTitle/CardTitle";
import Button from "../Button/Button";

const PreviewCard = ({
	imageUrl,
	small = true,
	title,
	link,
	key
}) => {
	return (
		<>
			<div
				className="card align-items-center"
				style={{ width: small ? "18rem" : "36rem" }}
			>
				<div
					className="card-body"
				>
					<CardTitle title={title} />
				</div>
				<img
					src={imageUrl}
					className="card-img-bottom"
					style={{ objectFit: "cover", height: small ? "20rem" : "40rem" }}
					alt=""
				/>
				<div className="d-grid gap-2 mt-4 mb-4">
					<Button text='WATCH TRAILER NOW' link={link} disabled={link===null ? true : false}></Button>
				</div>
			</div>
		</>
	);
};

export default PreviewCard;