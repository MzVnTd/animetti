import React from 'react';
import Heading from './Heading'

export default {
    component: Heading,
    title: 'component/Heading'
}

const Template = (args) => <Heading {...args} />

export const heading = Template.bind({});

heading.args = {
    text:'BLABLABLA',
    size:'sm'
}