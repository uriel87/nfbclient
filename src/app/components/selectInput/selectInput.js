
import React, { memo } from "react";
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.js'


const SelectInput = (props) => {

    return(
        <div className="form-group">
            <select
                className="form-control"
                name={props.name}
                defaultValue={'DEFAULT'}
                onChange={props.handleOnChange}
            >
                <option value="DEFAULT" disabled>Choose {props.name}</option>
                { props.values.map((value, index) => { 
                    return <option key = {index} value={props.inputs.value} >{value}</option>;
                })
                }
            </select>
            {props.error && <p className="mediaInput-input-error">{props.error}</p>}
        </div>
    )
}

export default memo(SelectInput)