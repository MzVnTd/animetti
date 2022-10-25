import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const Switch = ({

	checked = false,
    disabled = false,
}
    
) => { 

	return (

		<div className="form-switch form-check">
			<label className="form-check-label" for="flexSwitchCheckDefault">Darkmode</label>
			<input
				className="form-check-input"
				type="checkbox"
				role="switch"
				id="flexSwitchCheckDefault"
				checked={checked}
				disabled={disabled}
			/>
		</div>
	)
    
}

export default Switch;