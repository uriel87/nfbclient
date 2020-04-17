
import React, { memo, useState,  } from 'react'
import { useHistory } from "react-router-dom"

import Lightbox from '../lightbox/lightbox'
import 'font-awesome/css/font-awesome.min.css'


const LightboxBtn = (props) => {

    const [isOpenLightbox, setIsOpenLightbox] = useState(false)
    const history = useHistory();

    const openLightbox = (e) => {
        // if(e.target !== e.currentTarget) return
        setIsOpenLightbox(!isOpenLightbox)
        history.push('/');

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











