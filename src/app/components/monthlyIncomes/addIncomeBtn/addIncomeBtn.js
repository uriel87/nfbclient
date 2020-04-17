
import React, { memo, useState,  } from 'react'
import FormIncome from '../formIncome/formIncome'
import Lightbox from '../../lightBox/lightbox'
import validationAddIncome from '../validations/validationAddIncome'
import { fetchAction } from '../../../constant'


const AddIncomeBtn = () => {

    const [isCreateIncomeCmpOpen, setIsCreateIncomeCmpOpen] = useState(false)

    const openCreateIncomeCmp = () => {
		setIsCreateIncomeCmpOpen(!isCreateIncomeCmpOpen)
	}
    
    return (
        <div>
            <button onClick={openCreateIncomeCmp.bind(this)}>
                <i className="fas fa-plus"></i>
                <i className="far fa-credit-card"></i>
            </button>
            { isCreateIncomeCmpOpen?
                <Lightbox
                    cmp={ <FormIncome
                        validation={validationAddIncome}
                        fetchAction={fetchAction.CREATE_MONTHLY_INCOME} />
                    }
                    openCmp={openCreateIncomeCmp.bind(this)}
                    isOpenCmp={isCreateIncomeCmpOpen} />
            : null}
        </div>
    )
}

export default memo(AddIncomeBtn)










