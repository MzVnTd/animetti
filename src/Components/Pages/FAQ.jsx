import FAQComp from '../FAQ/FAQ'
import Navbar from '../NavBar'
import QuestionCard from '../QuestionCard/QuestionCard';
import Footer from '../Footer/Footer';
import "bootstrap/dist/js/bootstrap.bundle";

const FAQ = () => {

    const arrayQ = [
    <QuestionCard question="Lorem ipsum dolor sit amet, consectetur adipiscing elit?" answer="Mauris dictum condimentum ligula non dignissim!"/>, 
    <QuestionCard question="Nunc semper eleifend enim in iaculis?" answer="Curabitur mi ex, suscipit at ornare sed, sagittis id leo."/>,
    <QuestionCard question="Nunc dictum felis vel leo tincidunt, nec lobortis lacus pretium?" answer="Quisque vulputate nec tortor a malesuada. Curabitur viverra tristique sem, et vestibulum orci rhoncus et."/>
];
    return (
        <div>
        <Navbar/>
        <div className='container mt-5 d-flex justify-content-center'> 
        <FAQComp questions={arrayQ}></FAQComp>
        </div>
        <div>
        <Footer className='text-center text-white mt-5 fixed-bottom' background='#f1f1f1'></Footer>
        </div>
        </div>
    )
}

export default FAQ;