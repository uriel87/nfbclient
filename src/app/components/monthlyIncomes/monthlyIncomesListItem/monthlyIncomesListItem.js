

import React, { memo } from 'react'
import LightboxBtn from '../../lightboxBtn/lightboxBtn'
import DeleteFormBtn from '../../deleteForm/deleteFormBtn'
import FormIncome from '../formIncome/formIncome'
import validationEditIncome from '../validations/validationEditIncome'
import { fetchAction, title, question, headerContent } from '../../../constant'
import 'font-awesome/css/font-awesome.min.css'
import './monthlyIncomesListItem.css'
import '../../../../index.css'


export const MonthlyIncomesListItem = (props) => {

    const editForm = (
        <FormIncome
            validation={validationEditIncome}
            fetchAction={fetchAction.EDIT_MONTHLY_INCOME}
            income={props.income} />
    )
    
    return (
        <div className="flex-table-rows"> 
            <div className="flex-row" data-label="name">{props.income.name}</div>
            <div className="flex-row" data-label="description">{props.income.description}</div>
            <div className="flex-row" data-label="amount">{props.income.amount}</div>
            <div className="flex-row" data-label="category">{props.income.category}</div>
            <div className="flex-row" data-label="time">{props.income.time}</div>
            <div className="flex-row" data-label="payments"> - </div>
            

            <div className="flex-row edit-btn-lightbox">
                <LightboxBtn content={null} headerContent = {headerContent.EDIT_INCOME} cmp={editForm}/>
            </div>

            <div className="flex-row delete-btn-form">
                <DeleteFormBtn
                    title = {title.DELETE_INCOME}
                    question = {question.DELETE_INCOME}
                    item={props.income}
                    fetchAction={fetchAction.DELETE_MONTHLY_INCOME} />
            </div>
            
        </div>
    )
}

export default memo(MonthlyIncomesListItem)