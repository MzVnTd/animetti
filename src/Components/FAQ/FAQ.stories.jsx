import React from "react";
import QuestionCard from "../QuestionCard/QuestionCard";
import FAQ from "./FAQ";

export default {
	component: FAQ,
	title: "components/FAQ",
};

const Template = (args) => <FAQ {...args} />;

export const Default = Template.bind({});

const question = [<QuestionCard question="q1" answer="a1"/>, <QuestionCard question="q1" answer="a1"/>]

Default.args = {
	questions: question
};