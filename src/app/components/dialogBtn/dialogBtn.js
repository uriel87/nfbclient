
import React, { memo, useState,  } from 'react'
import Dialog from '../dialog/dialog'

const DialogBtn = (props) => {

    const [isDeleteCmpOpen, setIsDeleteCmpOpen] = useState(false)
    
    const openDeleteCmp = () => {
		setIsDeleteCmpOpen(!isDeleteCmpOpen)
	}
    
    return (
        <div>
            <button onClick={openDeleteCmp.bind(this)} className="btn-open-dialog">
                {props.content}
            </button>
            { isDeleteCmpOpen?
                <Dialog
                    title = {props.title}
                    question = {props.question}
                    fetchAction={props.fetchAction}
                    inputs = {props.item}
                    openCmp={openDeleteCmp.bind(this)}
                    isOpenCmp={isDeleteCmpOpen} />
            : null}
        </div>
    )
}

export default memo(DialogBtn
    )










