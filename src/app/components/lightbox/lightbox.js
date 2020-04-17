
import React, { memo } from 'react'
import LightboxBg from '../lightboxBg/lightboxBg'
import CloseBtn from '../closeBtn/closeBtn'
import './lightbox.css'


const Lightbox = (props) => {    
    if(!props.isOpenCmp) { return null }
    return(
        <div>
            <LightboxBg openCmp={props.openCmp}/>
            <div className="lightboxContainer">
                <CloseBtn openCmp={props.openCmp} />
                {props.headerContent ? <h4 className="title-lightbox">{props.headerContent}</h4> : null }
                <div>{props.cmp}</div>
            </div>
        </div>
    )
}   

export default memo(Lightbox)
