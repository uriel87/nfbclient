import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import Cookies from 'js-cookie'
import axios from "axios"
import useSignup from "./useSignup"
import validationSignup from "./validationSignup"
import { setLogin } from "../../actions/auth.action"
import { envRoutes } from "../../routes/constant.routes"
import { setErrors } from "../../helpers/errors"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'



export const Signup = () => {

  const { signupInputs, handleOnSubmit, handleOnChange, errors } = useSignup(submit, validationSignup);
  const [ isLoading, setIsLoading ] = useState(false)
  const dispatch = useDispatch();
  const history = useHistory();

  function submit() {
    signup();
  }

  const requestBody = {
    query: `
    mutation {
      createUser(userInput:{
        email: "${signupInputs.email.toLowerCase().trim()}",
        name:"${signupInputs.name}"
        password: "${signupInputs.password}",
        tel:"${signupInputs.tel}"
      }
      ){
        userId
        token
        tokenEcpiration
      }
    }`
  }
  

  const signup = async () => {
    try {
        setIsLoading(true);  
        const token = await axios.post(envRoutes.envDev, {
          query: requestBody.query,
          headers: {
            'Content-Type': 'application/json',
            Authorization: ''
          }
        });
        
        if(token.data.errors) {
          errors.userExist = setErrors(1)
          return;
        }
  
        setIsLoading(false);
        if(token.status !== 200 && token.status !== 201) {
          throw new console.error("Failed");
        }
        
        dispatch(setLogin(token.data.data.createUser))
        Cookies.set('auth', token.data.data.createUser)
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
      <div className="modal" id="signup">
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={handleOnSubmit}>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <div className="modal-header">
                <h4 className="modal-title">Signup</h4>
              </div>
              <div className="modal-body">
                <div className="input-group mb-3">
                  <input
                    className={errors.name && "input-error"} 
                    name="name"
                    type="text"
                    placeholder="Please enter your name"
                    value={signupInputs.name}
                    onChange={handleOnChange}
                    />
                  {errors && <p className="mediaInput-input-error">{errors.name}</p>}
                </div>
              </div>
              <div className="modal-body">
                <div className="input-group mb-3">
                  <input
                    className={errors.email && "input-error"} 
                    name="email"
                    type="text"
                    placeholder="Please enter your Email"
                    value={signupInputs.email}
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
                    type="text"
                    placeholder="Please enter your password"
                    value={signupInputs.password}
                    onChange={handleOnChange}
                    />
                  {errors && <p className="mediaInput-input-error">{errors.password}</p>}
                </div>
              </div>
              <div className="modal-body">
                <div className="input-group mb-3">
                  <input
                    className={errors.tel && "input-error"} 
                    name="tel"
                    type="tel"
                    placeholder="Please enter your Telephone"
                    value={signupInputs.tel}
                    onChange={handleOnChange}
                    />
                  {errors && <p className="mediaInput-input-error">{errors.tel}</p>}
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">Create user</button>
              </div>
              {errors && <p className="mediaInput-input-error">{errors.userExist}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup;



