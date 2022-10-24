import React from 'react';
import Link from './Link'

export default {
    component: Link,
    title: 'component/Link'
}

const Template = (args) => <Link {...args} />

export const link = Template.bind({});

link.args = {
    text:"Link 1",
    href:"Google.com",
    className:"nav-link"
}

export const linkDisa = Template.bind({});

linkDisa.args = {
    text:"Link 1",
    href:"Google.com",
    className:"nav-link disabled"
}