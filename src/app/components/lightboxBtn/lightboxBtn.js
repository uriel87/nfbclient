
import React, { memo, useState,  } from 'react'
import Lightbox from '../lightbox/lightbox'
import { headerContent } from '../../constant'
import 'font-awesome/css/font-awesome.min.css'
import { useHistory } from "react-router-dom"



const LightboxBtn = (props) => {

    const [isOpenLightbox, setIsOpenLightbox] = useState(false)
    const history = useHistory();

    const openLightbox = () => {
        setIsOpenLightbox(!isOpenLightbox)
        if(props.content != headerContent.LOGOUT ) {
            history.push('/')
        }
    }

    return (
        <div>
            <button type="button" className="btn-open-lightbox" onClick = { openLightbox } >
                {props.content}
            </button>
            <Lightbox
                cmp = { props.cmp }
                headerContent = {props.headerContent}
                openCmp = { openLightbox }
                isOpenCmp = { isOpenLightbox } />
        </div>
    )
}

export default memo(LightboxBtn)











