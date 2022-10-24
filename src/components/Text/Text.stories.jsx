import Link from './Link';

export default {
    component: Link,
    title: 'components/Text'
}

const Template = (args) => <Text {...args} />

export const Text = Template.bind({})

Default.args = {
    text:''
}



