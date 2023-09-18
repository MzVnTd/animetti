import Text from './Text';

export default {
    component: Text,
    title: 'component/Text'
}

const Template = (args) => <Text {...args} />

export const Default = Template.bind({})

Default.args = {
    text:''
}



