import Text from './Text';

export default {
    component: Text,
    title: 'components/Text'
}

const Template = (args) => <Text {...args} />

export const Default = Template.bind({})

Default.args = {
    text:''
}



