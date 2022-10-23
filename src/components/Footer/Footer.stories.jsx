import Footer from './Footer';

export default {
    component: Footer,
    title: 'components/Footer'
}

const Template = (args) => <Footer {...args} />

export const Default = Template.bind({})

Default.args = {
    name:'Nom du composant'
}

