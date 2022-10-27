import Icon from './Icon';

export default {
    component: Icon,
    title: 'component/Icon'
}

const Template = (args) => <Icon {...args} />

export const Default = Template.bind({})

Default.args = {
    svg:"",
    width:"",
    height:"",
    fill:"",
    className:"",
    viewBox:"",
    d:""
}