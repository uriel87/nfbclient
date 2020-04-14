
import React, { memo } from 'react'
import './lightbox.css'


const Lightbox = (props) => {

    // console.log("props Lightbox", props)
    
    if(!props.isOpenCmp) { return null }
    return(
        <div>
            <div className="lightboxBackground" onClick={props.OpenCmp}></div>
            {/* <div className={`lightboxBackground ${props.isOpenCmp ? "show-lightbox" : ""}`} onClick={props.OpenCmp}></div> */}

            <div className="lightboxContainer">
            {/* <div className={`lightboxContainer ${props.isOpenCmp ? "show-lightbox" : ""}`}> */}
                <button onClick={props.OpenCmp} className="btn-close-lightbox"><i className="far fa-times-circle"></i></button>
                <h4 className="title-lightbox">{props.headerContent}</h4>
                <div>
                    {props.cmp}

                    { props.cancelBtn? <button type="button" className="btn btn-success" onClick={props.OpenCmp} >Cancel</button>: null}


                    {/* <button type="button" className="btn btn-success" onClick={props.OpenCmp} >Cancel</button> */}
                </div>
            </div>
        </div>
    )
}

export default memo(Lightbox)
