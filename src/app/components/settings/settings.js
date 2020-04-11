import React, { memo } from 'react'
import { useSelector, useDispatch } from "react-redux";
import Cookies from 'js-cookie'
import UseForm from '../../helpers/useForm'
import validationSettings from './validationSettings'
import Input from '../../components/input/input'
import { setLogin } from "../../actions/auth.action"
import { actionFetch } from '../../helpers/actionFetch'
import { fetchAction } from '../../constant'
import { formInputType, formName } from '../../constant'
import './settings.css'


const Settings = () => {

    const user= useSelector(state => state.user)
    const dispatch = useDispatch();
    const { inputs, handleOnSubmit, handleOnChange, errors } = UseForm(submit, validationSettings);

    async function submit() {
        try {
            const data = await actionFetch(fetchAction.EDIT_USER, inputs, user)
            dispatch(setLogin(data.editUser))
            Cookies.set('auth', data.editUser)
            window.location.reload()
        } catch(err) {
            console.log("error in Settings submit ", err)
            throw err;
        }
    }

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

                    {errors && <p className="mediaInput-input-error">{errors.userExist}</p>}
                </form>
            </div>
        </div>
    )
}

export default memo(Settings)












{/* <div className="modal-footer">
    <button type="submit" className="btn btn-primary">Save</button>
</div> */}

// const submit = async () => {
//     const data = await actionFetch(fetchAction.EDIT_USER, inputs, user)
//     console.log("return Settings submit", data)
//     dispatch(setLogin(data.editUser))
//     Cookies.set('auth', data.editUser)
//     window.location.reload()
// }



// function submit() {
//     checkSettingsInput(inputs)
//     editUserDetails();
// }

// const checkSettingsInput = async (inputs) => {
//     console.log("render checkSettingsInput inputs", inputs)

//     if(!inputs.name) {
//         inputs.name = user.name
//     }
//     if(!inputs.email) {
//         inputs.email = user.email
//     }
//     if(!inputs.tel) {
//         inputs.tel = user.tel
//     }
// }

// const editUserDetails = async () => {
//     try {
//         setIsLoading(true);
//         const auth = JSON.parse(Cookies.get('auth'))
//         const data = await fetchData(EDIT_USER(inputs, auth.userId))
//         setIsLoading(false);
//         dispatch(setLogin(data.editUser))
//         Cookies.set('auth', data.editUser)
//         window.location.reload()
//     } catch(err) {
//         console.log("error PersonalSettings.js - PersonalSettings")
//         setIsLoading(false);
//         throw err;
//     }
// }


// if(!user || isLoading) {return (<Loading />)}


{/* <div className="modal-body">
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
</div> */}



{/* <div className="modal-body">
    <div className="input-group mb-3">
    <label htmlFor="exampleFormControlInput1">Email</label>
    <input
        className={errors.email && "input-error"} 
        name="email"
        type="text"
        placeholder={inputs.email}
        value={inputs.email}
        onChange={handleOnChange}
        />
    {errors && <p className="mediaInput-input-error">{errors.email}</p>}
    </div>
</div> */}



                {/* <div className="modal-body">
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
</div> */}





                {/* <div className="modal-body">
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
</div> */}