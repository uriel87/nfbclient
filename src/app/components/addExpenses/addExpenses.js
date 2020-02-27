
import React, { memo, useState } from 'react'
import Cookies from 'js-cookie'
import UseForm from '../../helpers/useForm'
import validationAddExpenses from './validationAddExpenses'
import { fetchData } from "../../helpers/fetchData"
import { CREATE_MONTHLY_EXPENSES } from '../../queries/mutation'
import './addExpenses.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'


const AddExpenses = () => {
    console.log("render AddExpenses")
    const categories = ["GROCERIES", "CAR", "BILLS", "FUN", "EDUCATION", "DEVICES", "CLOTHINGS", "OTHER"];
    const [ isLoading, setIsLoading ] = useState(false)
    const { inputs, handleOnSubmit, handleOnChange, errors } = UseForm(submit, validationAddExpenses);

    function submit() {
        addExpenses();
    }

    const addExpenses = async () => {
        try {
            setIsLoading(true);
            const auth = JSON.parse(Cookies.get('auth'))
            const data = await fetchData(CREATE_MONTHLY_EXPENSES(inputs, auth.userId))
            setIsLoading(false);
            window.location.reload()
        } catch(err) {
            console.log("error addExpenses.js - addExpenses")
            setIsLoading(false);
            throw err;
        }
    }

    return (
    <div>
        <div className="container">
            <div className="modal" id="addExpenses">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleOnSubmit}>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div className="modal-header">
                                <h4 className="modal-title">Add expenses</h4>
                            </div>
                            <div className="form-group">
                                {/* <label htmlFor="exampleFormControlInput1">Name</label> */}
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
                                {/* <label htmlFor="exampleFormControlInput1">description</label> */}
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
                                {/* <label htmlFor="exampleFormControlInput1">amount</label> */}
                                <input
                                    type="number"
                                    className="form-control"
                                    id="expensesAmount"
                                    name="amount"
                                    value={inputs.amount}
                                    onChange={handleOnChange}
                                    placeholder="amount"
                                />
                                {errors && <p className="mediaInput-input-error">{errors.amount}</p>}
                            </div>
                            <div className="form-group">
                                {/* <label htmlFor="exampleFormControlInput1">payments</label> */}
                                <input
                                    type="number"
                                    className="form-control"
                                    id="expensesPayments"
                                    name="payments"
                                    value={inputs.payments}
                                    onChange={handleOnChange}
                                    placeholder="payments"
                                />
                                {errors && <p className="mediaInput-input-error">{errors.payments}</p>}
                            </div>
                            <div className="form-group">
                                {/* <label htmlFor="exampleFormControlSelect1">Category</label> */}
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
                            <button type="submit" className="btn btn-primary">Add expenses</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default memo(AddExpenses)
