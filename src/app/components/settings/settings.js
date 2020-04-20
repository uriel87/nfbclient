import React, { memo, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import Cookies from 'js-cookie'
import UseForm from '../../helpers/useForm'
import validationSettings from './validationSettings'
import Input from '../../components/input/input'
import Loading from '../loading/loading'
import { responseCode } from '../../helpers/responseCode'
import { setLogin } from "../../actions/auth.action"
import { actionFetch } from '../../helpers/actionFetch'
import { fetchAction } from '../../constant'
import { formInputType, formName } from '../../constant'
import './settings.css'


const Settings = () => {

    const [ msg, setMsg] = useState()
    const [ status, setStatus] = useState()
    const [ isLoading, setIsLoading] = useState(false)
    const user= useSelector(state => state.user)
    const dispatch = useDispatch();
    const { inputs, handleOnSubmit, handleOnChange, errors } = UseForm(submit, validationSettings);

    async function submit() {
        try {
            setIsLoading(true)
            const data = await actionFetch(fetchAction.EDIT_USER, inputs, user)
            if(data.editUser.status === 4) {
                setMsg(responseCode(data.editUser.status))
                setStatus(data.editUser.status)
                setIsLoading(false)
                return;
            }
            dispatch(setLogin(data.editUser))
            Cookies.set('auth', data.editUser)
            setIsLoading(false)
            window.location.reload()
        } catch(err) {
            console.log("error in Settings submit ", err)
            setIsLoading(false)
            throw err;
        }
    }


    if(isLoading) {return (<Loading />)}
    return(
        <div>
            <div className="settings-container">
                <form onSubmit={handleOnSubmit}>
                    <h4 className="">Personal Settings</h4>

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
                        type={formInputType.TEL}
                        handleOnChange={handleOnChange}
                        error={errors.tel}
                        value={inputs.tel} />

                    <button type="submit" className="cta-btn">Save</button>

                    <p className={ status !== 4 ? "success-msg" : "error-msg"}>{msg}</p>

                </form>
            </div>
        </div>
    )
}

export default memo(Settings)