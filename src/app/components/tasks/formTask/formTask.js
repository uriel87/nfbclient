
import React, { useState, memo } from 'react'
import UseForm from '../../../helpers/useForm'
import SelectInput from '../../selectInput/selectInput'
import Input from '../../Input/Input'
import CheckboxInput from '../../checkboxInput/checkboxInput'
import { formInputType, formName, formCategoryInput } from '../../../constant'
import { actionFetch } from '../../../helpers/actionFetch'


const FormTask = (props) => {
    const { inputs, handleOnSubmit, handleOnChange, errors } = UseForm(submit, props.validation);
    const task = props.task
    console.log("FormTask - props", props)
    
    const [isOpenCmp, setIsOpenCmp] = useState(props.isOpenCmp)

    const openCmp = () => {
		setIsOpenCmp(!isOpenCmp)
	}

    function submit() {
        console.log("submit FormTask - inputs", inputs)
        actionFetch(props.fetchAction, inputs, task)
    }
    
    return(
        <div>
            { isOpenCmp?
            <div>
                <div className="lightBoxBackground" onClick={openCmp.bind(this)}></div>
                <div className="lightBoxContainer">
                    <form onSubmit={handleOnSubmit}> 
                        <span onClick={openCmp.bind(this)}>&times;</span>
                        <div className="modal-header">
                            <h4 className="modal-title">Task form</h4>
                            { task ? <h4 className="modal-title">{task.name}</h4> : ""}
                        </div>

                        <Input
                            name={formName.NAME}
                            placeholder={formName.NAME}
                            type={formInputType.TEXT}
                            handleOnChange={handleOnChange}
                            error={errors.name}
                            value={inputs.name} />

                        <Input
                            name={formName.DESCRIPTION}
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
                            label={"Start Time"}
                            type={formInputType.DATE_TIME_LOCAL}
                            handleOnChange={handleOnChange}
                            error={errors.startTime}
                            value={inputs.startTime}
                            min={new Date().toISOString().substring(0,16)} />

                        <Input
                            name={formName.END_TIME}
                            label={"End Time"}
                            type={formInputType.DATE_TIME_LOCAL}
                            handleOnChange={handleOnChange}
                            error={errors.endTime}
                            value={inputs.endTime}
                            min={inputs.startTime} />

                        <CheckboxInput
                            name={formName.DAILY}
                            label={"Daily"}
                            handleOnChange={handleOnChange}
                            error={errors.daily}
                            value={this} /> 

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" onClick={openCmp.bind(this)} >Cancel</button>
                            <button type="submit" className="btn btn-success">Edit task</button>
                        </div>
                        
                    </form>
                </div>
            </div> : <div></div>
        }
        </div>
    )
}

export default memo(FormTask)











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