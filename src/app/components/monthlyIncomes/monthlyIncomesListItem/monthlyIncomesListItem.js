
import React, { useState, memo } from 'react'
import DeleteIncome from '../deleteIncome/deleteIncome'
import EditIncome from '../editIncome/editIncome'
import './monthlyIncomesListItem.css'


export const MonthlyIncomesListItem = (props) => {

    const [income, setIncome] = useState(props.income)
    const [isEditCmpOpen, setIsEditCmpOpen] = useState(false)
    const [isDeleteCmpOpen, setIsDeleteCmpOpen] = useState(false)

    const openUpdateCmp = () => {
		setIsEditCmpOpen(!isEditCmpOpen)
    }
    
    const openDeleteCmp = () => {
		setIsDeleteCmpOpen(!isDeleteCmpOpen)
	}

    return (
        <div className="MonthlyIncomesListItem"> 
            <p className="">ID - {income._id}</p>
            <p className="">name - {income.name}</p>
            <p className="">description - {income.description}</p>
            <p className="">amount - {income.amount}</p>
            <p className="">time - {income.time}</p>
            <p className="">year - {income.year}</p>
            <p className="">month - {income.month}</p>
            <p className="">monthly - {String(income.monthly)}</p>

            <div className="link-logout">
                <button onClick={openUpdateCmp.bind(this)}>Edit</button>
			    { isEditCmpOpen? <EditIncome income={income} isOpenCmp={isEditCmpOpen}/> : "" }
            </div>

            <div className="link-logout">
                <button onClick={openDeleteCmp.bind(this)}>Delete</button>
			    { isDeleteCmpOpen? <DeleteIncome income={income} isOpenCmp={isDeleteCmpOpen}/> : "" }
            </div>
        </div>
    )
}

export default memo(MonthlyIncomesListItem)

{/* <button className="btn btn-info media-list-item-btn" onClick={updateIncome.bind(this, income)} >Update income</button>
<button className="btn btn-info media-list-item-btn" onClick={deltetIncome.bind(this, income)} >Delete income</button> */}
