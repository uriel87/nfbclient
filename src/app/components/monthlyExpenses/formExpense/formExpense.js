
import React, { memo, useState } from 'react'
import UseForm from '../../../helpers/useForm'
import Input from '../../Input/Input'
import SelectInput from '../../selectInput/selectInput'
import CheckboxInput from '../../checkboxInput/checkboxInput'
import { formInputType, formName, formCategoryInput } from '../../../constant'
import { actionFetch } from '../../../helpers/actionFetch'



const FormExpense = (props) => {

    const { inputs, handleOnSubmit, handleOnChange, errors } = UseForm(submit, props.validation);

    const expense = props.expense
    console.log("FormExpense - props", props)
    
    const [isOpenCmp, setIsOpenCmp] = useState(props.isOpenCmp)

    const openCmp = () => {
		setIsOpenCmp(!isOpenCmp)
	}

    function submit() {
        console.log("submit FormExpense - inputs", inputs)
        actionFetch(props.fetchAction, inputs, expense)
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
                            <h4 className="modal-title">Expense form</h4>
                            { expense ? <h4 className="modal-title">{expense.name}</h4> : ""}
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

                        <Input
                            name={formName.PAYMENTS}
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

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" onClick={openCmp.bind(this)} >Cancel</button>
                            <button type="submit" className="btn btn-success">Create expenses</button>
                        </div>
                        
                    </form>
                </div>
            </div> : <div></div>
            }
        </div>
    )
}

export default memo(FormExpense)







// import validationAddExpense from './validationAddExpense'
// import Loading from '../../loading/loading'
// import { fetchData } from "../../../helpers/fetchData"
// import { CREATE_MONTHLY_EXPENSES } from '../../../queries/mutation'



// console.log("render AddExpense")
// const categories = ["GROCERIES", "CAR", "BILLS", "FUN", "EDUCATION", "DEVICES", "CLOTHINGS", "OTHER"];
// const [ isLoading, setIsLoading ] = useState(false)
// const { inputs, handleOnSubmit, handleOnChange, errors } = UseForm(submit, validationAddExpense);


// function submit() {
//     addExpense();
// }

// const addExpense = async () => {
//     try {
//         setIsLoading(true);
//         const auth = JSON.parse(Cookies.get('auth'))
//         await fetchData(CREATE_MONTHLY_EXPENSES(inputs, auth.userId))
//         setIsLoading(false);
//         window.location.reload()
//     } catch(err) {
//         console.log("error addExpense.js - addExpense")
//         setIsLoading(false);
//         throw err;
//     }
// }

// if(isLoading) {return (<Loading />)}


{/* <span type="button" className="close" data-dismiss="modal" aria-label="Close" aria-hidden="true">&times;</span>
<div className="modal-header">
    <h4 className="modal-title">Add expenses</h4>
</div> */}


{/* <div className="form-group">
    <label htmlFor="exampleFormControlInput1">Name</label>
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
</div> */}

                            {/* <div className="form-group">
    <label htmlFor="exampleFormControlInput1">description</label>
    <input
        type="text"
        className="form-control"
        id="expensesDescription"
        name="description"
        value={inputs.description}
        onChange={handleOnChange}
        placeholder="description"
    />
    {errors && <p className="mediaInput-input-error">{errors.description}</p>}
</div> */}



                            {/* <div className="form-group">
    <label htmlFor="exampleFormControlInput1">amount</label>
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
    <label htmlFor="exampleFormControlInput1">payments</label>
    <input
        type="number"
        className="form-control"
        id="expensesPayments"
        name="payments"
        value={inputs.payments}
        onChange={handleOnChange}
        placeholder="payments"
        min="1"
    />
    {errors && <p className="mediaInput-input-error">{errors.payments}</p>}
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
            className={errors.monthly && "input-error"} 
            name="monthly"
            type="checkbox"
            value={this}
            onChange={handleOnChange}
        />
        <label htmlFor="monthly" className="form-check-label">monthly</label>
    </div>
</div> */}



{/* <button type="button" className="btn btn-danger" data-dismiss="modal" aria-label="Close">Cancel</button>
<button type="submit" className="btn btn-success">Create expenses</button> */}
