import Icon from './Icon';

export default {
    component: Icon,
    title: 'components/Icon'
}

const Template = (args) => <Icon {...args} />

export const Icon = Template.bind({})

Default.args = {
    className:"",
    href:"",
    role:"",
    iclass:"",
    dataMdbRippleColor:""
}



