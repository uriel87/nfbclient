
import React, { memo, useState, useEffect, useCallback } from 'react'
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from '../loading/loading'
import { filterByDate } from '../../helpers/filters'
import ExpensesListItem from '../monthlyExpenses/expensesListItem/expencesListItem'
import MonthlyIncomesListItem from '../monthlyIncomes/monthlyIncomesListItem/monthlyIncomesListItem'
import "./monthlyBalance.css"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'


const MonthlyBalance = (props) => {

    const monthlyBalanceRedux = useSelector(state => state.user.monthlyBalanceList)
    const [monthlyBalance, setMonthlyBalance] = useState(monthlyBalanceRedux)
    const [date, setDate] = useState(new Date().toISOString().substr(0,7))

    useEffect(() => {
        setMonthlyBalance(monthlyBalanceRedux)
        // console.log("MonthlyBalance - data", date)
        // console.log("MonthlyBalance - monthlyBalanceRedux", monthlyBalanceRedux)
    }, [date, monthlyBalanceRedux]);
    
    const handleChange = useCallback((event) => {
        event.preventDefault();
        const { value } = event.target;
        setDate(value)
    }, [])

    if(!monthlyBalance) {return (<Loading />)}
    return (
        <div>
            <div className="">
                <h4 className="">Monthly balance page</h4>
            </div>
            <form>
                <input type="month" value={date} onChange={handleChange} />
            </form>
            <div className="header-personal-page">
                { monthlyBalance.map((balance, index) => (
                    balance.isExpense?
                      <ExpensesListItem key={index} expense={balance} />
                    : <MonthlyIncomesListItem key={index} income={balance} />
                ))}
            </div>
      </div>
    )
}

export default memo(MonthlyBalance)


// const [monthlyBalance, setMonthlyBalance] = useState(useSelector(state => state.user.monthlyBalanceList))
// const [monthlyBalance, setMonthlyBalance] = useState(match.params)
//let { monthlyBalance } = useParams();



