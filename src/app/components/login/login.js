import React, { useState, memo } from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setLogin } from "../../actions/auth.action"
import { fetchData } from "../../helpers/fetchData"
import Cookies from 'js-cookie'
import validationAuth from "./validationAuth"
import UseForm from '../../helpers/useForm'
import { LOGIN_USER } from "../../queries/query"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import "./login.css"



const Login = () => {
  const { inputs, handleOnSubmit, handleOnChange, errors } = UseForm(submit, validationAuth);
  const [ isLoading, setIsLoading ] = useState(false)
  const dispatch = useDispatch();
  const history = useHistory();

  function submit() {
    getUserToken();
  }

  const getUserToken = async () => {
    try {
      setIsLoading(true);
      const data = await fetchData(LOGIN_USER(inputs))
      dispatch(setLogin(data.login))
      Cookies.set('auth', data.login)
      history.push('/');
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
                  value={inputs.email}
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
                  value={inputs.password}
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




// console.log("render Login")
// let options = {
//   headers: {
//       'Content-Type': 'application/json',
//       Authorization: ''
//   }
// } 
// const token = await axios.post(
//   envRoutes.envDev,
//   LOGIN_USER(inputs),
//   options
// );

// const {data, status} = await fetchData(LOGIN_USER(inputs))
// if(status !== 200 && status !== 201) {
//   throw new console.error("Failed");
// }

