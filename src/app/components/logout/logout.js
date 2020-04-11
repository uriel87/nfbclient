import React, { memo } from 'react'
import { useHistory } from "react-router-dom";
import Cookies from 'js-cookie'
import './logout.css'

export const Logout = () => {

  const history = useHistory();

    const logout = () => {
      Cookies.remove('auth')
      Cookies.remove('user')
      history.push('/')
    }

    return(
      <div className="logout-container">
        <form onSubmit={logout}>
          <p>Are you sure?</p>
          <div className="logout-btn">
            <button type="submit" className="btn btn-success">Logout</button>
            <button type="button" className="btn btn-danger">Cancel</button>
          </div>
        </form>
      </div>
    )
}

export default memo(Logout);
