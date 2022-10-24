import React from "react";
import Card from "./Card";

export default {
	component: Card,
	title: "component/Card",
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});

Default.args = {
	imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
	size: "small",
	title: "Anime title"
};