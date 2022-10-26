import QuestionCard from './QuestionCard';

export default {
    component: QuestionCard,
    title: 'components/QuestionCard'
}

const Template = (args) => <QuestionCard {...args} />

export const Default = Template.bind({})

Default.args = {
   question: "Vincent major de promo ?",
   answer:"non",
}
