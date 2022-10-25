import React from "react";
import TopAnimes from "./TopAnimes";
import PreviewCard from "../PreviewCard/PreviewCard";

export default {
	component: TopAnimes,
	title: "component/TopAnimes",
};

const Template = (args) => <TopAnimes {...args} />;

export const Default = Template.bind({});

const cards = [
	<PreviewCard imageUrl="https://cdn.myanimelist.net/images/anime/1208/94745l.jpg" small={true} title="Fullmetal Alchemist : Brotherhood"/>,
	<PreviewCard imageUrl="https://cdn.myanimelist.net/images/anime/1764/126627l.jpg" small={true} title="Bleach: Sennen Kessen-hen"/>,
	<PreviewCard imageUrl="https://cdn.myanimelist.net/images/anime/1160/122627l.jpg" small={true} title="Kaguya-sama wa Kokurasetai: Ultra Romantic"/>,
];

Default.args = {
	cards: cards
};