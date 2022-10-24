import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import CardTitle from "../CardTitle/CardTitle";

const PreviewCard = ({
	imageUrl,
	small = true,
	title
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
				/>
			</div>
		</>
	);
};

export default PreviewCard;