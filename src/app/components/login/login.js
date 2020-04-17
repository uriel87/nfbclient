import React, { memo, useState } from 'react'
import { useHistory, Route, NavLink, HashRouter} from "react-router-dom"
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




const Login = (props) => {

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
    <div>
      <p>{props.header}</p>
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

      <section className="login-actions-bottom">
        <NavLink to="/forgotPassword" >Forgot your password?</NavLink>
        <p>Don't have an account yet? <NavLink to="/signUp" >Sign Up!</NavLink></p>
      </section>

    </div>
  )
}

export default memo(Login);






