
import React, { memo, useState, useEffect, useCallback } from 'react'
import { useSelector } from "react-redux";
import Loading from '../loading/loading'
import MonthlyIncomesListItem from './monthlyIncomesListItem/monthlyIncomesListItem'
import { filterMonthlyIncomesByDate, filterCheck } from '../../helpers/filters'
import './monthlyIncomes.css'


const MonthlyIncomes = (props) => {
    
    const monthlyIncomesRedux = useSelector(state => state.user.monthlyIncomesList)
    const [monthlyIncomes, setMonthlyIncomes] = useState(monthlyIncomesRedux)
    const [date, setDate] = useState(new Date().toISOString().substr(0,7))

    useEffect(() => {
        setMonthlyIncomes(monthlyIncomesRedux)
        // console.log("MonthlyIncomes - data", date)
        // console.log("MonthlyIncomes - monthlyIncomesRedux", monthlyIncomesRedux)
    }, [date, monthlyIncomesRedux]);
    
    const handleChange = useCallback((event) => {
        event.preventDefault();
        const { value } = event.target;
        setDate(value)
    }, [])


    if(!monthlyIncomes) {return (<Loading />)}
    return(
        <div>
            <div className="">
                <h4 className="">Monthly incomes page</h4>
            </div>
            <form>
                <input type="month" value={date} onChange={handleChange} />
            </form>
            <div className="header-personal-page">
                { monthlyIncomes.length ? monthlyIncomes.map((income, index) => (
                    <MonthlyIncomesListItem key={index} income={income} />
                )) : "Don't have monthly incomes"}
            </div>
        </div>
    )
}

export default memo(MonthlyIncomes)