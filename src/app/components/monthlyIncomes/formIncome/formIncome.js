
import React, { memo } from 'react'
import UseForm from '../../../helpers/useForm'
import Input from '../../input/input'
import SelectInput from '../../selectInput/selectInput'
import CheckboxInput from '../../checkboxInput/checkboxInput'
import { formInputType, formName, formCategoryInput } from '../../../constant'
import { actionFetch } from '../../../helpers/actionFetch'
import "../../../../index.css";


const FormIncome = (props) => {

    const { inputs, handleOnSubmit, handleOnChange, errors } = UseForm(submit, props.validation)
    
    function submit() {
        actionFetch(props.fetchAction, inputs, props.income)
    }

    return (
        <div>
            { props.income ? <h4 className="modal-title">{props.income.name}</h4> : ""}
            <form onSubmit={handleOnSubmit}>
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

                <button type="submit" className="cta-btn">Save income</button>

            </form>
        </div>
    )
}

export default memo(FormIncome)





// console.log("FormExpense - props", props)
// const [isOpenCmp, setIsOpenCmp] = useState(props.isOpenCmp)
// const openCmp = () => {
// 	setIsOpenCmp(!isOpenCmp)
// }


{/* console.log("submit FormExpense - inputs", inputs) */}

{/* { isOpenCmp?
<div>
<div className="lightBoxBackground" onClick={openCmp.bind(this)}></div>
<div className="lightBoxContainer">
<span onClick={openCmp.bind(this)}>&times;</span> */}


{/* <button type="button" className="btn btn-danger" onClick={openCmp.bind(this)} >Cancel</button> */}


// </div>
// </div> : <div></div>
// }


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