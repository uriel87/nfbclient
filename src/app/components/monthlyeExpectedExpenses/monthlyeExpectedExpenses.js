
import React, { memo } from 'react'
import UseForm from '../../helpers/useForm'
import validationExpectedExpenses from './validationExpectedExpenses'
import Input from '../../components/input/input'
import { actionFetch } from '../../helpers/actionFetch'
import { fetchAction } from '../../constant'
import { formInputType, formName } from '../../constant'
import"./monthlyeExpectedExpenses.css"
import "../../../index.css"



const MonthlyeExpectedExpenses = (props) => {

    const { inputs, handleOnSubmit, handleOnChange, errors } = UseForm(submit, validationExpectedExpenses)

    function submit() {
        actionFetch(fetchAction.CREATE_EXPECTED_EXPENSES, inputs)
    }

    return(
        <div className="expected-expenses-container">
            <h4 className="header-name">Expected expenses</h4>
            <form onSubmit={handleOnSubmit}>

                <Input
                    name={formName.GROCERIES}
                    label={formName.GROCERIES}
                    placeholder={formName.GROCERIES}
                    type={formInputType.NUMBER}
                    handleOnChange={handleOnChange}
                    error={errors.groceries}
                    value={inputs.groceries}
                    min={"0"} />

                <Input
                    name={formName.CAR}
                    label={formName.CAR}
                    placeholder={formName.CAR}
                    type={formInputType.NUMBER}
                    handleOnChange={handleOnChange}
                    error={errors.car}
                    value={inputs.car}
                    min={"0"} />

                <Input
                    name={formName.BILLS}
                    label={formName.BILLS}
                    placeholder={formName.BILLS}
                    type={formInputType.NUMBER}
                    handleOnChange={handleOnChange}
                    error={errors.bills}
                    value={inputs.bills}
                    min={"0"} />

                <Input
                    name={formName.FUN}
                    label={formName.FUN}
                    placeholder={formName.FUN}
                    type={formInputType.NUMBER}
                    handleOnChange={handleOnChange}
                    error={errors.fun}
                    value={inputs.fun}
                    min={"0"} />

                <Input
                    name={formName.EDUCATION}
                    label={formName.EDUCATION}
                    placeholder={formName.EDUCATION}
                    type={formInputType.NUMBER}
                    handleOnChange={handleOnChange}
                    error={errors.education}
                    value={inputs.education}
                    min={"0"} />

                <Input
                    name={formName.DEVICES}
                    label={formName.DEVICES}
                    placeholder={formName.DEVICES}
                    type={formInputType.NUMBER}
                    handleOnChange={handleOnChange}
                    error={errors.devices}
                    value={inputs.devices}
                    min={"0"} />

                <Input
                    name={formName.CLOTHINGS}
                    label={formName.CLOTHINGS}
                    placeholder={formName.CLOTHINGS}
                    type={formInputType.NUMBER}
                    handleOnChange={handleOnChange}
                    error={errors.clothings}
                    value={inputs.clothings}
                    min={"0"} />

                <Input
                    name={formName.OTHER}
                    label={formName.OTHER}
                    placeholder={formName.OTHER}
                    type={formInputType.NUMBER}
                    handleOnChange={handleOnChange}
                    error={errors.other}
                    value={inputs.other}
                    min={"0"} />

                <button type="submit" className="cta-btn">Save</button>

            </form>
        </div>
    )
}

export default memo(MonthlyeExpectedExpenses)







// useEffect(() => {
//     setExpectedExpenses(expectedExpensesRedux.slice(0))
//     console.log("useEffect - expectedExpenses", expectedExpenses)
// }, [expectedExpensesRedux]);

// const EditExpectedExpenses = async () => {
//     try {
//         setIsLoading(true);
//         const auth = JSON.parse(Cookies.get('auth'))
//         await fetchData(CREATE_EXPECTED_EXPENSES(inputs, auth.userId))
//         setIsLoading(false);
//         window.location.reload()
//     } catch(err) {
//         console.log("error addExpense.js - addExpense")
//         setIsLoading(false);
//         throw err;
//     }
// }



// console.log("render MonthlyeExpectedExpenses")
// const expectedExpensesRedux = useSelector(state => state.user.monthlyExpectedExpensesList)
// const [ expectedExpenses, setExpectedExpenses ] = useState(expectedExpensesRedux.slice(0))

