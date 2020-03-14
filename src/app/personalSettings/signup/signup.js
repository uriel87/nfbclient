import React, { useState, memo } from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import Cookies from 'js-cookie'
import Loading from '../loading/loading'
import UseForm from '../../helpers/useForm'
import validationSignup from "./validationSignup"
import { setLogin } from "../../actions/auth.action"
import { SIGNUP } from '../../queries/mutation'
import './node_modules/bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { fetchData } from "../../helpers/fetchData"




export const Signup = () => {
  console.log("render Signup")
  const { inputs, handleOnSubmit, handleOnChange, errors } = UseForm(submit, validationSignup);
  const [ isLoading, setIsLoading ] = useState(false)
  const dispatch = useDispatch();
  const history = useHistory();

  function submit() {
    signup();
  }
  

  const signup = async () => {
    try {
        setIsLoading(true);
        const data = await fetchData(SIGNUP(inputs))        
        dispatch(setLogin(data.createUser))
        Cookies.set('auth', data.createUser)
        history.push('/');
        setIsLoading(false);
      } catch(err) {
        console.log("error login.js - getUserToken", err)
        setIsLoading(false);
        throw err;
      }
    }
  
  if(isLoading) {return (<Loading />)}
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
                    value={inputs.name}
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
                    type="text"
                    placeholder="Please enter your password"
                    value={inputs.password}
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
                    value={inputs.tel}
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

export default memo(Signup);







// if(token.data.errors) {
//   errors.userExist = setErrors(1)
//   return;
// }

// setIsLoading(false);
// if(token.status !== 200 && token.status !== 201) {
//   throw new console.error("Failed");
// }

// const token = await axios.post(envRoutes.envDev, {
//   query: SIGNUP(inputs),
//   headers: {
//     'Content-Type': 'application/json',
//     Authorization: ''
//   }
// });