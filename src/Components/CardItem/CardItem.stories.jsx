import React from "react";
import CardItem from "./CardItem";

export default {
	component: CardItem,
	title: "component/Cards/CardItem",
};

const Template = (args) => <CardItem {...args} />;

export const Default = Template.bind({});

Default.args = {
	item: "Ranking",
	value: "10",
	small: false
};