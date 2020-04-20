
import React, { memo, useState, useEffect, useCallback } from 'react'
import { useSelector } from "react-redux";
import Loading from '../loading/loading'
import MonthlyIncomesListItem from './monthlyIncomesListItem/monthlyIncomesListItem'
import TableHeaderBalace from '../tableHeaderBalace/tableHeaderBalace'
import Input from '../input/input'
import { formInputType } from '../../constant'
import { filterMonthlyIncomesByDate } from '../../helpers/filters'
import './monthlyIncomes.css'
import "../../../index.css"


const MonthlyIncomes = (props) => {

    const monthlyIncomesRedux = useSelector(state => state.user.monthlyIncomesList)
    const [date, setDate] = useState(new Date().toISOString().substr(0,7))
    const [monthlyIncomes, setMonthlyIncomes] = useState(filterMonthlyIncomesByDate(monthlyIncomesRedux,date))

    useEffect(() => {
        setMonthlyIncomes(filterMonthlyIncomesByDate(monthlyIncomesRedux,date))
    }, [date, monthlyIncomesRedux]);
    
    const handleChange = useCallback((event) => {
        event.preventDefault();
        const { value } = event.target;
        setDate(value)
    }, [])


    if(!monthlyIncomes) {return (<Loading />)}
    return(
        <div>
            <h4 className="header-name">Monthly incomes</h4>
            <form className="form-date">
                <Input
                    type={formInputType.MONTH}
                    handleOnChange={handleChange}
                    value={date} />
            </form>
            <div className="table-container" aria-label="Destinations">
                <TableHeaderBalace />
                { monthlyIncomes.length ? monthlyIncomes.map((income, index) => (
                    <MonthlyIncomesListItem key={index} income={income} />
                )) : "Don't have monthly incomes"}
            </div>
        </div>
    )
}

export default memo(MonthlyIncomes)