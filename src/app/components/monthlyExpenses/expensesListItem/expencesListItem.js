
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


















// const deleteForm = (
//     <DeleteForm
//         fetchAction={fetchAction.DELETE_MONTHLY_EXPENSE}
//         item = {props.expense}  />
// )




{/* <div className="flex-row delete-btn-lightbox">
    <LightboxBtn headerContent = {headerContent.DELETE_EXPENSE} cmp={deleteForm} cancelBtn = {true}/>
</div> */}



{/* <div className="flex-row delete-btn-dialog">
    <DialogBtn
        title = {title.DELETE_EXPENSE}
        question = {question.DELETE_EXPENSE}
        item={props.expense}
        fetchAction={fetchAction.DELETE_MONTHLY_EXPENSE} />
</div> */}


// const expense = props.expense

{/* <div className="flex-row"><EditExpenseBtn expense = {expense}/></div>
<div className="flex-row"><DeleteExpenseBtn expense = {expense}/></div> */}


// import EditExpenseBtn from '../editExpenseBtn/editExpenseBtn'
// import DeleteExpenseBtn from '../deleteExpenseBtn/deleteExpenseBtn'

// const [isEditCmpOpen, setIsEditCmpOpen] = useState(false)
// const [isDeleteCmpOpen, setIsDeleteCmpOpen] = useState(false)

// const openEditCmp = () => {
// 	setIsEditCmpOpen(!isEditCmpOpen)
// }

// const openDeleteCmp = () => {
// 	setIsDeleteCmpOpen(!isDeleteCmpOpen)
// }



{/* <div className="flex-row">
    <span onClick={openEditCmp.bind(this)}><i className="far fa-edit action"></i></span>
    { isEditCmpOpen?
        <LightBox
            cmp={ <FormExpense
                validation={validationEditExpense}
                fetchAction={fetchAction.EDIT_MONTHLY_EXPENSE}
                expense = {expense}/>
            }
            isOpenCmp={isEditCmpOpen}/>
    : null}
</div> */}


{/* <div className="flex-row">
    <span onClick={openDeleteCmp.bind(this)}><i className="far fa-trash-alt action"></i></span>
    { isDeleteCmpOpen?
        <Dialog
            fetchAction={fetchAction.DELETE_MONTHLY_EXPENSE}
            inputs = {expense}
            isOpenCmp={isDeleteCmpOpen}/>
    : null}
</div> */}



// console.log("in ExpencesListItem - props:", props.expense)
// console.log("in ExpencesListItem - expensesList:", expenseItem)



{/* <div className="flex-row">
<span onClick={openEditCmp.bind(this)}><i className="far fa-edit action"></i></span>
{ isEditCmpOpen? <EditExpense expense={expense} isOpenCmp={isEditCmpOpen}/> : <div></div> }
</div> */}

// <div className="flex-row">
//     <span onClick={openEditCmp.bind(this)}><i className="far fa-edit action"></i></span>
//     { isEditCmpOpen? <EditExpense cmp={<About />} expense={expense} isOpenCmp={isEditCmpOpen}/> : <div></div> }
// </div>

// <div className="flex-row">
//     <span onClick={openDeleteCmp.bind(this)}><i className="far fa-trash-alt action"></i></span>
//     { isDeleteCmpOpen? <DeleteExpense expense={expense} isOpenCmp={isDeleteCmpOpen}/> : <div></div> }
// </div>

{/* <div className="flex-row">
    <span onClick={openDeleteCmp.bind(this)}><i className="far fa-trash-alt action"></i></span>
    { isDeleteCmpOpen? <DeleteExpense expense={expense} isOpenCmp={isDeleteCmpOpen}/> : <div></div> }
</div> */}