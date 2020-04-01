
import React, { memo } from 'react'
import Dialog from "../../dialog/dialog"
import { fetchAction } from '../../../constant'

const DeleteExpense = (props) => {

    console.log("render DeleteExpense - props.expense", props.expense)
    const expense = props.expense

    return(
        <div>
            { props.isOpenCmp?
                <Dialog
                    fetchAction={fetchAction.DELETE_MONTHLY_EXPENSE}
                    inputs = {expense}
                    isOpenCmp={props.isOpenCmp}/>
            : <div></div>
            }
        </div>
    )
}

export default memo(DeleteExpense)



// import React, { useState, memo } from 'react'
// import Cookies from 'js-cookie'
// import Loading from '../../loading/loading'
// import { fetchData } from "../../../helpers/fetchData"
// import { DELETE_EXPENSE } from '../../../queries/mutation'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.js'


// console.log("render DeleteExpense - props.expense", props.expense)
// const [ isLoading, setIsLoading ] = useState(false)
// const expense = props.expense

// const [isOpenCmp, setIsOpenCmp] = useState(props.isOpenCmp)

// const openCmp = () => {
// 	setIsOpenCmp(!isOpenCmp)
// }

// const deleteExpense= async (event) => {
//     console.log("in DeleteExpense:", expense)

//     try {
//         setIsLoading(true);
//         const auth = JSON.parse(Cookies.get('auth'))
//         await fetchData(DELETE_EXPENSE(expense, auth.userId))
//         setIsLoading(false)
//         window.location.reload()
//     } catch(err) {
//         console.log("error DeleteExpense.js - DeleteExpense")
//         setIsLoading(false);
//         throw err;
//     }
// }


// <div>
//     { isOpenCmp?
//     <div>
//     <div className="lightBoxBackground" onClick={openCmp.bind(this)}></div>
//     <div className="lightBoxContainer">
//         <form onSubmit={deleteExpense.bind(this)}>
//             {/* <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                 <span onClick={openCmp.bind(this)}>&times;</span>
//             </button> */}
//             <span onClick={openCmp.bind(this)}>&times;</span>

//             <h4 className="modal-title">Delete expense</h4>
//             <div className="modal-header">
//                 <h4 className="modal-title">{expense.name}</h4>
//             </div>
            
//             <div className="modal-body">
//                 <label>Are you sure?</label>
//             </div>
            
//             <div className="modal-footer">
//                 <button type="button" className="btn btn-success" onClick={openCmp.bind(this)} >Cancel</button>
//                 <button type="submit" className="btn btn-danger">Delete</button>
//             </div>
//         </form>
//     </div>
//     </div> : ""
//     }
// </div>