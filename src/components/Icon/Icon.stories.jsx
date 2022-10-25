import Icon from './Icon';

export default {
    component: Icon,
    title: 'components/Icon'
}

const Template = (args) => <Icon {...args} />

export const Icon = Template.bind({})

Default.args = {
    svg:"",
    width:"",
    height:"",
    fill:"",
    className:"",
    viewBox:"",
    d:""
}