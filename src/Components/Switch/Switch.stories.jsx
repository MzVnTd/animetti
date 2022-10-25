import React from 'react';
import Switch from './Switch'

export default {
    component: Switch,
    title: 'component/Switch'
}

const Template = (args) => <Switch {...args} />

export const switchOn = Template.bind({});

switchOn.args = {
    checked: true,
    disabled: false
}

export const switchOff = Template.bind({});

switchOff.args = {
    checked: false,
    disabled: false
}

export const switchDisa = Template.bind({});

switchDisa.args = {
    checked: false,
    disabled: true
}