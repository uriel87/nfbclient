

import React, { memo } from 'react'
import LightboxBg from '../lightboxBg/lightboxBg'
import CloseBtn from '../closeBtn/closeBtn'
import { actionFetch } from '../../helpers/actionFetch'
import './deleteForm.css'

const DeleteForm = (props) => {

    console.log("DeleteForm props", props)
    const item = props.item
    
    function submit() {
        actionFetch(props.fetchAction, item)
    }
 
    return(
        <div>
            <LightboxBg openCmp={props.openCmp}/>
            <div className="lightboxContainer">
                <CloseBtn openCmp={props.openCmp} />
                <h4 className="modal-title">{props.item.name}</h4>
                <p className="delete-question">Are you sure to delete {props.item.name}?</p>
                <form onSubmit={submit}>
                    <div className="delete-form-btns">
                        <button type="button" className="btn btn-success" onClick={props.openCmp} >Cancel</button>
                        <button type="submit" className="btn btn-danger">Delete</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default memo(DeleteForm)