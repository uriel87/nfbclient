



import React, { memo } from 'react'
import './closeBtn.css'


const CloseBtn = (props) => {    
    return(
        <div>
            <button onClick={props.openCmp} className="close-btn">
                <i className="far fa-times-circle"></i>
            </button>
        </div>
    )
}

export default memo(CloseBtn)
