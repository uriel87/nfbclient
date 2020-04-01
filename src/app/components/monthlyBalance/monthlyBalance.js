
import React, { memo, useState, useEffect, useCallback } from 'react'
import { useSelector } from "react-redux";
import Loading from '../loading/loading'
import { filterByDate } from '../../helpers/filters'
import Chart from '../chart/chart'
import ExpensesListItem from '../monthlyExpenses/expensesListItem/expencesListItem'
import MonthlyIncomesListItem from '../monthlyIncomes/monthlyIncomesListItem/monthlyIncomesListItem'
import TableHeaderBalace from '../tableHeaderBalace/tableHeaderBalace'
import "./monthlyBalance.css"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'


import { sumExpense, sumIncomes ,sumBalance, sumExpectedExpense } from '../../helpers/calculators'
import { filterExpectedExpensesByDate } from '../../helpers/filters'


const MonthlyBalance = (props) => {

    const monthlyBalanceRedux = useSelector(state => state.user.monthlyBalanceList)
    const [monthlyBalance, setMonthlyBalance] = useState()
    const [date, setDate] = useState(new Date().toISOString().substr(0,7))


    const [totalIncomes, setTotalIncomes] = useState()
    const [totalExpenses, setTotalExpenses] = useState()
    const [totalBalance, setTotalBalance] = useState()
    const [charData, setCharData] = useState()
    const totalExpectedExpensesRedux = useSelector(state => state.user.monthlyExpectedExpensesList)
    const [totalExpectedExpenses, setTotalExpectedExpenses] = useState()
    const [totalMonthlyBalance, setTotalMonthlyBalance] = useState()


    useEffect(() => {
        setTotalIncomes(sumIncomes(monthlyBalanceRedux))
        setTotalExpenses(sumExpense(monthlyBalanceRedux))
        setTotalExpectedExpenses(filterExpectedExpensesByDate(totalExpectedExpensesRedux, date))
        setTotalBalance(Math.abs(totalIncomes - totalExpenses))
        setMonthlyBalance(monthlyBalanceRedux)
        setTotalMonthlyBalance(totalExpectedExpenses - totalExpenses)

        setCharData({
            labels:["Balance", "Expenses", "Incomes", "Expected expenses", "Total monthly balance"],
            datasets:[{
                maxBarThickness: 100,
                minBarLength: 10,
                label: ['Total balance'],
                data: [
                    totalBalance,
                    totalExpenses,
                    totalIncomes,
                    totalExpectedExpenses,
                    totalMonthlyBalance
                ],
                backgroundColor: [
                    '#0000ff',
                    '#eb4034',
                    '#45d000',
                    '#ffff00',
                    '#8900B9',
                ]
            }]
        })
    }, [props, totalIncomes, totalBalance, date, monthlyBalanceRedux, totalExpectedExpensesRedux, totalMonthlyBalance]);


    const handleChange = useCallback((event) => {
        event.preventDefault();
        const { value } = event.target;
        setDate(value)
    }, [])

    if(!monthlyBalance && !charData) {return (<Loading />)}
    return (
        <div>
            <div className="header-content">
                <h4>Monthly balance</h4>
            </div>
            <form className="form-date">
                <input type="month" value={date} onChange={handleChange} />
            </form>
            <Chart data = {charData} className="chart"/>
            <div className="table-container" aria-label="Destinations">
                <TableHeaderBalace />
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


{/* <p>Balance: {totalBalance}</p>
<p>Expense: {totalExpenses}</p>
<p>Incomes: {totalIncomes}</p>
<p>Expected expenses: {totalExpectedExpenses}</p>
<p>Total monthly balance: {totalMonthlyBalance}</p> */}



