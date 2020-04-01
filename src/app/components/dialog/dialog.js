import React, { useState, memo } from 'react'
import { actionFetch } from '../../helpers/actionFetch'

const Dialog = (props) => {
    // console.log("Dialog - props", props)
    const item = props.inputs
    const [isOpenCmp, setIsOpenCmp] = useState(props.isOpenCmp)

    const openCmp = () => {
		setIsOpenCmp(!isOpenCmp)
    }
    
    function submit() {
        // console.log("submit Dialog - item", item)
        actionFetch(props.fetchAction, item)
    }
 
    return(
        <div>
            { isOpenCmp?
            <div>
            <div className="lightBoxBackground" onClick={openCmp.bind(this)}></div>
            <div className="lightBoxContainer">
                <form onSubmit={submit}>
                    <span onClick={openCmp.bind(this)}>&times;</span>
                    <h4 className="modal-title">Delete {item.name}</h4>
                    
                    <div className="modal-body">
                        <label>Are you sure?</label>
                    </div>
                    
                    <div className="modal-footer">
                        <button type="button" className="btn btn-success" onClick={openCmp.bind(this)} >Cancel</button>
                        <button type="submit" className="btn btn-danger">Delete</button>
                    </div>
                </form>
            </div>
            </div> : <div></div>
            }
        </div>
    )
}

export default memo(Dialog)


