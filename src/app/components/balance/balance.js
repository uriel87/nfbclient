
import React, { memo } from 'react'
import { useSelector } from "react-redux";
import { Route, NavLink, HashRouter } from "react-router-dom"
import MonthlyBalance from '../monthlyBalance/monthlyBalance'
import MonthlyExpenses from '../monthlyExpenses/monthlyExpenses'
import MonthlyIncomes from '../monthlyIncomes/monthlyIncomes'
import LightboxBtn from '../lightboxBtn/lightboxBtn'
import FormIncome from '../monthlyIncomes/formIncome/formIncome'
import FormExpense from '../monthlyExpenses/formExpense/formExpense'
import { fetchAction, headerContent } from '../../constant'
import validationAddIncome from '../monthlyIncomes/validations/validationAddIncome'
import validationAddExpense from '../monthlyExpenses/validations/validationAddExpense'
import "./balance.css"
import '../lightbox/lightbox.css'
import "../../../index.css"



const Balance = () => {

    const userName = useSelector(state => state.user.name)

    const addIncomeForm = (
        <FormIncome
            validation={validationAddIncome}
            fetchAction={fetchAction.CREATE_MONTHLY_INCOME}/>
    )

    const addExpenseForm = (
        <FormExpense
            validation={validationAddExpense}
            fetchAction={fetchAction.CREATE_MONTHLY_EXPENSE}/>
    )


    return (
        <div className="balance-container">
            <h2>hi {userName}</h2>
            <HashRouter>
                <div>
                    <nav className="nav-balance">
                        <ul>
                            <li><NavLink to="/" >Monthly balance</NavLink></li>
                            <li><NavLink to="/monthlyExpenses" >Monthly expenses</NavLink></li>
                            <li><NavLink to="/monthlyIncomes" >Monthly incomes</NavLink></li>
                        </ul>
                    </nav>
                </div>

                <div className="balance-actions">
                    <div className="add-expense-btn-lightbox">
                        <LightboxBtn headerContent = {headerContent.CREATE_NEW_EXPENSE} cmp={addExpenseForm}/>
                    </div>

                    <div className="add-income-btn-lightbox">
                        <LightboxBtn headerContent = {headerContent.CREATE_NEW_INCOME} cmp={addIncomeForm}/>
                    </div>
                </div>

                <div className="content">
                    <Route path="/" exact render={() => <MonthlyBalance /> } />
                    <Route path="/monthlyExpenses" render={() => <MonthlyExpenses /> } />
                    <Route path="/monthlyIncomes" render={() => <MonthlyIncomes /> } />
                </div>
            </HashRouter>
        </div>
    )
}

export default memo(Balance)















{/* <LightboxBtn content={addIncomeContent} headerContent = {headerContent.CREATE_NEW_INCOME} cmp={addIncomeForm}/> */}
{/* <LightboxBtn content={addExpenseContent} headerContent = {headerContent.CREATE_NEW_EXPENSE} cmp={addExpenseForm}/> */}

{/* <div className="balance-actions">
    <AddIncomeBtn />
    <AddExpenseBtn />
</div> */}












