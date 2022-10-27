import React from "react";
import LateralCard from "./LateralCard";

export default {
	component: LateralCard,
	title: "component/Cards/LateralCard",
};

const Template = (args) => <LateralCard {...args} />;

export const Default = Template.bind({});

Default.args = {
	imageUrl: "https://cdn.myanimelist.net/images/anime/1208/94745l.jpg",
	title: "Fullmetal Alchemist: Brotherhood",
	rank: 1,
	ratings: 9.12
};