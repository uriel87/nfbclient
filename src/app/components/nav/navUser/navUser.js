
// import React, { useState, memo } from 'react'
// import {Link} from 'react-router-dom'
// import Logout from '../../logout/logout'
// import LightboxBtn from '../../lightboxBtn/lightboxBtn'
// import { headerContent } from '../../../constant'
// import './navUser.css'



// export const NavUser = (props) => {

//     const [isDropdown, setIsDropDown] = useState(false)
//     const user = props.user

//     if(!user) {return null}
//     return (
//         <div className="dropdown">
//             <button onClick= {() => {setIsDropDown(!isDropdown)}} className="nav-user-btn">Hi {user.name} <i className="fas fa-caret-down"></i></button>
//             {isDropdown? 
//                 <div className= "dropdown-content">
//                     <ul>
//                         <li><Link to="/settings" onClick={props.showMobileNav }>Settings</Link></li>
//                         <li className="btn-logout">
//                             <LightboxBtn content={headerContent.LOGOUT} headerContent = {headerContent.LOGOUT} cmp={<Logout />}/>
//                         </li>
//                     </ul>
//                 </div>
//                 : null
//             }
//         </div>
//     )
// }

// export default memo(NavUser)