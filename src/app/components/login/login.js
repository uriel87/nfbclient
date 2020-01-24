import React, { useState, memo } from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setLogin } from "../../actions/auth.action"
import Cookies from 'js-cookie'
import axios from "axios"
import useAuth from "./useAuth"
import validationAuth from "./validationAuth"
import { LOGIN_USER } from "../../queries/query"
import { envRoutes } from "../../routes/constant.routes"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import "./login.css"


const Login = () => {
  console.log("render Login")

  const { authInputs, handleOnSubmit, handleOnChange, errors } = useAuth(submit, validationAuth);
  const [ isLoading, setIsLoading ] = useState(false)
  const dispatch = useDispatch();
  const history = useHistory();

  function submit() {
    getUserToken();
  }

  const getUserToken = async () => {
    try {
      setIsLoading(true);
      const token = await axios.post(envRoutes.envDev, {
        query: LOGIN_USER(authInputs.email, authInputs.password),
        headers: {
          'Content-Type': 'application/json',
          Authorization: ''
        }
      });

      if(token.status !== 200 && token.status !== 201) {
        throw new console.error("Failed");
      }

      dispatch(setLogin(token.data.data.login))
      Cookies.set('auth', token.data.data.login)
      history.push('/balance');
      setIsLoading(false);
    } catch(err) {
        console.log("error login.js - getUserToken")
        setIsLoading(false);
        throw err;
    }
  }

  return(
    <div className="container">
      <div className="modal" id="login">
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={handleOnSubmit}>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <div className="modal-header">
                <h4 className="modal-title">Login</h4>
              </div>
              <div className="modal-body">
                <div className="input-group mb-3">
                  <input
                  className={errors.email && "input-error"} 
                  name="email"
                  type="text"
                  placeholder="Please enter your Email"
                  value={authInputs.email}
                  onChange={handleOnChange}
                  />
                  {errors && <p className="mediaInput-input-error">{errors.email}</p>}
                </div>
              </div>

              <div className="modal-body">
                <div className="input-group mb-3">
                  <input
                  className={errors.password && "input-error"} 
                  name="password"
                  type="password"
                  placeholder="Please enter your password"
                  value={authInputs.password}
                  onChange={handleOnChange}
                  />
                  {errors && <p className="mediaInput-input-error" >{errors.password}</p>}
                </div>
              </div>

              <div className="modal-footer">
                <button type="submit" className="btn btn-primary" >Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Login);
