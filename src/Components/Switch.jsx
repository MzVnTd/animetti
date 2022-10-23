import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const Switch = (
    checked = false,
    disabled = false,
) => { 

    if (checked === true) {
        return (
            <div class="form-check form-switch">
                <label class="form-check-label" for="flexSwitchCheckDefault">Darkmode</label>
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked></input>
            </div>
        )
    }

    if (disabled === true) {
        return (

            <div class="form-check form-switch">
                <label class="form-check-label" for="flexSwitchCheckDefault">Darkmode</label>
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" disabled></input>
            </div>
        )
    }

    else {
        return (

            <div class="form-switch form-check">
                <label class="form-check-label" for="flexSwitchCheckDefault">Darkmode</label>
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"></input>
            </div>
        )
    }
    
}

export default Switch;