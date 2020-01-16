
import React from 'react'
import Cookies from 'js-cookie'
import Loading from '../loading/loading'
import useFetch from '../../helpers/useFetch'
import ExpencesList from '../expencesList/expencesList'
import { GET_MOUNTHLY_EXPENSES } from '../../queries/query'
import "./balance.css"


const Balance = () => {
    const auth = JSON.parse(Cookies.get('auth'))
    const userBalanceExpenses = useFetch(GET_MOUNTHLY_EXPENSES, new Date().getFullYear(), new Date().getMonth() + 1);

    if(!userBalanceExpenses.response) {return (<Loading />)}
    return (
        <div>
            <div className="header-personal-page">
                <h1 className="header-page">Balance</h1>
                <ExpencesList expencesList = { userBalanceExpenses.response.getMonthlyExpenses } />
            </div>
      </div>
    )
}

export default Balance

