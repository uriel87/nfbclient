import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../../actions/auth.action"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import axios from "axios";
import { envRoutes } from "../../routes/constant.routes"
import useAuth from "../../useComponent/useAuth/useAuth"
import validationAuth from "../../useComponent/useAuth/validationAuth"


const Login = () => {

  const { authInputs, handleOnSubmit, handleOnChange, errors } = useAuth(submit, validationAuth);
  const [ isLoading, setIsLoading ] = useState(false)
  const dispatch = useDispatch();
  const history = useHistory();

  function submit() {
    console.log("submitted in login.js")
    getUserToken();
  }

  const requestBody = {
    query : `
    query {
      login(email:"${authInputs.email}", password:"${authInputs.password}") {
        userId
        token
        tokenEcpiration
      }
    }`
  } 


  // const requestBody = {
  //   query : `
  //     query Login($email: String!, $password: String!) {
  //       login(email: $email, password: $password) {
  //         userId
  //         token
  //         tokenEcpiration
  //       }
  //     }
  //   `,
  //   variables: {
  //     email: authInputs.email,
  //     password: authInputs.password
  //   }
  // }

  const getUserToken = async () => {
    console.log("getUserToken in login.js")
    try {
      setIsLoading(true);
      console.log("requestBody.query", requestBody)

      const token = await axios.post(envRoutes.envDev, {
        query: requestBody.query
      });

      setIsLoading(false);
      console.log("getUserToken in login.js - token", token.data.data.login)
      if(token.status !== 200 && token.status !== 201) {
        throw new console.error("Failed");
      }
      dispatch(setLogin(token.data.data.login))
      history.push(`/about`);	
      //return token;
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
              <div className="modal-header">
                <h4 className="modal-title">Login</h4>
              </div>
              <div className="modal-body">
                <div className="input-group mb-3">
                  <label>Please enter your Email</label>
                  <input
                  className={errors.email && "input-error"} 
                  name="email"
                  type="text"
                  placeholder="Email"
                  value={authInputs.email}
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
                  value={authInputs.password}
                  onChange={handleOnChange}
                  />
                  {errors && <p className="mediaInput-input-error">{errors.password}</p>}
                </div>
              </div>

              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;



