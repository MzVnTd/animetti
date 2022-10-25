import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import CardTitle from "../CardTitle/CardTitle";
import Button from "../Button/Button";

const PreviewCard = ({
	imageUrl,
	small = true,
	title,
	link
}) => {
	return (
		<>
			<div
				className="card"
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
				<div className="d-grid align-items-center mx-auto mt-4 mb-4">
					<Button text={'WATCH NOW'} link={link}></Button>
				</div>
			</div>
		</>
	);
};

export default PreviewCard;