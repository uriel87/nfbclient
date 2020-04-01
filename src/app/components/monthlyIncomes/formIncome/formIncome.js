
import React, { memo, useState } from 'react'
import UseForm from '../../../helpers/useForm'
import Input from '../../Input/Input'
import SelectInput from '../../selectInput/selectInput'
import CheckboxInput from '../../checkboxInput/checkboxInput'
import { formInputType, formName, formCategoryInput } from '../../../constant'
import { actionFetch } from '../../../helpers/actionFetch'


const FormIncome = (props) => {

    const { inputs, handleOnSubmit, handleOnChange, errors } = UseForm(submit, props.validation)

    const income = props.income
    console.log("FormExpense - props", props)
    
    const [isOpenCmp, setIsOpenCmp] = useState(props.isOpenCmp)

    const openCmp = () => {
		setIsOpenCmp(!isOpenCmp)
	}

    function submit() {
        console.log("submit FormExpense - inputs", inputs)
        actionFetch(props.fetchAction, inputs, income)
    }

    return (
        <div>
            { isOpenCmp?
            <div>
                <div className="lightBoxBackground" onClick={openCmp.bind(this)}></div>
                <div className="lightBoxContainer">
                    <form onSubmit={handleOnSubmit} className="form-lightBox">
                        <span onClick={openCmp.bind(this)}>&times;</span>
                        <div className="modal-header">
                            <h4 className="modal-title">Income form</h4>
                            { income ? <h4 className="modal-title">{income.name}</h4> : ""}
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

                        <Input
                            name={formName.AMOUNT}
                            placeholder={formName.AMOUNT}
                            type={formInputType.number}
                            handleOnChange={handleOnChange}
                            error={errors.amount}
                            value={inputs.amount} />

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

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" onClick={openCmp.bind(this)} >Cancel</button>
                            <button type="submit" className="btn btn-success">Create income</button>
                        </div>
                        
                    </form>
                </div>
            </div> : <div></div>
            }
        </div>
    )
}

export default memo(FormIncome)










{/* <div className="form-group">
    <input
        type="text"
        className="form-control"
        // id="expensesName"
        name="name"
        value={inputs.name}
        onChange={handleOnChange}
        placeholder="Name"
    />
    {errors && <p className="mediaInput-input-error">{errors.name}</p>}
</div>

{/* <div className="form-group">
    <input
        type="text"
        className="form-control"
        // id="expensesDescription"
        name="description"
        value={inputs.description}
        onChange={handleOnChange}
        placeholder="description"
    />
    {errors && <p className="mediaInput-input-error">{errors.description}</p>}
</div> */}


                                {/* <div className="form-group">
    <input
        type="number"
        className="form-control"
        id="expensesAmount"
        name="amount"
        value={inputs.amount}
        onChange={handleOnChange}
        placeholder="amount"
        min="1"
    />
    {errors && <p className="mediaInput-input-error">{errors.amount}</p>}
</div> */}


                                {/* <div className="form-group">
<label htmlFor="exampleFormControlSelect1">Category</label>
<select
    className="form-control"
    id="expensesCategory"
    name="category"
    onChange={handleOnChange}
    defaultValue={'DEFAULT'}
>
    <option value="DEFAULT" disabled>Choose category</option>
    { categories.map((category, index) => { 
        return <option key = {index} value={inputs.category}  >{category}</option>;
    })
    }
</select>
{errors && <p className="mediaInput-input-error">{errors.category}</p>}
</div> */}



                            {/* <div className="form-group">
    <div className="form-check">
        <input
            className={errors.daily && "input-error"} 
            name="monthly"
            type="checkbox"
            value={this}
            onChange={handleOnChange}
        />
        <label htmlFor="monthly" className="form-check-label">monthly</label>
    </div>
</div> */}