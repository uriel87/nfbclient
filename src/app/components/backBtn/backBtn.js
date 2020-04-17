




import React, { memo } from 'react'
import { useHistory } from "react-router-dom"
import './backBtn.css'


const BackBtn = (props) => {

    const history = useHistory();

    return(
        <div className="babk-btn" onClick={() => history.goBack()} >
            <i className="fas fa-arrow-circle-left"></i>
        </div>
    )
}

export default memo(BackBtn)
