import React, { useState, useEffect, memo } from 'react'
import UseForm from '../../../helpers/useForm'
import validationEditExpense from '../editExpense/validationEditExpense'
import Cookies from 'js-cookie'
import Loading from '../../loading/loading'
import { fetchData } from "../../../helpers/fetchData"
import { EDIT_EXPENSE } from '../../../queries/mutation'

const EditExpense = (props) => {
    // console.log("render EditExpense - props.expense", props.expense)
    const categories = ["GROCERIES", "CAR", "BILLS", "FUN", "EDUCATION", "DEVICES", "CLOTHINGS", "OTHER"];
    const [ isLoading, setIsLoading ] = useState(false)
    const { inputs, handleOnSubmit, handleOnChange, errors } = UseForm(submit, validationEditExpense);
    const expense = props.expense

    useEffect(() => {

    }, [handleOnSubmit]);

    const [isOpenCmp, setIsOpenCmp] = useState(props.isOpenCmp)

    const openCmp = () => {
		setIsOpenCmp(!isOpenCmp)
	}

    function submit() {
        // console.log("submit EditExpense - inputs", inputs)
        checkEditInput(inputs)
        editExpense()
    }
    
    const checkEditInput = async (inputs) => { 

        inputs.id = expense._id

        if(!inputs.name) {
            inputs.name = expense.name
        }
        if(!inputs.description) {
            inputs.description = expense.description
        }
        if(!inputs.amount) {
            inputs.amount = expense.amount
        }
        if(!inputs.category) {
            inputs.category = expense.category
        }
        if(!inputs.payments) {
            inputs.payments = expense.payments
        }
        // if(!inputs.monthly) {
        //     inputs.monthly = expense.monthly
        // }
    }

    const editExpense = async (expense) => {
        console.log("in EditExpense:", expense)
        try {
            setIsLoading(true);
            const auth = JSON.parse(Cookies.get('auth'))
            await fetchData(EDIT_EXPENSE(inputs, auth.userId))
            setIsLoading(false);
            window.location.reload()
        } catch(err) {
            console.log("error EditExpense.js - EditExpense")
            setIsLoading(false);
            throw err;
        }
    }

    if(isLoading) {return (<Loading />)}
    return(
        <div>
            { isOpenCmp?
            <div>
            <div className="lightBoxBackground" onClick={openCmp.bind(this)}></div>
            <div className="lightBoxContainer">
                <form onSubmit={handleOnSubmit.bind(expense)}> 
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span onClick={openCmp.bind(this)}>&times;</span>
                    </button>
                    <div className="modal-header">
                        <h4 className="modal-title">Edit expense</h4>
                        <h4 className="modal-title">{expense.name}</h4>
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={inputs.name}
                            onChange={handleOnChange}
                            placeholder={expense.name}
                        />
                        {errors && <p className="mediaInput-input-error">{errors.name}</p>}
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="description"
                            value={inputs.description}
                            onChange={handleOnChange}
                            placeholder={expense.description}
                        />
                        {errors && <p className="mediaInput-input-error">{errors.description}</p>}
                    </div>

                    <div className="form-group">
                        <input
                            type="number"
                            className="form-control"
                            name="amount"
                            value={inputs.amount}
                            onChange={handleOnChange}
                            placeholder={expense.amount}
                        />
                        {errors && <p className="mediaInput-input-error">{errors.amount}</p>}
                    </div>

                    {/* <div className="form-group">
                        <div className="form-check">
                            <input
                                className={errors.daily && "input-error"} 
                                name="monthly"
                                type="checkbox"
                                value={this}
                                onChange={handleOnChange}
                            />
                            <label htmlFor="daily" className="form-check-label">monthly</label>
                        </div>
                    </div> */}

                    <div className="form-group">
                        {/* <label htmlFor="exampleFormControlSelect1">Category</label> */}
                        <select
                            className="form-control"
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
                        {/* <label htmlFor="exampleFormControlInput1">payments</label> */}
                        <input
                            type="number"
                            className="form-control"
                            name="payments"
                            value={inputs.payments}
                            onChange={handleOnChange}
                            placeholder="payments"
                        />
                        {errors && <p className="mediaInput-input-error">{errors.payments}</p>}
                    </div>
                    <div className="form-group">
                        <div className="form-check">
                            <input
                                className={errors.daily && "input-error"} 
                                name="monthly"
                                type="checkbox"
                                value={this}
                                onChange={handleOnChange}
                                // checked={expense.monthly}
                            />
                            <label htmlFor="monthly" className="form-check-label">monthly</label>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" onClick={openCmp.bind(this)} >Cancel</button>
                        <button type="submit" className="btn btn-success">Edit expense</button>
                    </div>
                </form>
            </div>
            </div> : ""
            }
        </div>
    )
}

export default memo(EditExpense)