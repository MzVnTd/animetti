import React from "react";
import PreviewCard from "./PreviewCard";

export default {
	component: PreviewCard,
	title: "component/Cards/PreviewCard",
};

const Template = (args) => <PreviewCard {...args} />;

export const Default = Template.bind({});

Default.args = {
	imageUrl: "https://cdn.myanimelist.net/images/anime/1208/94745l.jpg",
	small: true,
	title: "Fullmetal Alchemist : Brotherhood"
};