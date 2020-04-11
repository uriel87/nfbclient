
import React, { memo } from "react";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import './selectInput.css'


const SelectInput = (props) => {
    
    return(
        <FormControl error={props.error? true : false} className="input-formControl">
            <InputLabel
                id="demo-simple-select-labe"
                helperText={props.error} >
                {props.name}
            </InputLabel>
            <Select
                value={props.value}
                name={props.name}
                onChange={props.handleOnChange} >
                { props.values.map((value, index) => {
                    return <MenuItem key = {index} value={value}>{value}</MenuItem>;
                    })
                }
            </Select>
            {props.error && <FormHelperText error className="mediaInput-input-error">{props.error}</FormHelperText>}
        </FormControl>
    )
}

export default memo(SelectInput)









// const useStyles = makeStyles((theme) => ({
//     formControl: {
//         display: "block",
//         width: "70%",
//         top: "-15px",
//         margin: "15px auto 30px",
//     },
//     inputLabel: {
//         top: "5px"
//     },
//     select: {
//         display: "block",
//         margin: "15px 0 15px",
//         textAlign: "left",
//         bottom:"-30px"
//     },
//     error: {
//         top: "-10px",
//         color: "#450000"
//     }
//   }));

// const classes = useStyles();




// <div className="form-group">
//     <select
//         className="form-control"
//         name={props.name}
//         defaultValue={'DEFAULT'}
//         onChange={props.handleOnChange}
//     >
//         <option value="DEFAULT" disabled>Choose {props.name}</option>
//         { props.values.map((value, index) => { 
//             return <option key = {index} value={props.inputs.value} >{value}</option>;
//         })
//         }
//     </select>
//     {props.error && <p className="mediaInput-input-error">{props.error}</p>}
// </div>