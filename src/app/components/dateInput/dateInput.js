



import React, { memo } from "react";

const DateInput = (props) => {

    return(
        <div className="modal-body">
            
            <div className="input-group mb-3">
                {props.label? <label htmlFor={props.label}>{props.label}</label> : ""}
                <input
                className={props.error && "input-error"} 
                name={props.name}
                type="datetime-local"
                value={props.value}
                onChange={props.handleOnChange}
                min={props.min}
                />
                {props.error && <p className="mediaInput-input-error">{props.error}</p>}
            </div>
        </div>
    )
}

export default memo(DateInput)



{/* <DateInput
name={"daily"}
label={"Daily"}
placeholder={"Daily"}
handleOnChange={handleOnChange}
error={errors.daily}
value={inputs.endTime}
min={inputs.startTime} /> */}