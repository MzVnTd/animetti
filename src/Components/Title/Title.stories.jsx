import React from 'react';
import Title from './Title'

export default {
    component: Title,
    title: 'component/Heading'
}

const Template = (args) => <Title {...args} />

export const center = Template.bind({});

center.args = {
    text:'CENTER TITLE',
    className:'text-center'
}

export const left = Template.bind({});

left.args = {
    text:'LEFT TITLE',
    className:'text-left'
}

export const right = Template.bind({});

right.args = {
    text:'RIGHT TITLE',
    className:'text-right'
}