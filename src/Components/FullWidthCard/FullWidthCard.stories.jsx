import React from "react";
import FWD from "./FullWidthCard";

export default {
	component: FWD,
	title: "component/FWD",
};

const Template = (args) => <FWD {...args} />;

export const Default = Template.bind({});

Default.args = {
    imageUrl: "https://cdn.myanimelist.net/images/anime/1208/94745l.jpg",
	title: "Fullmetal Alchemist: Brotherhood",
	ratings: 9.12,
    genre: "shojo",
    status: "airing",
    sypnosys: "Nunc semper eleifend enim in iaculis. Curabitur mi ex, suscipit at ornare sed, sagittis id leo. Pellentesque quis leo laoreet, condimentum mauris ut, pellentesque est. Mauris nunc dui, rutrum sed quam sit amet, dapibus bibendum augue. Praesent id euismod nulla. Nunc ut ullamcorper magna. Etiam mollis iaculis ex ac dictum. Duis a cursus mi."
};

