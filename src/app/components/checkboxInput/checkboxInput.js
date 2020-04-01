
import React, { memo } from "react";

const CheckboxInput = (props) => {
    return(
        <div className="form-group">
            <div className="form-check">
                <input
                    className={props.error && "input-error"} 
                    name={props.name}
                    type="checkbox"
                    value={props.value}
                    onChange={props.handleOnChange}
                />
                {props.label? <label htmlFor={props.name} className="form-check-label">{props.label}</label> : ""}
            </div>
        </div>
    )
}

export default memo(CheckboxInput)