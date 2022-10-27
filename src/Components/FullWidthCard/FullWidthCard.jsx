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
    link

}) => {
    return (
    <div class="card align-items-center" style={{width: "50rem"}}>
    <img class="card-img-top m-2" src={imageUrl} alt="Card image cap" style={{width: "25rem"}}/>
    <div class="card-body">
    <CardTitle title={title}></CardTitle>
  </div>
    <ul class="list-group list-group-flush align-items-center">
      <li class="list-group-item">{genre}</li> 
      <li class="list-group-item">{status}</li>
      <li class="list-group-item">{rating}</li>
  </ul>
  <div class="card-body">
    <CardText text={sypnosys}></CardText>
  </div>
  <div class="card-body d-grid gap-2 mt-4 mb-4">
    <Button link={link} text='WATCH TRAILER NOW'></Button>
  </div>
</div>
    );
};

export default FullWidthCard;