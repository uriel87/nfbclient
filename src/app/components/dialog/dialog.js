import React, { memo } from 'react'
import { actionFetch } from '../../helpers/actionFetch'

const Dialog = (props) => {
    const item = props.inputs
    
    function submit() {
        actionFetch(props.fetchAction, item)
    }
 
    if(!props.isOpenCmp) { return null }
    return(
        <div>
            <div className="lightboxBackground" onClick={props.openCmp}></div>
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
        </div>
    )
}

export default memo(Dialog)


