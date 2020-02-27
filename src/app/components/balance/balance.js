
import React, { memo, useCallback, useState } from 'react'
import { useSelector } from "react-redux";
import Loading from '../loading/loading'
import ExpensesList from '../expensesList/expensesList'
import AddExpenses from '../addExpenses/addExpenses'
import "./balance.css"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'


const Balance = () => {
    const [date, setDate] = useState("")
    const userMonthlyExpenses = useSelector(state => state.user.monthlyExpensesList)
    console.log("in userMonthlyExpenses - props:", userMonthlyExpenses)

    
    const handleChange = useCallback((event) => {
        event.preventDefault();
        const { value } = event.target;
        setDate(value)
    }, [])
    
    if(!userMonthlyExpenses) {return (<Loading />)}
    return (
        <div>
            <div className="link-logout">
                <button type="button" className="check" data-toggle="modal" data-target="#addExpenses" data-backdrop="false">Add expenses</button>
                <AddExpenses />
            </div>
            <div className="header-personal-page">
                <h1 className="header-page">Balance</h1>
                <form>
                    <input type="month" value={date} onChange={handleChange} />
                </form>
                <ExpensesList monthlyExpenses = { userMonthlyExpenses } date={date} />
            </div>
      </div>
    )
}

export default memo(Balance)

