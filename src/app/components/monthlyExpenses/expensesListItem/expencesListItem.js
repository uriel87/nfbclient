
import React, { useState, memo } from 'react'
import EditExpense from '../editExpense/editExpense'
import DeleteExpense from '../deleteExpense/deleteExpense'
import './expencesListItem.css'

export const ExpencesListItem = (props) => {
    const [expense, setExpense] = useState(props.expense)

    const [isEditCmpOpen, setIsEditCmpOpen] = useState(false)
    const [isDeleteCmpOpen, setIsDeleteCmpOpen] = useState(false)

    const openUpdateCmp = () => {
		setIsEditCmpOpen(!isEditCmpOpen)
    }
    
    const openDeleteCmp = () => {
		setIsDeleteCmpOpen(!isDeleteCmpOpen)
	}
    
    return (
        <div className="ExpensesListItem"> 
            <p className="">name - {expense.name}</p>
            <p className="">description - {expense.description}</p>
            <p className="">amount - {expense.amount}</p>
            <p className="">category - {expense.category}</p>
            {/* <p className="">paymentLeft - {expenseItem.paymentLeft}</p> */}
            <p className="">time - {expense.time}</p>
            <p className="">year - {expense.year}</p>
            <p className="">month - {expense.month}</p>
            <p className="">monthly - {String(expense.monthly)}</p>

            <div className="link-logout">
                <button onClick={openUpdateCmp.bind(this)}>Edit</button>
			    { isEditCmpOpen? <EditExpense expense={expense} isOpenCmp={isEditCmpOpen}/> : "" }
            </div>

            <div className="link-logout">
                <button onClick={openDeleteCmp.bind(this)}>Delete</button>
			    { isDeleteCmpOpen? <DeleteExpense expense={expense} isOpenCmp={isDeleteCmpOpen}/> : "" }
            </div>
        </div>
    )
}

export default ExpencesListItem


// console.log("in ExpencesListItem - props:", props.expense)
// console.log("in ExpencesListItem - expensesList:", expenseItem)
