import Link from './Link';

export default {
    component: Link,
    title: 'components/Link'
}

const Template = (args) => <Link {...args} />

export const Link = Template.bind({})

Default.args = {
    text:'',
    url:''
}



