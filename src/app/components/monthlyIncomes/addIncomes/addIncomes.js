
import React, { memo, useState } from 'react'
import Cookies from 'js-cookie'
import UseForm from '../../../helpers/useForm'
import validationAddIncomes from './validationAddIncomes'
import { fetchData } from "../../../helpers/fetchData"
import { CREATE_MONTHLY_INCOMES } from '../../../queries/mutation'
import './addIncomes.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'


const AddIncomes = () => {
    console.log("render AddIncomes")
    const [ isLoading, setIsLoading ] = useState(false)
    const { inputs, handleOnSubmit, handleOnChange, errors } = UseForm(submit, validationAddIncomes);

    function submit() {
        AddIncome();
    }

    const AddIncome = async () => {
        try {
            setIsLoading(true);
            const auth = JSON.parse(Cookies.get('auth'))
            const data = await fetchData(CREATE_MONTHLY_INCOMES(inputs, auth.userId))
            setIsLoading(false);
            window.location.reload()
        } catch(err) {
            console.log("error addExpenses.js - addExpenses")
            setIsLoading(false);
            throw err;
        }
    }

    return(
        <div>
            <div className="container">
                <div className="modal" id="addIncomes">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <form onSubmit={handleOnSubmit}>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <div className="modal-header">
                                    <h4 className="modal-title">Add Income</h4>
                                </div>
                                <div className="form-group">
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
                                    <div className="form-check">
                                        <input
                                            className={errors.daily && "input-error"} 
                                            id="monthly"
                                            name="monthly"
                                            type="checkbox"
                                            value={this}
                                            onChange={handleOnChange}
                                        />
                                        <label htmlFor="daily" className="form-check-label">monthly</label>
                                    </div>
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

export default memo(AddIncomes)