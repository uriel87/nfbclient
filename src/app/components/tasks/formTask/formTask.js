
import React, { memo, useState } from 'react'
import UseForm from '../../../helpers/useForm'
import SelectInput from '../../selectInput/selectInput'
import Input from '../../input/input'
import CheckboxInput from '../../checkboxInput/checkboxInput'
import { formInputType, formName, formCategoryInput } from '../../../constant'
import { actionFetch } from '../../../helpers/actionFetch'
import "../../../../index.css";


const FormTask = (props) => {

    const { inputs, handleOnSubmit, handleOnChange, errors } = UseForm(submit, props.validation);
    function submit() {
        actionFetch(props.fetchAction, inputs, props.task)
    }
    
    return(
        <div>
            <form onSubmit={handleOnSubmit}> 
                { props.task ? <h4 className="modal-title">{props.task.name}</h4> : ""}
                <Input
                    name={formName.NAME}
                    label={formName.NAME}
                    placeholder={formName.NAME}
                    type={formInputType.TEXT}
                    handleOnChange={handleOnChange}
                    error={errors.name}
                    value={inputs.name} />

                <Input
                    name={formName.DESCRIPTION}
                    label={formName.DESCRIPTION}
                    placeholder={formName.DESCRIPTION}
                    type={formInputType.TEXT}
                    handleOnChange={handleOnChange}
                    error={errors.description}
                    value={inputs.description} />

                <SelectInput
                    name={formName.CATEGORY}
                    handleOnChange={handleOnChange}
                    values={formCategoryInput.TASK_CATEGORIES}
                    error={errors.category}
                    inputs={inputs} />

                <SelectInput
                    name={formName.PRIORITY}
                    handleOnChange={handleOnChange}
                    values={formCategoryInput.TASK_PRIORITIES}
                    error={errors.priority}
                    inputs={inputs} />

                <Input
                    name={formName.START_TIME}
                    label={formName.START_TIME}
                    type={formInputType.DATE_TIME_LOCAL}
                    handleOnChange={handleOnChange}
                    error={errors.startTime}
                    value={inputs.startTime}
                    defaultValue={new Date().toISOString().substring(0,16)}
                    min={new Date().toISOString().substring(0,16)} />

                <Input
                    name={formName.END_TIME}
                    label={formName.END_TIME}
                    type={formInputType.DATE_TIME_LOCAL}
                    defaultValue={new Date().toISOString().substring(0,16)}
                    handleOnChange={handleOnChange}
                    error={errors.endTime}
                    value={inputs.endTime}
                    min={inputs.startTime} />

                <CheckboxInput
                    name={formName.DAILY}
                    label={formName.DAILY}
                    handleOnChange={handleOnChange}
                    error={errors.daily}
                    value={this} /> 

                <button type="submit" className="cta-btn">Save Task</button>

            </form>
        </div>
    )
}

export default memo(FormTask)




        // console.log("submit FormTask - inputs", inputs)


// console.log("FormTask - props", props)
// const [isOpenCmp, setIsOpenCmp] = useState(props.isOpenCmp)
// const openCmp = () => {
// 	setIsOpenCmp(!isOpenCmp)
// }

{/* { isOpenCmp? */}
{/* <div> */}
{/* <div className="lightBoxBackground" onClick={openCmp.bind(this)}></div>
<div className="lightBoxContainer">
<span onClick={openCmp.bind(this)}>&times;</span> */}

{/* <button type="button" className="btn btn-danger" onClick={openCmp.bind(this)} >Cancel</button> */}

{/* </div> */}
{/* </div> : <div></div>
} */}

// const checkEditInput = async (inputs) => { 

//     inputs.id = task._id

//     if(!inputs.name) {
//         inputs.name = task.name
//     }
//     if(!inputs.description) {
//         inputs.description = task.description
//     }
//     if(!inputs.category) {
//         inputs.category = task.category
//     }
//     if(!inputs.priority) {
//         inputs.priority = task.priority
//     }
//     if(!inputs.startTime) {
//         inputs.startTime = task.startTime
//     }
//     if(!inputs.endTime) {
//         inputs.endTime = task.endTime
//     }
//     if(!inputs.daily) {
//         inputs.daily = task.daily
//     }
// }











// const formActionFetch = async (action) => {
//     // console.log("in editTask:", task)
//     try {
//         setIsLoading(true);
//         const auth = JSON.parse(Cookies.get('auth'))
//         switch(action) {
//             case fetchAction.CREATE_TASK:
//                 await fetchData(CREATE_TASK(inputs, auth.userId))
//                 break;
//             case fetchAction.EDIT_TASK:
//                 // checkEditInput(inputs)
//                 await fetchData(EDIT_TASK(inputs, auth.userId))
//                 break;
//             default:
//         }
//         setIsLoading(false);
//         window.location.reload()
//     } catch(err) {
//         console.log("error editTask.js - editTask")
//         setIsLoading(false);
//         throw err;
//     }
// }