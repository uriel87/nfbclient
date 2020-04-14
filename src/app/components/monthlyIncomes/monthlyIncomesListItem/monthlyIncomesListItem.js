

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






















// const deleteForm = (
//     <DeleteForm
//         fetchAction={fetchAction.DELETE_MONTHLY_INCOME}
//         item = {props.income}  />
// )



{/* <div className="flex-row delete-btn-lightbox">
    <LightboxBtn headerContent = {headerContent.DELETE_INCOME} cmp={deleteForm} cancelBtn = {true}/>
</div> */}


{/* <div className="flex-row delete-btn-dialog">
    <DialogBtn
        title = {title.DELETE_INCOME}
        question = {question.DELETE_INCOME}
        item={props.income}
        fetchAction={fetchAction.DELETE_MONTHLY_INCOME} />
</div> */}



{/* <div className="flex-row"><EditIncomeBtn income={income} /></div>
<div className="flex-row"><DeleteIncomeBtn income={income} /></div> */}


// import EditIncomeBtn from '../editIncomeBtn/editIncomeBtn'
// import DeleteIncomeBtn from '../deleteIncomeBtn/deleteIncomeBtn'

{/* <button className="btn btn-info media-list-item-btn" onClick={updateIncome.bind(this, income)} >Update income</button>
<button className="btn btn-info media-list-item-btn" onClick={deltetIncome.bind(this, income)} >Delete income</button> */}



{/* <div className="flex-row">
    <span onClick={openEditCmp.bind(this)}><i className="far fa-edit action"></i></span>
    { isEditCmpOpen? <EditIncome income={income} isOpenCmp={isEditCmpOpen}/> : <div></div> }
</div> */}




{/* <div className="flex-row">
    <span onClick={openEditCmp.bind(this)}><i className="far fa-edit action"></i></span>
    { isEditCmpOpen?
        <LightBox
            cmp={ <FormIncome
                validation={validationEditIncome}
                fetchAction={fetchAction.EDIT_MONTHLY_INCOME}
                income = {income} />
            }
            isOpenCmp={isEditCmpOpen}/>
    : null}
</div> */}

{/* <div className="flex-row">
    <span onClick={openDeleteCmp.bind(this)}><i className="far fa-trash-alt action"></i></span>
    { isDeleteCmpOpen?
        <Dialog
            fetchAction={fetchAction.DELETE_MONTHLY_INCOME}
            inputs = {income}
            isOpenCmp={isDeleteCmpOpen}/>
    : null}
</div> */}




{/* <div className="flex-row">
    <span onClick={openDeleteCmp.bind(this)}><i className="far fa-trash-alt action"></i></span>
    { isDeleteCmpOpen? <DeleteIncome income={income} isOpenCmp={isDeleteCmpOpen}/> : <div></div> }
</div> */}
