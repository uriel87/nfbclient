
import React, { memo } from 'react'
import validationAddExpense from './validationAddExpense'
import FormExpense from '../formExpense/formExpense'
import { fetchAction } from '../../../constant'


const AddExpense = (props) => {
    return (
        <div>
            { props.isOpenCmp?
            <div>
            <FormExpense
                validation={validationAddExpense}
                fetchAction={fetchAction.CREATE_MONTHLY_EXPENSE}
                isOpenCmp={props.isOpenCmp}/>
                </div>
             : <div></div>
            }

        </div>
    )
}

export default memo(AddExpense)








// import React, { memo, useState } from 'react'
// import Cookies from 'js-cookie'
// import UseForm from '../../../helpers/useForm'
// import validationAddExpense from './validationAddExpense'
// import Loading from '../../loading/loading'
// import { fetchData } from "../../../helpers/fetchData"
// import { CREATE_MONTHLY_EXPENSES } from '../../../queries/mutation'
// import './addExpense.css'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.js'



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


{/* <div>
<div className="container">
    <div className="modal" id="addExpense">
        <div className="lightBoxBackground" data-dismiss="modal" ></div>
        <div className="modal-dialog">
            <div className="modal-content">
                <form onSubmit={handleOnSubmit} className="form-lightBox">
                    <span type="button" className="close" data-dismiss="modal" aria-label="Close" aria-hidden="true">&times;</span>
                    <div className="modal-header">
                        <h4 className="modal-title">Add expenses</h4>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="expensesName"
                            name="name"
                            value={inputs.name}
                            onChange={handleOnChange}
                            placeholder="Name"
                        />
                        {errors && <p className="mediaInput-input-error">{errors.name}</p>}
                    </div>
                    <div className="form-group">
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
                    </div>
                    <div className="form-group">
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
                    </div>
                    <div className="form-group">
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
                    </div>
                    <div className="form-group">
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
                    </div>

                    <div className="form-group">
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
                        </div>
                    <button type="button" className="btn btn-danger" data-dismiss="modal" aria-label="Close">Cancel</button>
                    <button type="submit" className="btn btn-success">Create expenses</button>
                </form>
            </div>
        </div>
    </div>
</div>
</div> */}
