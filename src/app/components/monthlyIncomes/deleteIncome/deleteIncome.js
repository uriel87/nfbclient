

// import React, { memo } from 'react'
// import Dialog from "../../dialog/dialog"
// import { fetchAction } from '../../../constant'

// const DeleteIncome = (props) => {

//     console.log("render DeleteIncome - props.income", props.income)
//     const income = props.income

//     return(
//         <div>
//             { props.isOpenCmp?
//                 <Dialog
//                     fetchAction={fetchAction.DELETE_MONTHLY_INCOME}
//                     inputs = {income}
//                     isOpenCmp={props.isOpenCmp}/>
//             : <div></div>
//             }
//         </div>
//     )
// }

// export default memo(DeleteIncome)
















// // import React, { useState, memo } from 'react'
// // import Cookies from 'js-cookie'
// // import Loading from '../../loading/loading'
// // import { fetchData } from "../../../helpers/fetchData"
// // import { DELETE_INCOME } from '../../../queries/mutation'
// // import 'bootstrap/dist/css/bootstrap.css'
// // import 'bootstrap/dist/js/bootstrap.js'

// // const DeleteIncome = (props) => {
// //     console.log("render DeleteIncome - props.income", props.income)
// //     const [ isLoading, setIsLoading ] = useState(false)
// //     const income = props.income

// //     const [isOpenCmp, setIsOpenCmp] = useState(props.isOpenCmp)

// //     const openCmp = () => {
// // 		setIsOpenCmp(!isOpenCmp)
// // 	}

// //     const deleteIncome= async (event) => {
// //         console.log("in DeleteIncome:", income)

// //         try {
// //             setIsLoading(true);
// //             const auth = JSON.parse(Cookies.get('auth'))
// //             await fetchData(DELETE_INCOME(income, auth.userId))
// //             setIsLoading(false)
// //             window.location.reload()
// //         } catch(err) {
// //             console.log("error DeleteIncome.js - DeleteIncome")
// //             setIsLoading(false);
// //             throw err;
// //         }
// //     }

// //     if(isLoading) {return (<Loading />)}
// //     return(
// //         <div>
// //             { isOpenCmp?
// //             <div>
// //             <div className="lightBoxBackground" onClick={openCmp.bind(this)}></div>
// //             <div className="lightBoxContainer">
// //                 <form onSubmit={deleteIncome.bind(this)}>
// //                     {/* <button type="button" className="close" data-dismiss="modal" aria-label="Close">
// //                         <span onClick={openCmp.bind(this)}>&times;</span>
// //                     </button> */}
// //                     <span onClick={openCmp.bind(this)}>&times;</span>

// //                     <h4 className="modal-title">Delete income</h4>
// //                     <div className="modal-header">
// //                         {/* <h4 className="modal-title">{income.name}</h4> */}
// //                     </div>
                    
// //                     <div className="modal-body">
// //                         <label>Are you sure?</label>
// //                     </div>
                    
// //                     <div className="modal-footer">
// //                         <button type="button" className="btn btn-success" onClick={openCmp.bind(this)} >Cancel</button>
// //                         <button type="submit" className="btn btn-danger">Delete</button>
// //                     </div>
// //                 </form>
// //             </div>
// //             </div> : ""
// //             }
// //         </div>
// //     )
// // }

// // export default memo(DeleteIncome)