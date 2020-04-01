
import React, { useState, memo } from 'react'
import EditExpense from '../editExpense/editExpense'
import DeleteExpense from '../deleteExpense/deleteExpense'
// import './expencesListItem.css'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.js'
import 'font-awesome/css/font-awesome.min.css'


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
        <div className="flex-table-rows"> 
            <div className="flex-row" data-label="name">{expense.name}</div>
            <div className="flex-row" data-label="description">{expense.description}</div>
            <div className="flex-row" data-label="amount">- {expense.amountPerMonth}</div>
            <div className="flex-row" data-label="category">{expense.category}</div>
            <div className="flex-row" data-label="time">{expense.time}</div>
            <div className="flex-row" data-label="payments">{expense.payments}</div>
            
            <div className="flex-row">
                <span onClick={openUpdateCmp.bind(this)}><i className="far fa-edit action"></i></span>
                { isEditCmpOpen? <EditExpense expense={expense} isOpenCmp={isEditCmpOpen}/> : <div></div> }
            </div>

            <div className="flex-row">
                <span onClick={openDeleteCmp.bind(this)}><i className="far fa-trash-alt action"></i></span>
                { isDeleteCmpOpen? <DeleteExpense expense={expense} isOpenCmp={isDeleteCmpOpen}/> : <div></div> }
            </div>
        </div>
    )
}

export default memo(ExpencesListItem)


// console.log("in ExpencesListItem - props:", props.expense)
// console.log("in ExpencesListItem - expensesList:", expenseItem)
