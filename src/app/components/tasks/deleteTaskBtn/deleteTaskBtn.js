


import React, { memo, useState,  } from 'react'
import Dialog from '../../dialog/dialog'
import { fetchAction, title } from '../../../constant'


const DeleteTaskBtn = (props) => {

    const [isDeleteCmpOpen, setIsDeleteCmpOpen] = useState(false)
    
    const openDeleteCmp = () => {
		setIsDeleteCmpOpen(!isDeleteCmpOpen)
	}
    
    return (
        <div>
            <button onClick={openDeleteCmp.bind(this)}><i className="far fa-trash-alt action"></i></button>
            { isDeleteCmpOpen?
                <Dialog
                    title = {title.DELETE_TASK}
                    fetchAction={fetchAction.DELETE_TASK}
                    inputs = {props.task}
                    openCmp={openDeleteCmp.bind(this)}
                    isOpenCmp={isDeleteCmpOpen} />
            : null}
        </div>
    )
}

export default memo(DeleteTaskBtn)










