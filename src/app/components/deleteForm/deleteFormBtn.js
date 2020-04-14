
import React, { memo, useState,  } from 'react'
import DeleteForm from './deleteForm'

const DeleteFormBtn = (props) => {

    const [isDeleteCmpOpen, setIsDeleteCmpOpen] = useState(false)
    
    const openDeleteCmp = () => {
		setIsDeleteCmpOpen(!isDeleteCmpOpen)
	}
    
    return (
        <div>
            <button onClick={openDeleteCmp.bind(this)} className="btn-open-form">
                {props.content}
            </button>
            { isDeleteCmpOpen?
                <DeleteForm
                    title = {props.title}
                    question = {props.question}
                    fetchAction={props.fetchAction}
                    item = {props.item}
                    openCmp={openDeleteCmp.bind(this)}
                    isOpenCmp={isDeleteCmpOpen} />
            : null}
        </div>
    )
}

export default memo(DeleteFormBtn)










