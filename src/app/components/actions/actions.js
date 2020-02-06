
import React, { memo, useState } from 'react'
import { useHistory } from "react-router-dom"
import Cookies from 'js-cookie'
import UseForm from '../../helpers/useForm'
import validationAddExpenses from './validationAddExpenses'
import { fetchData } from "../../helpers/fetchData"
import { CREATE_MONTHLY_EXPENSES } from '../../queries/mutation'
import './actions.css'


const Actions = () => {
    console.log("render Actions")
    const history = useHistory();
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
            history.push('/balance');
        } catch(err) {
            console.log("error Actions.js - addExpenses")
            setIsLoading(false);
            throw err;
        }
    }

    return (
        <div>
            <h1>Actions page</h1>
            <h2>Add new expenses</h2>
            <form onSubmit={handleOnSubmit}>
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
                        placeholder="Category"
                    >
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
    )
}

export default memo(Actions)



// console.log("options", options)
// const token = await axios.post(
//     envRoutes.envDev, 
//     CREATE_MONTHLY_EXPENSES(inputs),
//     options
// );
