// import React, { useState, memo } from 'react'
// import validationEditTask from './validationEditTask'
// import Loading from '../../loading/loading'
// import FormTask from '../formTask/formTask'
// import { fetchAction } from '../../../constant'

// const EditTask = (props) => {
//     // const [ isLoading, setIsLoading ] = useState(false)
//     const task = props.task

//     const [isOpenCmp, setIsOpenCmp] = useState(props.isOpenCmp)

//     const openCmp = () => {
// 		setIsOpenCmp(!isOpenCmp)
// 	}

//     // if(isLoading) {return (<Loading />)}
//     return(
//         <div>
//             { isOpenCmp?
//             <div>
//                 <div className="lightBoxBackground" onClick={openCmp.bind(this)}></div>
//                 <div className="lightBoxContainer">
//                     <span onClick={openCmp.bind(this)}>&times;</span>
//                     <FormTask
//                         validation={validationEditTask}
//                         fetchAction={fetchAction.EDIT_TASK}
//                         task = {task} />
//                         {/* isOpenCmp={props.isOpenCmp}  */}
//                 </div>
//             </div>
//             : <div></div>
//             }
//         </div>
//     )
// }

// export default memo(EditTask)









// // import React, { useState, useEffect, memo } from 'react'
// // import UseForm from '../../../helpers/useForm'
// // import validationEditTask from './validationEditTask'
// // import Cookies from 'js-cookie'
// // import Loading from '../../loading/loading'
// // import SelectInput from '../../selectInput/selectInput'
// // import TextInput from '../../textInput/textInput'
// // import DateInput from '../../dateInput/dateInput'
// // import CheckboxInput from '../../checkboxInput/checkboxInput'
// // import FormTask from '../formTask/formTask'


// // import { fetchData } from "../../../helpers/fetchData"
// // import { EDIT_TASK } from '../../../queries/mutation'
// // import { formInputType, formName, fetchAction } from '../../../constant'

// // import 'bootstrap/dist/css/bootstrap.css'
// // import 'bootstrap/dist/js/bootstrap.js'




// // console.log("render EditTask - props.task", props.task)
// // const categories = ["WORK", "FUN", "FINANCIAL", "OTHER"];
// // const priorities = ["LOW", "NORMAL", "HIGH", "URGENT"];
// // const { inputs, handleOnSubmit, handleOnChange, errors } = UseForm(submit, validationEditTask);



// {/* 
// <div className="modal-body">
//     <div className="input-group mb-3">
//         <input
//         className={errors.name && "input-error"} 
//         name="name"
//         type="text"
//         placeholder={task.name}
//         value={inputs.name}
//         onChange={handleOnChange}
//         />
//         {errors && <p className="mediaInput-input-error">{errors.name}</p>}
//     </div>
// </div> */}


// {/* <div className="modal-body">
//     <div className="input-group mb-3">
//         <input
//         className={errors.description && "input-error"} 
//         name="description"
//         type="text"
//         placeholder={task.description}
//         value={inputs.description}
//         onChange={handleOnChange}
//         />
//         {errors && <p className="mediaInput-input-error">{errors.description}</p>}
//     </div>
// </div> */}

// {/* <div className="form-group">
//     <select
//         className="form-control"
//         id="taskCategory"
//         name="category"
//         onChange={handleOnChange}
//         defaultValue={'DEFAULT'}
//     >
//         <option value="DEFAULT" disabled>Choose category</option>
//         { categories.map((category, index) => { 
//             return <option key = {index} value={inputs.category}  >{category}</option>;
//         })
//         }
//     </select>
//     {errors && <p className="mediaInput-input-error">{errors.category}</p>}
// </div> */}

// {/* <div className="form-group">
//     <select
//         className="form-control"
//         id="taskPriority"
//         name="priority"
//         defaultValue={'DEFAULT'}
//         onChange={handleOnChange}
//     >
//         <option value="DEFAULT" disabled>Choose priority</option>
//         { priorities.map((priority, index) => { 
//             return <option key = {index} value={inputs.priority} >{priority}</option>;
//         })
//         }
//     </select>
//     {errors && <p className="mediaInput-input-error">{errors.priority}</p>}
// </div> */}


// {/* <div className="modal-body">
//     <div className="input-group mb-3">
//         <label htmlFor="exampleFormControlSelect1">Start Time</label>
//         <input
//         className={errors.startTime && "input-error"} 
//         name="startTime"
//         type="datetime-local"
//         placeholder="Please enter task startTime"
//         value={inputs.startTime}
//         onChange={handleOnChange}
//         min={new Date().toISOString().substring(0,16)}
//         />
//         {errors && <p className="mediaInput-input-error">{errors.startTime}</p>}
//     </div>
// </div> */}

