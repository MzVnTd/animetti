import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Radio = (
	{
		onChange
	}
) => {
	return (
		<>
			<div className="form-check form-check-inline d-flex align-items-center">
				<input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="bypopularity" onChange={onChange} defaultChecked />
				<label className="form-check-label" htmlFor="inlineRadio1">by Popularity</label>
			</div>
			<div className="form-check form-check-inline d-flex align-items-center">
				<input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="favorite" onChange={onChange} />
				<label className="form-check-label" htmlFor="inlineRadio2">by Favorites</label>
			</div>
			<div className="form-check form-check-inline d-flex align-items-center">
				<input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="airing" onChange={onChange} />
				<label className="form-check-label" htmlFor="inlineRadio3">by Airing</label>
			</div>

		</>
	);
};

export default Radio;