import React, { memo } from 'react'
import { useHistory } from "react-router-dom";
import Cookies from 'js-cookie'
import './logout.css'

export const Logout = () => {

  const history = useHistory();
  // console.log("render Logout")

    const logout = (event) => {
      Cookies.remove('auth')
      Cookies.remove('user')
      history.push('/')
    }

    return(
      <div className="container">
        <div className="modal" id="logout">
          <div className="modal-dialog">
            <div className="modal-content">
              <form onSubmit={logout} className="form-lightBox">
                
                <div className="modal-header">
                  <h4 className="modal-title">logout</h4>
                  <span type="button" className="close" data-dismiss="modal">&times;</span>
                </div>
                
                <div className="modal-body">
                  <label>Are you sure?</label>
                </div>
                
                <div className="modal-footer">
                  <button type="submit" className="btn btn-success">Logout</button>
                  <button type="button" className="btn btn-danger" data-dismiss="modal">Cancel</button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    )
}

export default memo(Logout);
