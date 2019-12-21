import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import useAuth from "../../useComponent/useAuth/useAuth"
import validationAuth from "../../useComponent/useAuth/validationAuth"

export const Signup = () => {

  const { authInputs, handleOnSubmit, handleOnChange, errors } = useAuth(submit, validationAuth);

  function submit() {
    console.log("submitted in Signup.js")
  }

  return(
    <div className="container">
      <div className="modal" id="signup">
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={handleOnSubmit}>
              <div className="modal-header">
                <h4 className="modal-title">Signup</h4>
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

export default Signup;



