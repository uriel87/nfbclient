
import React, { useState, memo } from 'react'
import {Link} from 'react-router-dom'
import Logout from '../../logout/logout'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './navUser.css'



export const NavUser = (props) => {
    console.log("render NavUser")

    const [isDropdown, setIsDropDown] = useState(false)
    const [showLogout, setShowLogout] = useState(false)
    const [user, setUser] = useState(props.user)
    
    function setDropdown() {
        setIsDropDown(!isDropdown)
    }

    function setLogout() {
        setShowLogout(!showLogout)
    }

    if(!user) {return <div></div>}
    return (
        <div className="dropdown">
            <button onClick= {setDropdown} className="">Hi {user.name}</button>
            <div id="navUser" className= { `dropdown-content ${isDropdown ? "" : "hide" }`}>
                <ul>
                    <li><Link to="/settings" >Settings</Link></li>
                    <li>
                        <button onClick= {setLogout} type="button" className="" data-toggle="modal" data-target="#logout" >Logout</button>
                        <Logout />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default memo(NavUser)







