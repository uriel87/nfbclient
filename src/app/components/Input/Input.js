
import React, { memo } from "react";
import './input.css'
import TextField from "@material-ui/core/TextField";


const Input = (props) => {
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







