import React from "react";
import CardTitle from "./CardTitle";

export default {
	component: CardTitle,
	title: "component/Cards/CardTitle",
};

const Template = (args) => <CardTitle {...args} />;

export const Default = Template.bind({});

Default.args = {
	title: "Anime title"
};