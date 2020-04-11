
import React, { memo, useState,  } from 'react'
import FormExpense from '../formExpense/formExpense'
import Lightbox from '../../lightBox/lightbox'
import validationAddExpense from '../validations/validationAddExpense'
import { fetchAction } from '../../../constant'


const AddExpenseBtn = (props) => {

    const [isCreateExpenseCmpOpen, setIsCreateExpenseCmpOpen] = useState(false)

    const openCreateExpenseCmp = () => {
		setIsCreateExpenseCmpOpen(!isCreateExpenseCmpOpen)
    }
    
    return (
        <div>
            <button onClick={openCreateExpenseCmp.bind(this)}>
                <i className="fas fa-minus"></i>
                <i className="far fa-credit-card"></i>
            </button>
            { isCreateExpenseCmpOpen?
                <Lightbox
                    cmp={ <FormExpense
                        validation={validationAddExpense}
                        fetchAction={fetchAction.CREATE_MONTHLY_EXPENSE} />
                    }
                    OpenCmp={openCreateExpenseCmp.bind(this)}
                    isOpenCmp={isCreateExpenseCmpOpen} />
            : null}
        </div>
    )
}

export default memo(AddExpenseBtn)










