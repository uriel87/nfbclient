
import React, { memo, useState,  } from 'react'
import FormIncome from '../formIncome/formIncome'
import Lightbox from '../../lightBox/lightbox'
import validationEditIncome from '../validations/validationEditIncome'
import { fetchAction } from '../../../constant'


const EditIncomeBtn = (props) => {

    const [isEditCmpOpen, setIsEditCmpOpen] = useState(false)

    const openEditCmp = () => {
		setIsEditCmpOpen(!isEditCmpOpen)
    }
    
    return (
        <div>
            <button onClick={openEditCmp.bind(this)}><i className="far fa-edit action"></i></button>
            { isEditCmpOpen?
                <Lightbox
                    cmp={ <FormIncome
                        validation={validationEditIncome}
                        fetchAction={fetchAction.EDIT_MONTHLY_INCOME}
                        income = {props.income} />
                    }
                    OpenCmp={openEditCmp.bind(this)}
                    isOpenCmp={isEditCmpOpen} />
            : null}
        </div>
    )
}

export default memo(EditIncomeBtn)










