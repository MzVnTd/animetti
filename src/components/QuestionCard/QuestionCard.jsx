import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { v4 as uuid } from 'uuid';


const QuestionCard = ({ question, answer }) => {

	const idHeader = "a" + uuid().substring(0, 4)
	const idBody = "a" + uuid().substring(0, 4)

	return (

		<>
			<div>
				<div className="accordion">
					<div className="accordion-item">
						<h2 className="accordion-header" id={idHeader}>
							<button
								className="accordion-button" type="button"
								data-bs-toggle="collapse"
								data-bs-target={'#' + idBody}
								aria-expanded="false"
								aria-controls={idBody}>
								<p>{question}</p>
							</button>
						</h2>
						<div id={idBody} className="accordion-collapse collapse show" aria-labelledby={idHeader}>
							<div className="accordion-body">
								{answer}
							</div>
						</div>
					</div>

				</div>
			</div>
		</>
	);
};

export default QuestionCard;