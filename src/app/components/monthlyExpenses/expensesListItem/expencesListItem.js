
import React, { memo } from 'react'
import LightboxBtn from '../../lightboxBtn/lightboxBtn'
import FormExpense from '../formExpense/formExpense'
import validationEditExpense from '../validations/validationEditExpense'
import DeleteFormBtn from '../../deleteForm/deleteFormBtn'
import { fetchAction, title, question, headerContent } from '../../../constant'
import 'font-awesome/css/font-awesome.min.css'
import "../../../../index.css"


export const ExpencesListItem = (props) => {


    const editForm = (
        <FormExpense
            validation={validationEditExpense}
            fetchAction={fetchAction.EDIT_MONTHLY_EXPENSE}
            expense={props.expense} />
    )
    
    return (
        <div className="flex-table-rows"> 
            <div className="flex-row" data-label="name">{props.expense.name}</div>
            <div className="flex-row" data-label="description">{props.expense.description}</div>
            <div className="flex-row" data-label="amount">-{props.expense.amountPerMonth}</div>
            <div className="flex-row" data-label="category">{props.expense.category}</div>
            <div className="flex-row" data-label="time">{props.expense.time}</div>
            <div className="flex-row" data-label="payments">{props.expense.payments}</div>

            <div className="flex-row edit-btn-lightbox">
                <LightboxBtn headerContent = {headerContent.EDIT_EXPENSE} cmp={editForm}/>
            </div>

            <div className="flex-row delete-btn-form">
                <DeleteFormBtn
                title = {title.DELETE_EXPENSE}
                question = {question.DELETE_EXPENSE}
                item={props.expense}
                fetchAction={fetchAction.DELETE_MONTHLY_EXPENSE} />
            </div>
            
        </div>
    )
}

export default memo(ExpencesListItem)