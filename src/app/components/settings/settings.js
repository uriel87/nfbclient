
import React, { memo, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import Cookies from 'js-cookie'
import UseForm from '../../helpers/useForm'
import validationSettings from './validationSettings'
import { fetchData } from "../../helpers/fetchData"
import { EDIT_USER } from '../../queries/mutation'
import { setLogin } from "../../actions/auth.action"
import { Loading } from '../loading/loading';
import './settings.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'


const Settings = () => {
    console.log("render Settings")

    const user= useSelector(state => state.user)
    const dispatch = useDispatch();

    const [ isLoading, setIsLoading ] = useState(false)
    const { inputs, handleOnSubmit, handleOnChange, errors } = UseForm(submit, validationSettings);

    function submit() {
        checkSettingsInput(inputs)
        addExpenses();
    }

    const checkSettingsInput = async (inputs) => { 
        if(!inputs.name) {
            inputs.name = user.name
        }
        if(!inputs.email) {
            inputs.email = user.email
        }
        if(!inputs.tel) {
            inputs.tel = user.tel
        }
    }

    const addExpenses = async () => {
        try {
            setIsLoading(true);
            const auth = JSON.parse(Cookies.get('auth'))
            const data = await fetchData(EDIT_USER(inputs, auth.userId))
            setIsLoading(false);
            dispatch(setLogin(data.editUser))
            Cookies.set('auth', data.editUser)
            window.location.reload()
        } catch(err) {
            console.log("error addExpenses.js - addExpenses")
            setIsLoading(false);
            throw err;
        }
    }

    if(!user || isLoading) {return (<Loading />)}
    return(
        <div>
            <div className="">
                <form onSubmit={handleOnSubmit}>
                <div className="">
                    <h4 className="">Settings</h4>
                </div>
                <div className="modal-body">
                    <div className="input-group mb-3">
                    <label htmlFor="exampleFormControlInput1">Name</label>
                    <input
                        className={errors.name && "input-error"} 
                        name="name"
                        type="text"
                        placeholder={user.name}
                        value={inputs.name}
                        onChange={handleOnChange}
                        />
                    {errors && <p className="mediaInput-input-error">{errors.name}</p>}
                    </div>
                </div>
                <div className="modal-body">
                    <div className="input-group mb-3">
                    <label htmlFor="exampleFormControlInput1">Email</label>
                    <input
                        className={errors.email && "input-error"} 
                        name="email"
                        type="text"
                        placeholder={user.email}
                        value={inputs.email}
                        onChange={handleOnChange}
                        />
                    {errors && <p className="mediaInput-input-error">{errors.email}</p>}
                    </div>
                </div>
                <div className="modal-body">
                    <div className="input-group mb-3">
                    <label htmlFor="exampleFormControlInput1">Password</label>
                    <input
                        className={errors.password && "input-error"} 
                        name="password"
                        type="password"
                        value={inputs.password}
                        onChange={handleOnChange}
                        />
                    {errors && <p className="mediaInput-input-error">{errors.password}</p>}
                    </div>
                </div>
                <div className="modal-body">
                    <div className="input-group mb-3">
                    <label htmlFor="exampleFormControlInput1">Telephone</label>
                    <input
                        className={errors.tel && "input-error"} 
                        name="tel"
                        type="tel"
                        placeholder={user.tel}
                        value={inputs.tel}
                        onChange={handleOnChange}
                        />
                    {errors && <p className="mediaInput-input-error">{errors.tel}</p>}
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="submit" className="btn btn-primary">Save settings</button>
                </div>
                {errors && <p className="mediaInput-input-error">{errors.userExist}</p>}
                </form>
            </div>
        </div>
    )
}

export default memo(Settings)