import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Cookies from 'js-cookie'
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { setLogin } from "../../actions/auth.action"
import { envRoutes } from "../../routes/constant.routes"
import { setErrors } from "../../helpers/errors"

import useSignup from "./useSignup"
import validationSignup from "./validationSignup"



export const Signup = () => {

  const { signupInputs, handleOnSubmit, handleOnChange, errors } = useSignup(submit, validationSignup);
  const [ isLoading, setIsLoading ] = useState(false)
  const dispatch = useDispatch();
  const history = useHistory();

  function submit() {
    console.log("submitted in Signup.js")
    signup();
  }

  // const requestBody = {
  //   query : `
  //   query {
  //     login(email:"${authInputs.email}", password:"${authInputs.password}") {
  //       userId
  //       token
  //       tokenEcpiration
  //     }
  //   }`
  // } 

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
      console.log("getUserToken in login.js")
      try {
        
        setIsLoading(true);  
        const token = await axios.post(envRoutes.envDev, {
          query: requestBody.query
        });

        if(token.data.errors[0].message === setErrors(1)) {
          errors.userExist = setErrors(1)
          console.log("errors.userExist", errors.userExist)
          return;
        }
  
        setIsLoading(false);
        console.log("getUserToken in login.js - token", token.data.data.createUser)
        if(token.status !== 200 && token.status !== 201) {
          throw new console.error("Failed");
        }

        dispatch(setLogin(token.data.data.createUser.token))
        Cookies.set('token', token.data.data.createUser.token)
        Cookies.set('userId', token.data.data.createUser.userId)
        history.push(`/about`);	
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
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <div className="modal-header">
                <h4 className="modal-title">Signup</h4>
              </div>


            <div className="modal-body">
              <div className="input-group mb-3">
                <label>Please enter your name</label>
                <input
                  className={errors.name && "input-error"} 
                  name="name"
                  type="text"
                  placeholder="name"
                  value={signupInputs.name}
                  onChange={handleOnChange}
                  />
                {errors && <p className="mediaInput-input-error">{errors.name}</p>}
              </div>
            </div>

            <div className="modal-body">
              <div className="input-group mb-3">
                <label>Please enter your Email</label>
                <input
                  className={errors.email && "input-error"} 
                  name="email"
                  type="text"
                  placeholder="Email"
                  value={signupInputs.email}
                  onChange={handleOnChange}
                  />
                {errors && <p className="mediaInput-input-error">{errors.email}</p>}
              </div>
            </div>

            <div className="modal-body">
              <div className="input-group mb-3">
                <label>Please enter your password</label>
                <input
                  className={errors.password && "input-error"} 
                  name="password"
                  type="text"
                  placeholder="Password"
                  value={signupInputs.password}
                  onChange={handleOnChange}
                  />
                {errors && <p className="mediaInput-input-error">{errors.password}</p>}
              </div>
            </div>

            <div className="modal-body">
              <div className="input-group mb-3">
                <label>Please enter your Telephone</label>
                <input
                  className={errors.tel && "input-error"} 
                  name="tel"
                  type="tel"
                  placeholder="tel"
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



