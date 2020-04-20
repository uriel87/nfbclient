
import React, { memo, useState } from 'react'
import UseForm from '../../helpers/useForm'
import Input from '../../components/input/input.js'
import Loading from '../loading/loading'
import validationForgotPassword from "./validationForgotPassword"
import { actionFetch } from '../../helpers/actionFetch'
import { fetchAction } from '../../constant'
import { formInputType, formName } from '../../constant'
import { responseCode } from '../../helpers/responseCode'
import './forgotPassword.css'


const ForgotPassword = () => {

  const [ msg, setMsg] = useState()
  const [ status, setStatus] = useState()
  const [ isLoading, setIsLoading] = useState(false)
  const { inputs, handleOnSubmit, handleOnChange, errors } = UseForm(submit, validationForgotPassword);

  async function submit() {
    try {
      setIsLoading(true)
      const data = await actionFetch(fetchAction.FORGOT_PASSWORD, inputs)
      console.log("ForgotPassword msg:", data)
      setMsg(responseCode(data.forgotPassword.status))
      setStatus(data.forgotPassword.status)
      setIsLoading(false)
    } catch(err) {
        console.log("error in ForgotPassword submit ", err)
        setIsLoading(false)
        throw err;
    }
  }

  if(isLoading) {return (<Loading />)}
  return(
    <div className="login-container">
      <p>Forgot password</p>
      <form onSubmit={handleOnSubmit}>
        <Input
          name={formName.EMAIL}
          label={formName.EMAIL}
          placeholder={formName.EMAIL}
          type={formInputType.TEXT}
          handleOnChange={handleOnChange}
          error={errors.email}
          value={inputs.email} />

          <p className={ status ? "success-msg" : "error-msg"}>{msg}</p>
          <button type="submit" className="cta-btn" >Send</button>

      </form>
    </div>
  )
}

export default memo(ForgotPassword);






