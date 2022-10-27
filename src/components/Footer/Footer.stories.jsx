import Footer from './Footer';

export default {
    component: Footer,
    title: 'component/Footer'
}

const Template = (args) => <Footer {...args} />

export const Default = Template.bind({})

Default.args = {
    className:'text-center text-white',
    background:'#f1f1f1'
}

