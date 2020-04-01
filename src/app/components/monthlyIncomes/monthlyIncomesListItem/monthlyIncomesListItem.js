
import React, { useState, memo } from 'react'
import DeleteIncome from '../deleteIncome/deleteIncome'
import EditIncome from '../editIncome/editIncome'
import './monthlyIncomesListItem.css'


export const MonthlyIncomesListItem = (props) => {

    // const [income, setIncome] = useState(props.income)
    const income = props.income
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
            <div className="flex-row" data-label="name">{income.name}</div>
            <div className="flex-row" data-label="description">{income.description}</div>
            <div className="flex-row" data-label="amount">{income.amount}</div>
            <div className="flex-row" data-label="category">{income.category}</div>
            <div className="flex-row" data-label="time">{income.time}</div>
            <div className="flex-row" data-label="payments"> - </div>

            <div className="flex-row">
                <span onClick={openUpdateCmp.bind(this)}><i className="far fa-edit action"></i></span>
			    { isEditCmpOpen? <EditIncome income={income} isOpenCmp={isEditCmpOpen}/> : <div></div> }
            </div>

            <div className="flex-row">
                <span onClick={openDeleteCmp.bind(this)}><i className="far fa-trash-alt action"></i></span>
			    { isDeleteCmpOpen? <DeleteIncome income={income} isOpenCmp={isDeleteCmpOpen}/> : <div></div> }
            </div>
        </div>
    )
}

export default memo(MonthlyIncomesListItem)

{/* <button className="btn btn-info media-list-item-btn" onClick={updateIncome.bind(this, income)} >Update income</button>
<button className="btn btn-info media-list-item-btn" onClick={deltetIncome.bind(this, income)} >Delete income</button> */}
