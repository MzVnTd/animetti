import React from "react";
import AnimeDetail from "./AnimeDetail";

export default {
	component: AnimeDetail,
	title: "component/AnimeDetail",
};

const Template = (args) => <AnimeDetail {...args} />;

export const Default = Template.bind({});

Default.args = {
	details: {
		"images": {
			"jpg": {
				"large_image_url": "https://cdn.myanimelist.net/images/anime/1208/94745l.jpg"
			}
		},
		"title": "Fullmetal Alchemist : Brotherhood",
		"type": "TV",
		"source": "Manga",
		"episodes": 64,
		"status": "Finished Airing",
		"score": 9.12,
		"scored_by": 1921603,
		"rank": 1,
		"popularity": 3,
		"members": 3009887,
		"favorites": 209465,
		"year": 2009,
		"trailer": {
			"embed_url": "https://www.youtube.com/embed/--IcmZkvL0Q?enablejsapi=1&wmode=opaque&autoplay=1"
		},
		"synopsis": "After a horrific alchemy experiment goes wrong in the Elric household, brothers Edward and Alphonse are left in a catastrophic new reality. Ignoring the alchemical principle banning human transmutation, the boys attempted to bring their recently deceased mother back to life. Instead, they suffered brutal personal loss: Alphonse's body disintegrated while Edward lost a leg and then sacrificed an arm to keep Alphonse's soul in the physical realm by binding it to a hulking suit of armor. The brothers are rescued by their neighbor Pinako Rockbell and her granddaughter Winry. Known as a bio-mechanical engineering prodigy, Winry creates prosthetic limbs for Edward by utilizing \"automail,\" a tough, versatile metal used in robots and combat armor. After years of training, the Elric brothers set off on a quest to restore their bodies by locating the Philosopher's Stone—a powerful gem that allows an alchemist to defy the traditional laws of Equivalent Exchange. As Edward becomes an infamous alchemist and gains the nickname \"Fullmetal,\" the boys' journey embroils them in a growing conspiracy that threatens the fate of the world. [Written by MAL Rewrite]"
	}
};