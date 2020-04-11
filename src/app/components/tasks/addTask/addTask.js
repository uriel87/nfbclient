// import React, { memo } from 'react'
// import validationAddTask from '../addTask/validationAddTask'
// import FormTask from '../formTask/formTask'
// import { fetchAction } from '../../../constant'

// const AddTask = (props) => {

//     return(
//         <div>
//             { props.isOpenCmp?
//             <div>
//             <FormTask
//                 validation={validationAddTask}
//                 fetchAction={fetchAction.CREATE_TASK}
//                 isOpenCmp={props.isOpenCmp}/>
//                 </div>
//              : <div></div>
//             }

//         </div>
//     )
// }

// export default memo(AddTask)












// // import UseForm from '../../../helpers/useForm'
// // import Loading from '../../loading/loading'
// // import Cookies from 'js-cookie'
// // import SelectInput from '../../selectInput/selectInput'
// // import TextInput from '../../textInput/textInput'
// // import CheckboxInput from '../../checkboxInput/checkboxInput'
// // import DateInput from '../../dateInput/dateInput'
// // import { fetchData } from "../../../helpers/fetchData"
// // import { CREATE_TASK } from '../../../queries/mutation'
// // import 'bootstrap/dist/css/bootstrap.css'
// // import 'bootstrap/dist/js/bootstrap.js'


// // console.log("render AddTask")
// // const categories = ["WORK", "FUN", "FINANCIAL", "OTHER"];
// // const priorities = ["LOW", "NORMAL", "HIGH", "URGENT"];




// // const { inputs, handleOnSubmit, handleOnChange, errors } = UseForm(submit, validationAddTask);

// // function submit() {
// //     addTask()
// // }

// // const addTask = async () => {
// //     try {
// //         setIsLoading(true);
// //         const auth = JSON.parse(Cookies.get('auth'))
// //         await fetchData(CREATE_TASK(inputs, auth.userId))
// //         setIsLoading(false);
// //         window.location.reload()
// //     } catch(err) {
// //         console.log("error AddTask.js - addTask")
// //         setIsLoading(false);
// //         throw err;
// //     }
// // }


// {/* <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//     <span aria-hidden="true">&times;</span>
// </button> */}


// {/* <div className="modal-body">
//     <div className="input-group mb-3">
//         <label htmlFor="exampleFormControlSelect1">name</label>
//         <input
//         className={errors.name && "input-error"} 
//         name="name"
//         type="text"
//         placeholder="Please enter task name"
//         value={inputs.name}
//         onChange={handleOnChange}
//         />
//         {errors && <p className="mediaInput-input-error">{errors.name}</p>}
//     </div>
// </div> */}



// {/* <div className="modal-body">
//     <div className="input-group mb-3">
//         <label htmlFor="exampleFormControlSelect1">description</label>
//         <input
//         className={errors.description && "input-error"} 
//         name="description"
//         type="text"
//         placeholder="Please enter task description"
//         value={inputs.description}
//         onChange={handleOnChange}
//         />
//         {errors && <p className="mediaInput-input-error">{errors.description}</p>}
//     </div>
// </div> */}



// {/* <div className="form-group">
//     <label htmlFor="exampleFormControlSelect1">Priority</label>
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


// {/* <div className="form-group">
//     <label htmlFor="exampleFormControlSelect1">Category</label>
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




// {/* 
// <div className="modal-body">
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








// {/* <div className="container">
// <div className="modal" id="addTask">
// <div className="lightBoxBackground" data-dismiss="modal" ></div>
// <div className="modal-dialog">
//     <div className="modal-content">
//         <form onSubmit={handleOnSubmit} className="form-lightBox"> 

//             <span className="close" data-dismiss="modal" aria-label="Close" aria-hidden="true">&times;</span>

//             <div className="modal-header">
//                 <h4 className="modal-title">Add task</h4>
//             </div>

//             <TextInput
//                 name={"name"}
//                 placeholder={"Please enter task name"}
//                 type={"text"}
//                 handleOnChange={handleOnChange}
//                 error={errors.name}
//                 value={inputs.name} />

//             <TextInput
//                 name={"description"}
//                 placeholder={"Please enter task description"}
//                 type={"text"}
//                 handleOnChange={handleOnChange}
//                 error={errors.description}
//                 value={inputs.description} />

//             <SelectInput
//                 name={"category"}
//                 handleOnChange={handleOnChange}
//                 values={categories}
//                 error={errors.category}
//                 inputs={inputs} />

//             <SelectInput
//                 name={"priority"}
//                 handleOnChange={handleOnChange}
//                 values={priorities}
//                 error={errors.priority}
//                 inputs={inputs} />


//             <DateInput
//                 name={"startTime"}
//                 label={"Start Time"}
//                 handleOnChange={handleOnChange}
//                 error={errors.startTime}
//                 value={inputs.startTime}
//                 min={new Date().toISOString().substring(0,16)} />

//             <DateInput
//                 name={"endTime"}
//                 label={"End Time"}
//                 handleOnChange={handleOnChange}
//                 error={errors.endTime}
//                 value={inputs.endTime}
//                 min={inputs.startTime} />

//             <CheckboxInput
//                 name={"daily"}
//                 label={"Daily"}
//                 handleOnChange={handleOnChange}
//                 error={errors.daily}
//                 value={this} />


//             <div className="modal-footer">
//                 <button type="submit" className="btn btn-primary" >Add task</button>
//             </div>
//         </form>
//     </div>
// </div>
// </div>
// </div> */}