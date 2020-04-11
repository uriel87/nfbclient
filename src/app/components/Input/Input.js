
import React, { memo, useEffect } from "react";
import './input.css'
import TextField from "@material-ui/core/TextField";


const Input = (props) => {

    // console.log("props input", props)

    return(
        <div>
            <TextField className="input-textField"
                label={props.label}
                name={props.name}
                type={props.type}
                // placeholder={props.placeholder}
                value={props.value}
                defaultValue={props.defaultValue}
                onChange={props.handleOnChange}
                inputProps={{ min: props.min}}
                error={props.error? true : false}
                helperText={props.error} />
        </div>
    )
}

export default memo(Input)








{/* error={props.error}
helperText={props.error} /> */}

// <div class="mdc-text-field">
//   <input class="mdc-text-field__input" id="text-field-hero-input">
//   <div class="mdc-line-ripple"></div>
//   <label for="text-field-hero-input" class="mdc-floating-label">Name</label>
// </div> 


{/* {props.error && <p className="mediaInput-input-error">{props.error}</p>} */}







