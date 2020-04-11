
import React, { memo, useState, useEffect, useCallback } from 'react'
import { useSelector } from "react-redux";
import Loading from '../loading/loading'
import ExpensesListItem from './expensesListItem/expencesListItem'
import TableHeaderBalace from '../tableHeaderBalace/tableHeaderBalace'
import Input from '../input/input'
import { formInputType } from '../../constant'
import { filterMonthlyExpensesByDate } from '../../helpers/filters'
import "./monthlyExpenses.css"
import "../../../index.css"



const MonthlyExpenses = (props) => {

    const monthlyExpensesRedux = useSelector(state => state.user.monthlyExpensesList)
    const [date, setDate] = useState(new Date().toISOString().substr(0,7))
    const [monthlyExpenses, setMonthlyExpenses] = useState(filterMonthlyExpensesByDate(monthlyExpensesRedux, date))

    useEffect(() => {
        setMonthlyExpenses(filterMonthlyExpensesByDate(monthlyExpensesRedux, date))
        // console.log("MonthlyExpenses - data", date)
        // console.log("MonthlyExpenses - monthlyExpenses", monthlyExpenses)
    }, [date, monthlyExpensesRedux]);
    
    const handleChange = useCallback((event) => {
        event.preventDefault();
        const { value } = event.target;
        setDate(value)
    }, [])
    
    if(!monthlyExpenses) {return (<Loading />)}
    return (
        <div>
            <h4 className="header-name">Monthly expenses</h4>
            <form className="form-date">
                 <Input
                    type={formInputType.MONTH}
                    handleOnChange={handleChange}
                    value={date} />
            </form>
            <div className="table-container" aria-label="Destinations">
                <TableHeaderBalace />
                { monthlyExpenses.length ? monthlyExpenses.map((expense, index) => (
                    <ExpensesListItem key={index} expense={expense} />
                )) : "Don't have monthly expenses"}
            </div>
      </div>
    )
}

export default memo(MonthlyExpenses)


// const [monthlyExpenses, setMonthlyExpenses] = useState(props.monthlyExpenses)

// useEffect(() => {
//     setMonthlyExpenses(filterByDate(props.monthlyExpenses, props.date))
// }, [props]);

// return (
//     <div>
//         { monthlyExpenses.map((expense, index) => (
//             <ExpensesListItem key={index} expense={expense} />
//         ))}
//     </div>
// )

{/* <div className="link-logout">
    <button type="button" className="check" data-toggle="modal" data-target="#addExpenses" data-backdrop="false">Add Expenses</button>
    <AddExpenses />
</div> */}

//     <div className="header-personal-page">
//     <form>
//         <input type="month" value={date} onChange={handleChange} />
//     </form> */}
//     { monthlyExpenses.length ? <ExpensesList monthlyExpenses = { monthlyExpenses } date={date} /> : "Don't have monthly expenses" }

//     {/* {/* <ExpensesList monthlyExpenses = { userMonthlyExpenses } date={date} /> */}
// </div>



