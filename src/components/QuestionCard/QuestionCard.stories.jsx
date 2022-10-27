import QuestionCard from './QuestionCard';

export default {
    component: QuestionCard,
    title: 'component/QuestionCard'
}

const Template = (args) => <QuestionCard {...args} />

export const Default = Template.bind({})

Default.args = {
   question: "Vincent major de promo ?",
   answer:"non",
}
