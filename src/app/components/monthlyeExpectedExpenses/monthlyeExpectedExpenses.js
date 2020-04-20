
import React, { memo } from 'react'
import Input from '../../components/input/input.js'
import UseForm from '../../helpers/useForm'
import validationExpectedExpenses from './validationExpectedExpenses'
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


// const [ isLoading, setIsLoading ] = useState(false)