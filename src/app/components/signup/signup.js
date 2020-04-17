import React, { memo, useState } from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import Cookies from 'js-cookie'
import UseForm from '../../helpers/useForm'
import validationSignup from "./validationSignup"
import Input from '../../components/input/input'
import Loading from '../loading/loading'
import { setLogin } from "../../actions/auth.action"
import { actionFetch } from '../../helpers/actionFetch'
import { fetchAction } from '../../constant'
import { formInputType, formName } from '../../constant'
// import "../../../index.css";



export const Signup = (props) => {

  const [ isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch();
  const history = useHistory();
  const { inputs, handleOnSubmit, handleOnChange, errors } = UseForm(submit, validationSignup);

  async function submit() {
    try {
        setIsLoading(true)
        const data = await actionFetch(fetchAction.SIGNUP, inputs)
        dispatch(setLogin(data.createUser))
        Cookies.set('auth', data.createUser)
        setIsLoading(false)
        history.push('/expectedExpenses');
    } catch(err) {
        console.log("error in Signup submit ", err)
        setIsLoading(false)
        throw err;
    }
  }

  if(isLoading) {return (<Loading />)}
  return(
      <form onSubmit={handleOnSubmit} className="form-lightbox">
        <Input
            name={formName.NAME}
            label={formName.NAME}
            placeholder={formName.NAME}
            type={formInputType.TEXT}
            handleOnChange={handleOnChange}
            error={errors.name}
            value={inputs.name} />

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

        <Input
            name={formName.TEL}
            label={formName.TEL}
            placeholder={formName.TEL}
            type={formInputType.TEXT}
            handleOnChange={handleOnChange}
            error={errors.tel}
            value={inputs.tel} />

        <button type="submit" className="cta-btn">Create user</button>

        {errors && <p className="mediaInput-input-error">{errors.userExist}</p>}
      </form>
  )
}

export default memo(Signup)