
import React, { memo, useState,  } from 'react'
import FormExpense from '../formExpense/formExpense'
import Lightbox from '../../lightbox/lightbox'
import validationEditExpense from '../validations/validationEditExpense'
import { fetchAction } from '../../../constant'
import { PropTypes } from 'carbon-components-react'


const EditExpenseBtn = (props) => {

    const [isEditExpenseCmpOpen, setIsEditExpenseCmpOpen] = useState(false)

    const openEditExpenseCmp = () => {
		setIsEditExpenseCmpOpen(!isEditExpenseCmpOpen)
    }
    
    return (
        <div>
            <button onClick={openEditExpenseCmp.bind(this)}>
                <i className="far fa-edit action"></i>
            </button>
            { isEditExpenseCmpOpen?
                <Lightbox
                    cmp={ <FormExpense
                        validation={validationEditExpense}
                        fetchAction={fetchAction.EDIT_MONTHLY_EXPENSE}
                        expense={props.expense} />
                    }
                    OpenCmp={openEditExpenseCmp.bind(this)}
                    isOpenCmp={isEditExpenseCmpOpen} />
            : null}
        </div>
    )
}

export default memo(EditExpenseBtn)










