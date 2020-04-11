
import React, { memo, useState,  } from 'react'
import Lightbox from '../lightbox/lightbox'
import 'font-awesome/css/font-awesome.min.css'


const LightboxBtn = (props) => {

    const [isOpenLightbox, setIsOpenLightbox] = useState(false)

    const openLightbox = () => {
		setIsOpenLightbox(!isOpenLightbox)
    }

    return (
        <div>
            <button type="button" className="btn-open-lightbox" onClick = { openLightbox.bind(this) }>
                {props.content}
            </button>
            { isOpenLightbox?
                <Lightbox
                    cmp = { props.cmp }
                    headerContent = {props.headerContent}
                    OpenCmp = { openLightbox.bind(this) }
                    isOpenCmp = { isOpenLightbox } />
            : null}
        </div>
    )
}

export default memo(LightboxBtn)











