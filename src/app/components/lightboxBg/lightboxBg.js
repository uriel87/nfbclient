

import React, { memo } from 'react'
import './lightboxBg.css'


const LightboxBg = (props) => {
    return( <div className="lightboxBg" onClick={props.openCmp}></div>)
}

export default memo(LightboxBg)
