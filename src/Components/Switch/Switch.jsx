import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const Switch = ({

	checked = false,
	disabled = false,
}

) => {

	return (

		<div className="form-switch form-check">
			<label className="form-check-label" htmlFor="flexSwitchCheckDefault">Darkmode</label>
			<input
				className="form-check-input"
				type="checkbox"
				role="switch"
				id="flexSwitchCheckDefault"
				defaultChecked
				checked={checked}
				disabled={disabled}
			/>
		</div>
	)

}

export default Switch;