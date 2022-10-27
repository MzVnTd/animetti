import React from 'react';
import QuestionCard from '../QuestionCard/QuestionCard';
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

const FAQ = ({
    questions = PropTypes.arrayOf(QuestionCard)
}) => {

    return (
        <div
            className='accordion'
        >
            {questions.map(question => {
                return question;
            })}
        </div>
    );
};

export default FAQ;