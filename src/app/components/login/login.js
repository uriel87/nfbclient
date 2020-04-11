import React, { memo, useState } from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setLogin } from "../../actions/auth.action"
import Cookies from 'js-cookie'
import validationAuth from "./validationAuth"
import UseForm from '../../helpers/useForm'
import Input from '../../components/input/input'
import Loading from '../loading/loading'
import { actionFetch } from '../../helpers/actionFetch'
import { fetchAction } from '../../constant'
import { formInputType, formName } from '../../constant'
import './login.css'





const Login = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const [ isLoading, setIsLoading] = useState(false)
  const { inputs, handleOnSubmit, handleOnChange, errors } = UseForm(submit, validationAuth);

  async function submit() {
    try {
        setIsLoading(true)
        const data = await actionFetch(fetchAction.LOGIN_USER, inputs)
        dispatch(setLogin(data.login))
        Cookies.set('auth', data.login)
        setIsLoading(false)
        history.push('/balance');
    } catch(err) {
        setIsLoading(false)
        console.log("error in Settings submit ", err)
        throw err;
    }
  }

  if(isLoading) {return (<Loading />)}
  return(
    <div className="login-container">
      <form onSubmit={handleOnSubmit}>
        <Input
          name={formName.EMAIL}
          label={formName.EMAIL}
          placeholder={formName.EMAIL}
          type={formInputType.TEXT}
          handleOnChange={handleOnChange}
          error={errors.email}
          value={inputs.email} />

        <Input
          name={formName.PASSWORD}
          label={formName.PASSWORD}
          placeholder={formName.PASSWORD}
          type={formInputType.PASSWORD}
          handleOnChange={handleOnChange}
          error={errors.password}
          value={inputs.password} />

          <button type="submit" className="cta-btn" >Login</button>
      </form>
    </div>
  )
}

export default memo(Login);




















// <div className="container">
//   <div className="modal" id="login">
//     <div className="modal-dialog">
//       <div className="modal-content">
//         <form className="form-lightBox" onSubmit={handleOnSubmit}>
//           <span type="button" className="close" data-dismiss="modal" aria-label="Close" aria-hidden="true"><i className="far fa-times-circle"></i></span>
//             <div className="modal-header">
//               <h4 className="modal-title">Login</h4>
//             </div>

//     </div>
//   </div>
// </div>




// import Loading from '../loading/loading'
// import { LOGIN_USER } from "../../queries/query"
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.js'
// import "./login.css"
// import { fetchData } from "../../helpers/fetchData"
// import React, { memo } from 'react'
// import { useSelector, useDispatch } from "react-redux";
// import Cookies from 'js-cookie'
// import UseForm from '../../helpers/useForm'
// import validationSettings from './validationSettings'
// import { setLogin } from "../../actions/auth.action"




// const { inputs, handleOnSubmit, handleOnChange, errors } = UseForm(submit, validationAuth);
// const [ isLoading, setIsLoading ] = useState(false)
// const dispatch = useDispatch();


// function submit() {
//   getUserToken();
// }

// const getUserToken = async () => {
//   try {
//     setIsLoading(true);
//     const data = await fetchData(LOGIN_USER(inputs))
//     dispatch(setLogin(data.login))
//     Cookies.set('auth', data.login)
//     history.push('/');
//     setIsLoading(false);
//   } catch(err) {
//       console.log("error login.js - getUserToken")
//       setIsLoading(false);
//       throw err;
//   }
// }

// if(isLoading) {return ("")}


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




{/* <div className="modal-body">
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
</div> */}



{/* <div className="modal-body">
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
</div> */}

