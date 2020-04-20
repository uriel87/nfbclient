
import React, { memo, useState } from 'react'
import UseForm from '../../../helpers/useForm'
import SelectInput from '../../selectInput/selectInput'
import Input from '../../input/input'
import CheckboxInput from '../../checkboxInput/checkboxInput'
import Loading from '../../loading/loading'
import { formInputType, formName, formCategoryInput } from '../../../constant'
import { actionFetch } from '../../../helpers/actionFetch'
import "../../../../index.css";


const FormTask = (props) => {

    const [ isLoading, setIsLoading] = useState(false)
    const { inputs, handleOnSubmit, handleOnChange, errors } = UseForm(submit, props.validation);
    
    async function submit() {
        setIsLoading(true)
        await actionFetch(props.fetchAction, inputs, props.task)
        setIsLoading(false)
    }
    
    if(isLoading) {return (<Loading />)}
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