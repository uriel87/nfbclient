
import React, { memo, useCallback, useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import Cookies from 'js-cookie'
import Loading from '../loading/loading'
import useFetch from '../../helpers/useFetch'
import ExpensesList from '../expensesList/expensesList'
import { GET_MOUNTHLY_EXPENSES_USER } from '../../queries/query'
import "./balance.css"


const Balance = () => {
    const [date, setDate] = useState("")
    const userMonthlyExpenses = useSelector(state => state.user.monthlyExpensesList)
    
    const handleChange = useCallback((event) => {
        event.preventDefault();
        const { value } = event.target;
        setDate(value)
    }, [])
    
    if(!userMonthlyExpenses) {return (<Loading />)}
    return (
        <div>
            <div className="header-personal-page">
                <h1 className="header-page">Balance</h1>
                <form>
                    <input type="month" value={date} onChange={handleChange} />
                    <div className="input-group-append">
                        <button className="btn btn-info" type="submit">
                            <span className="glyphicon glyphicon-search">Search</span>
                        </button>
				    </div>
                </form>
                <ExpensesList userMonthlyExpenses = { userMonthlyExpenses } date={date} />
            </div>
      </div>
    )
}

export default memo(Balance)


//let userMonthlyExpenses = useFetch(GET_MOUNTHLY_EXPENSES_USER, null);