// const expectedExpenses = useSelector(state => state.user.monthlyExpectedExpensesList)

// console.log("expectedExpenses", expectedExpenses[expectedExpenses.length - 1])

// const [ isLoading, setIsLoading ] = useState(false)



// import { useSelector } from "react-redux";
// import Cookies from 'js-cookie'
// import Loading from '../loading/loading'
// import { fetchData } from "../../helpers/fetchData"
// import { CREATE_EXPECTED_EXPENSES } from '../../queries/mutation'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.js'
// import './monthlyeExpectedExpenses.css'



{/* <div className="form-group">
<label htmlFor="exampleFormControlInput1">Groceries</label>
<input
type="number"
className="form-control"
name="groceries"
value={inputs.groceries}
onChange={handleOnChange}
placeholder={expectedExpenses.groceries}
min="0"
/>
{errors && <p className="mediaInput-input-error">{errors.groceries}</p>}
</div> */}



{/* <div className="form-group">
<label htmlFor="exampleFormControlInput1">Car</label>
<input
type="number"
className="form-control"
name="car"
value={inputs.car}
onChange={handleOnChange}
// placeholder={expectedExpenses.car}
min="0"
/>
{errors && <p className="mediaInput-input-error">{errors.car}</p>}
</div> */}


{/* <div className="form-group">
<label htmlFor="exampleFormControlInput1">Bills</label>
<input
type="number"
className="form-control"
name="bills"
value={inputs.bills}
onChange={handleOnChange}
// placeholder={expectedExpenses.bills}
min="0"
/>
{errors && <p className="mediaInput-input-error">{errors.bills}</p>}
</div> */}


{/* <div className="form-group">
<label htmlFor="exampleFormControlInput1">Fun</label>
<input
type="number"
className="form-control"
name="fun"
value={inputs.fun}
onChange={handleOnChange}
// placeholder={expectedExpenses.fun}
min="0"
/>
{errors && <p className="mediaInput-input-error">{errors.fun}</p>}
</div> */}



{/* <div className="form-group">
<label htmlFor="exampleFormControlInput1">Education</label>
<input
type="number"
className="form-control"
name="education"
value={inputs.education}
onChange={handleOnChange}
// placeholder={expectedExpenses.education}
min="0"
/>
{errors && <p className="mediaInput-input-error">{errors.education}</p>}
</div> */}


{/* <div className="form-group">
<label htmlFor="exampleFormControlInput1">Devices</label>
<input
type="number"
className="form-control"
name="devices"
value={inputs.devices}
onChange={handleOnChange}
// placeholder={expectedExpenses.devices}
min="0"
/>
{errors && <p className="mediaInput-input-error">{errors.devices}</p>}
</div> */}






{/* <div className="form-group">
<label htmlFor="exampleFormControlInput1">Clothings</label>
<input
type="number"
className="form-control"
name="clothings"
value={inputs.clothings}
onChange={handleOnChange}
// placeholder={expectedExpenses.clothings}
min="0"
/>
{errors && <p className="mediaInput-input-error">{errors.clothings}</p>}
</div> */}
{/* <div className="form-group">
<label htmlFor="exampleFormControlInput1">Other</label>
<input
type="number"
className="form-control"
name="other"
value={inputs.other}
onChange={handleOnChange}
// placeholder={expectedExpenses.other}
min="0"
/>
{errors && <p className="mediaInput-input-error">{errors.other}</p>}
</div> */}


// const checkExpectedExpensesInput = async (inputs) => {
//     console.log("render checkExpectedExpensesInput inputs", inputs)
//     if(!inputs.groceries) {
//         inputs.groceries = expectedExpenses.groceries
//     }
//     if(!inputs.car) {
//         inputs.car = expectedExpenses.car
//     }
//     if(!inputs.fun) {
//         inputs.fun = expectedExpenses.fun
//     }
//     if(!inputs.bills) {
//         inputs.bills = expectedExpenses.bills
//     }
//     if(!inputs.education) {
//         inputs.education = expectedExpenses.education
//     }
//     if(!inputs.devices) {
//         inputs.devices = expectedExpenses.devices
//     }
//     if(!inputs.clothings) {
//         inputs.clothings = expectedExpenses.clothings
//     }
//     if(!inputs.other) {
//         inputs.other = expectedExpenses.other
//     }
// }



