import Link from './Link';

export default {
    component: Link,
    title: 'component/Link'
}

const Template = (args) => <Link {...args} />

export const Default = Template.bind({})

Default.args = {
    text:'',
    url:''
}
