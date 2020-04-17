
import React, { memo, useState } from 'react'
import UseForm from '../../../helpers/useForm'
import Input from '../../input/input'
import SelectInput from '../../selectInput/selectInput'
import CheckboxInput from '../../checkboxInput/checkboxInput'
import Loading from '../../loading/loading'
import { formInputType, formName, formCategoryInput } from '../../../constant'
import { actionFetch } from '../../../helpers/actionFetch'



const FormExpense = (props) => {

    const [ isLoading, setIsLoading] = useState(false)
    const { inputs, handleOnSubmit, handleOnChange, errors } = UseForm(submit, props.validation)
    
    async function submit() {
        setIsLoading(true)
        await actionFetch(props.fetchAction, inputs, props.expense)
        setIsLoading(false)
    }

    if(isLoading) {return (<Loading />)}
    return (
        <div>
            <form onSubmit={handleOnSubmit} >
                { props.expense ? <h4 className="modal-title">{props.expense.name}</h4> : ""}
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

                <Input
                    name={formName.AMOUNT}
                    label={formName.AMOUNT}
                    placeholder={formName.AMOUNT}
                    type={formInputType.NUMBER}
                    handleOnChange={handleOnChange}
                    error={errors.amount}
                    value={inputs.amount}
                    min={"1"} />

                <Input
                    name={formName.PAYMENTS}
                    label={formName.PAYMENTS}
                    placeholder={formName.PAYMENTS}
                    type={formInputType.NUMBER}
                    handleOnChange={handleOnChange}
                    error={errors.payments}
                    value={inputs.payments}
                    min={"1"} />

                <SelectInput
                    name={formName.CATEGORY}
                    handleOnChange={handleOnChange}
                    values={formCategoryInput.BALANCE_CATEGORIES}
                    error={errors.category}
                    inputs={inputs} />

                <CheckboxInput
                    name={formName.MOUNTHLY}
                    label={formName.MOUNTHLY}
                    handleOnChange={handleOnChange}
                    error={errors.monthly}
                    value={this} /> 

                <button type="submit" className="cta-btn">Save</button>
                
            </form>
        </div>
    )
}

export default memo(FormExpense)