// {/* <div className="modal-body">
//     <div className="input-group mb-3">
//         <label htmlFor="exampleFormControlSelect1">End time</label>
//         <input
//         className={errors.endTime && "input-error"} 
//         name="endTime"
//         type="datetime-local"
//         placeholder="Please enter task endTime"
//         value={inputs.endTime}
//         onChange={handleOnChange}
//         min={inputs.startTime}
//         />
//         {errors && <p className="mediaInput-input-error">{errors.endTime}</p>}
//     </div>
// </div> */}


// {/* <div className="form-group">
//     <div className="form-check">
//         <input
//             className={errors.daily && "input-error"} 
//             id="daily"
//             name="daily"
//             type="checkbox"
//             value={this}
//             onChange={handleOnChange}
//         />
//         <label htmlFor="daily" className="form-check-label">Daily</label>
//     </div>
// </div> */}








// // useEffect(() => {

// // }, [handleOnSubmit]);

// // const [isOpenCmp, setIsOpenCmp] = useState(props.isOpenCmp)

// // const openCmp = () => {
// // 	setIsOpenCmp(!isOpenCmp)
// // }

// //function submit() {
//     // console.log("submit EditTask - inputs", inputs)
//     // checkEditInput(inputs)
//     //editTask()
// //}

// // const checkEditInput = async (inputs) => { 
// //     console.log("checkEditInput - inputs", inputs)

// //     inputs.id = task._id

// //     if(!inputs.name) {
// //         inputs.name = task.name
// //     }
// //     if(!inputs.description) {
// //         inputs.description = task.description
// //     }
// //     if(!inputs.category) {
// //         inputs.category = task.category
// //     }
// //     if(!inputs.priority) {
// //         inputs.priority = task.priority
// //     }
// //     if(!inputs.startTime) {
// //         inputs.startTime = task.startTime
// //     }
// //     if(!inputs.endTime) {
// //         inputs.endTime = task.endTime
// //     }
// //     if(!inputs.daily) {
// //         inputs.daily = task.daily
// //     }
// // }

// // const editTask = async () => {
// //     console.log("in editTask:")
// //     try {
// //         setIsLoading(true);
// //         const auth = JSON.parse(Cookies.get('auth'))
// //         await fetchData(EDIT_TASK(inputs, auth.userId))
// //         setIsLoading(false);
// //         window.location.reload()
// //     } catch(err) {
// //         console.log("error editTask.js - editTask")
// //         setIsLoading(false);
// //         throw err;
// //     }
// // }






// // <div>
// //     <div className="lightBoxBackground" onClick={openCmp.bind(this)}></div>
// //     <div className="lightBoxContainer">
// //         <form onSubmit={handleOnSubmit.bind(task)}> 
// //             {/* <button type="button" className="close" data-dismiss="modal" aria-label="Close">
// //                 <span onClick={openCmp.bind(this)}>&times;</span>
// //             </button> */}
// //             <span onClick={openCmp.bind(this)}>&times;</span>

// //             <div className="modal-header">
// //                 <h4 className="modal-title">Edit task</h4>
// //                 <h4 className="modal-title">{task.name}</h4>
// //             </div>

// //             <TextInput
// //                 name={formName.NAME}
// //                 placeholder={task.name}
// //                 type={formInputType.TEXT}
// //                 handleOnChange={handleOnChange}
// //                 error={errors.name}
// //                 value={inputs.name} />

// //             <TextInput
// //                 name={formName.DESCRIPTION}
// //                 placeholder={task.description}
// //                 type={formInputType.TEXT}
// //                 handleOnChange={handleOnChange}
// //                 error={errors.description}
// //                 value={inputs.description} />

// //             <SelectInput
// //                 name={formName.CATEGORY}
// //                 handleOnChange={handleOnChange}
// //                 values={categories}
// //                 error={errors.category}
// //                 inputs={inputs} />

// //             <SelectInput
// //                 name={formName.PRIORITY}
// //                 handleOnChange={handleOnChange}
// //                 values={priorities}
// //                 error={errors.priority}
// //                 inputs={inputs} />

// //             <DateInput
// //                 name={formName.START_TIME}
// //                 label={"Start Time"}
// //                 handleOnChange={handleOnChange}
// //                 error={errors.startTime}
// //                 value={inputs.startTime}
// //                 min={new Date().toISOString().substring(0,16)} />

// //             <DateInput
// //                 name={formName.END_TIME}
// //                 label={"End Time"}
// //                 handleOnChange={handleOnChange}
// //                 error={errors.endTime}
// //                 value={inputs.endTime}
// //                 min={inputs.startTime} />

// //             <CheckboxInput
// //                 name={formName.DAILY}
// //                 label={"Daily"}
// //                 handleOnChange={handleOnChange}
// //                 error={errors.daily}
// //                 value={this} />

// //             <div className="modal-footer">
// //                 <button type="button" className="btn btn-danger" onClick={openCmp.bind(this)} >Cancel</button>
// //                 <button type="submit" className="btn btn-success">Edit task</button>
// //             </div>
// //         </form>
// //     </div>
// // </div>