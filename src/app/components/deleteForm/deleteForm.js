

import React, { memo } from 'react'
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
            <div className="lightboxBackground" onClick={props.openCmp}></div>
            <div className="lightboxContainer">
                <button onClick={props.openCmp} className="btn-close-lightbox" ><i className="far fa-times-circle"></i></button>                     
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


{/* <div className="lightboxBackground" onClick={props.openCmp}></div>
<div className="lightboxContainer">
<button onClick={props.openCmp} className="btn-close-lightbox" ><i className="far fa-times-circle"></i></button>                     
    <h2>{props.title}</h2>
        <div className="form-lightbox">
        <form onSubmit={submit}>
            <div className="modal-body">
            <label>{props.question} {item.name}</label>
            </div>
            
            <div className="modal-footer">
                <button type="button" className="btn btn-success" onClick={props.openCmp} >Cancel</button>
                <button type="submit" className="btn btn-danger">Delete</button>
            </div>
        </form>
    </div>
</div>
</div> */}