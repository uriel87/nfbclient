
// import React, { memo, useState,  } from 'react'
// import Lightbox from '../lightBox/lightbox'
// import Signup from '../signup/signup'


// const LightboxBtn = (props) => {

//     const [isOpenLightbox, setIsOpenLightbox] = useState(false)

//     const openLightbox = () => {
// 		setIsOpenLightbox(!isOpenLightbox)
//     }
    
//     return (
//         <div>
//             <button type="button" onClick = { openLightbox.bind(this) }>SignUp</button>
//             { isOpenLightbox?
//                 <Lightbox
//                     cmp = { <Signup /> }
//                     headerContent = {props.headerContent}
//                     OpenCmp = { openLightbox.bind(this) }
//                     isOpenCmp = { isOpenLightbox } />
//             : null}
//         </div>
//     )
// }

// export default memo(LightboxBtn)











