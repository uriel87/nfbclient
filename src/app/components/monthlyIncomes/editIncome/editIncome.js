
import React, { memo } from 'react'
import validationEditIncome from '../editIncome/validationEditIncome'
import { fetchAction } from '../../../constant'
import FormIncome from '../formIncome/formIncome'


const EditIncome = (props) => {

    const income = props.income

    return(
        <div>
            { props.isOpenCmp?
            <div>
            <FormIncome
                validation={validationEditIncome}
                fetchAction={fetchAction.EDIT_MONTHLY_INCOME}
                income = {income}
                isOpenCmp={props.isOpenCmp}/>
                </div>
            : <div></div>
            }
        </div>
    )
}

export default memo(EditIncome)






// import UseForm from '../../../helpers/useForm'
// import Cookies from 'js-cookie'
// import Loading from '../../loading/loading'
// import { fetchData } from "../../../helpers/fetchData"
// import { EDIT_INCOME } from '../../../queries/mutation'


// console.log("render EditIncome - props.income", props.income)
// const categories = ["GROCERIES", "CAR", "BILLS", "FUN", "EDUCATION", "DEVICES", "CLOTHINGS", "OTHER"];
// const [ isLoading, setIsLoading ] = useState(false)
// const { inputs, handleOnSubmit, handleOnChange, errors } = UseForm(submit, validationEditIncome);


// useEffect(() => {

// }, [handleOnSubmit]);

// const [isOpenCmp, setIsOpenCmp] = useState(props.isOpenCmp)

// const openCmp = () => {
// 	setIsOpenCmp(!isOpenCmp)
// }

// function submit() {
//     console.log("submit EditIncome - inputs", inputs)
//     checkEditInput(inputs)
//     editIncome()
// }

// const checkEditInput = async (inputs) => { 

//     inputs.id = income._id

//     if(!inputs.name) {
//         inputs.name = income.name
//     }
//     if(!inputs.description) {
//         inputs.description = income.description
//     }
//     if(!inputs.amount) {
//         inputs.amount = income.amount
//     }
//     if(!inputs.monthly) {
//         inputs.monthly = income.monthly
//     }
//     if(!inputs.category) {
//         inputs.category = income.category
//     }
// }

// const editIncome = async (income) => {
//     console.log("in EditIncome:", income)
//     try {
//         setIsLoading(true);
//         const auth = JSON.parse(Cookies.get('auth'))
//         await fetchData(EDIT_INCOME(inputs, auth.userId))
//         setIsLoading(false);
//         window.location.reload()
//     } catch(err) {
//         console.log("error EditIncome.js - EditIncome")
//         setIsLoading(false);
//         throw err;
//     }
// }





// <div>
//     { isOpenCmp?
//     <div>
//     <div className="lightBoxBackground" onClick={openCmp.bind(this)}></div>
//     <div className="lightBoxContainer">
//         <form onSubmit={handleOnSubmit.bind(income)}> 
//             {/* <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                 <span onClick={openCmp.bind(this)}>&times;</span>
//             </button> */}
//             <span onClick={openCmp.bind(this)}>&times;</span>

//             <div className="modal-header">
//                 <h4 className="modal-title">Edit income</h4>
//                 <h4 className="modal-title">{income.name}</h4>
//             </div>
//             <div className="form-group">
//                 <input
//                     type="text"
//                     className="form-control"
//                     name="name"
//                     value={inputs.name}
//                     onChange={handleOnChange}
//                     placeholder={income.name}
//                 />
//                 {errors && <p className="mediaInput-input-error">{errors.name}</p>}
//             </div>

//             <div className="form-group">
//                 <input
//                     type="text"
//                     className="form-control"
//                     name="description"
//                     value={inputs.description}
//                     onChange={handleOnChange}
//                     placeholder={income.description}
//                 />
//                 {errors && <p className="mediaInput-input-error">{errors.description}</p>}
//             </div>

//             <div className="form-group">
//                 <input
//                     type="number"
//                     className="form-control"
//                     name="amount"
//                     value={inputs.amount}
//                     onChange={handleOnChange}
//                     placeholder={income.amount}
//                     min="1"
//                 />
//                 {errors && <p className="mediaInput-input-error">{errors.amount}</p>}
//             </div>

//             <div className="form-group">
//                 <select
//                     className="form-control"
//                     name="category"
//                     onChange={handleOnChange}
//                     defaultValue={'DEFAULT'}
//                 >
//                     <option value="DEFAULT" disabled>Choose category</option>
//                     { categories.map((category, index) => { 
//                         return <option key = {index} value={inputs.category}  >{category}</option>;
//                         })
//                     }
//                 </select>
//                 {errors && <p className="mediaInput-input-error">{errors.category}</p>}
//             </div>

//             <div className="form-group">
//                 <div className="form-check">
//                     <input
//                         className={errors.daily && "input-error"} 
//                         name="monthly"
//                         type="checkbox"
//                         value={this}
//                         onChange={handleOnChange}
//                     />
//                     <label htmlFor="monthly" className="form-check-label">monthly</label>
//                 </div>
//             </div>

//             <div className="modal-footer">
//                 <button type="button" className="btn btn-danger" onClick={openCmp.bind(this)} >Cancel</button>
//                 <button type="submit" className="btn btn-success">Edit income</button>
//             </div>
//         </form>
//     </div>
//     </div> : ""
//     }
// </div>