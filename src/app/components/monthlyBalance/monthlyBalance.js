
import React, { memo, useState, useEffect, useCallback } from 'react'
import { useSelector } from "react-redux";
import Loading from '../loading/loading'
import Chart from '../chart/chart'
import ExpensesListItem from '../monthlyExpenses/expensesListItem/expencesListItem'
import MonthlyIncomesListItem from '../monthlyIncomes/monthlyIncomesListItem/monthlyIncomesListItem'
import TableHeaderBalace from '../tableHeaderBalace/tableHeaderBalace'
import Input from '../input/input'
import { sumExpense, sumIncomes } from '../../helpers/calculators'
import { filterExpectedExpensesByDate, filterMonthlyExpensesByDate, filterMonthlyIncomesByDate } from '../../helpers/filters'
import { formInputType } from '../../constant'
import "./monthlyBalance.css"
import "../../../index.css"


const MonthlyBalance = (props) => {

    const monthlyIncomesRedux = useSelector(state => state.user.monthlyIncomesList)
    const monthlyExpensesRedux = useSelector(state => state.user.monthlyExpensesList)
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
        setMonthlyBalance(filterMonthlyExpensesByDate(monthlyExpensesRedux, date).concat(filterMonthlyIncomesByDate(monthlyIncomesRedux, date)))
        setTotalIncomes(sumIncomes(filterMonthlyIncomesByDate(monthlyIncomesRedux, date)))
        setTotalExpenses(sumExpense(filterMonthlyExpensesByDate(monthlyExpensesRedux, date)))
        setTotalExpectedExpenses(filterExpectedExpensesByDate(totalExpectedExpensesRedux, date))
        setTotalBalance(Math.abs(totalIncomes - totalExpenses))
        setTotalMonthlyBalance((totalExpectedExpenses - totalExpenses).toFixed(2))

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
                    '#FFA400',
                    '#ffb734',
                    '#ffc65f',
                    '#ffd280',
                    '#ffdd9f',
                ]
            }]
        })
    }, [props, totalIncomes, totalBalance, date, monthlyIncomesRedux, monthlyExpensesRedux,totalExpectedExpensesRedux, totalMonthlyBalance]);


    const handleChange = useCallback((event) => {
        event.preventDefault();
        const { value } = event.target;
        setDate(value)
    }, [])

    if(!monthlyBalance && !charData) {return (<Loading />)}
    return (
        <div>
            <h4 className="header-name">Monthly balance</h4>

            <form className="form-date">
                <Input
                    type={formInputType.MONTH}
                    handleOnChange={handleChange}
                    value={date} />
            </form>

            <Chart data = {charData} className="chart"/>
            
            <div className="chart-responsive">
                <h3>Balance</h3>
                <div className="flex-row" data-label="Balance">{totalBalance}</div>
                <div className="flex-row" data-label="Expenses">{totalExpenses}</div>
                <div className="flex-row" data-label="Incomes">{totalIncomes}</div>
                <div className="flex-row" data-label="Expected expenses">{totalExpectedExpenses}</div>
                <div className="flex-row" data-label="Total monthly balance">{totalMonthlyBalance}</div>
            </div>

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





