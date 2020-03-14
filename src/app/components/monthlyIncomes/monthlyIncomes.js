
import React, { memo, useCallback, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import Loading from '../loading/loading'
import MonthlyIncomesList from './monthlyIncomesList/monthlyIncomesList'
import AddIncomes from './addIncomes/addIncomes'
import { filterByDate } from '../../helpers/filters'


import './monthlyIncomes.css'


const MonthlyIncomes = () => {
    // console.log("in MonthlyIncomes - monthlyIncomesList:", monthlyIncomesList)
    const monthlyIncomesList = useSelector(state => state.user.monthlyIncomesList)
    const [date, setDate] = useState("")


    const handleChange = useCallback((event) => {
        event.preventDefault();
        const { value } = event.target;
        setDate(value)
    }, [])

    return(
        <div>
            <div className="">
                <h4 className="">Monthly incomes page</h4>
            </div>
            <div className="link-logout">
                <button type="button" className="check" data-toggle="modal" data-target="#addIncomes" data-backdrop="false">Add Incomes</button>
                <AddIncomes />
            </div>
            <div className="header-personal-page">
                <form>
                    <input type="month" value={date} onChange={handleChange} />
                </form>
                { monthlyIncomesList.length ? <MonthlyIncomesList monthlyIncomesList = { monthlyIncomesList } date={date} /> : "Don't have monthly expenses" }
            </div>
        </div>
    )
}

export default memo(MonthlyIncomes)