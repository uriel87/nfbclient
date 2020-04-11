


import React, { memo, useState,  } from 'react'
import Dialog from '../../dialog/dialog'
import { fetchAction, title } from '../../../constant'


const DeleteIncomeBtn = (props) => {

    const [isDeleteCmpOpen, setIsDeleteCmpOpen] = useState(false)
    
    const openDeleteCmp = () => {
		setIsDeleteCmpOpen(!isDeleteCmpOpen)
	}
    
    return (
        <div>
            <button onClick={openDeleteCmp.bind(this)}><i className="far fa-trash-alt action"></i></button>
            { isDeleteCmpOpen?
                <Dialog
                    title = {title.DELETE_INCOME}
                    fetchAction={fetchAction.DELETE_MONTHLY_INCOME}
                    inputs = {props.income}
                    openCmp={openDeleteCmp.bind(this)}
                    isOpenCmp={isDeleteCmpOpen} />
            : null}
        </div>
    )
}

export default memo(DeleteIncomeBtn)










