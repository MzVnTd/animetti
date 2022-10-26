import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Radio = (
    {
       onChange 
    }
) => {
    return (
        <>
        <div class="form-check form-check-inline d-flex align-items-center">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="bypopularity" onChange={onChange} defaultChecked/>
            <label class="form-check-label" for="inlineRadio1">by Popularity</label>
        </div>
        <div class="form-check form-check-inline d-flex align-items-center">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="favorite" onChange={onChange} /> 
            <label class="form-check-label" for="inlineRadio2">by Favorites</label>
        </div>
        <div class="form-check form-check-inline d-flex align-items-center">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="airing" onChange={onChange} />
            <label class="form-check-label" for="inlineRadio3">by Airing</label>
        </div>

</>
    );
};

export default Radio;