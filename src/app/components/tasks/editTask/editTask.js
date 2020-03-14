import React, { useState, useEffect, memo } from 'react'
import UseForm from '../../../helpers/useForm'
import validationEditTask from './validationEditTask'
import Cookies from 'js-cookie'
import Loading from '../../loading/loading'
import { fetchData } from "../../../helpers/fetchData"
import { EDIT_TASK } from '../../../queries/mutation'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

const EditTask = (props) => {
    // console.log("render EditTask - props.task", props.task)
    const categories = ["WORK", "FUN", "FINANCIAL", "OTHER"];
    const priorities = ["LOW", "NORMAL", "HIGH", "URGENT"];
    const [ isLoading, setIsLoading ] = useState(false)
    const { inputs, handleOnSubmit, handleOnChange, errors } = UseForm(submit, validationEditTask);
    const task = props.task

    useEffect(() => {

    }, [handleOnSubmit]);

    const [isOpenCmp, setIsOpenCmp] = useState(props.isOpenCmp)

    const openCmp = () => {
		setIsOpenCmp(!isOpenCmp)
	}

    function submit() {
        // console.log("submit EditTask - inputs", inputs)
        checkEditInput(inputs)
        editTask()
    }
    
    const checkEditInput = async (inputs) => { 

        inputs.id = task._id

        if(!inputs.name) {
            inputs.name = task.name
        }
        if(!inputs.description) {
            inputs.description = task.description
        }
        if(!inputs.category) {
            inputs.category = task.category
        }
        if(!inputs.priority) {
            inputs.priority = task.priority
        }
        if(!inputs.startTime) {
            inputs.startTime = task.startTime
        }
        if(!inputs.endTime) {
            inputs.endTime = task.endTime
        }
        if(!inputs.daily) {
            inputs.daily = task.daily
        }
    }

    const editTask = async (task) => {
        console.log("in editTask:", task)
        try {
            setIsLoading(true);
            const auth = JSON.parse(Cookies.get('auth'))
            await fetchData(EDIT_TASK(inputs, auth.userId))
            setIsLoading(false);
            window.location.reload()
        } catch(err) {
            console.log("error editTask.js - editTask")
            setIsLoading(false);
            throw err;
        }
    }

    if(isLoading) {return (<Loading />)}
    return(
        <div>
            { isOpenCmp?
            <div>
            <div className="lightBoxBackground" onClick={openCmp.bind(this)}></div>
            <div className="lightBoxContainer">
                <form onSubmit={handleOnSubmit.bind(task)}> 
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span onClick={openCmp.bind(this)}>&times;</span>
                        </button>
                        <div className="modal-header">
                            <h4 className="modal-title">Edit task</h4>
                            <h4 className="modal-title">{task.name}</h4>
                        </div>
                        <div className="modal-body">
                            <div className="input-group mb-3">
                                <input
                                className={errors.name && "input-error"} 
                                name="name"
                                type="text"
                                placeholder={task.name}
                                value={inputs.name}
                                onChange={handleOnChange}
                                />
                                {errors && <p className="mediaInput-input-error">{errors.name}</p>}
                            </div>
                        </div>

                        <div className="modal-body">
                            <div className="input-group mb-3">
                                <input
                                className={errors.description && "input-error"} 
                                name="description"
                                type="text"
                                placeholder={task.description}
                                value={inputs.description}
                                onChange={handleOnChange}
                                />
                                {errors && <p className="mediaInput-input-error">{errors.description}</p>}
                            </div>
                        </div>

                        <div className="form-group">
                            <select
                                className="form-control"
                                id="taskCategory"
                                name="category"
                                onChange={handleOnChange}
                                defaultValue={'DEFAULT'}
                            >
                                <option value="DEFAULT" disabled>Choose category</option>
                                { categories.map((category, index) => { 
                                    return <option key = {index} value={inputs.category}  >{category}</option>;
                                })
                                }
                            </select>
                            {errors && <p className="mediaInput-input-error">{errors.category}</p>}
                        </div>

                        <div className="form-group">
                            <select
                                className="form-control"
                                id="taskPriority"
                                name="priority"
                                defaultValue={'DEFAULT'}
                                onChange={handleOnChange}
                            >
                                <option value="DEFAULT" disabled>Choose priority</option>
                                { priorities.map((priority, index) => { 
                                    return <option key = {index} value={inputs.priority} >{priority}</option>;
                                })
                                }
                            </select>
                            {errors && <p className="mediaInput-input-error">{errors.priority}</p>}
                        </div>

                        <div className="modal-body">
                            <div className="input-group mb-3">
                                <label htmlFor="exampleFormControlSelect1">Start Time</label>
                                <input
                                className={errors.startTime && "input-error"} 
                                name="startTime"
                                type="datetime-local"
                                placeholder="Please enter task startTime"
                                value={inputs.startTime}
                                onChange={handleOnChange}
                                />
                                {errors && <p className="mediaInput-input-error">{errors.startTime}</p>}
                            </div>
                        </div>

                        <div className="modal-body">
                            <div className="input-group mb-3">
                                <label htmlFor="exampleFormControlSelect1">End time</label>
                                <input
                                className={errors.endTime && "input-error"} 
                                name="endTime"
                                type="datetime-local"
                                placeholder="Please enter task endTime"
                                value={inputs.endTime}
                                onChange={handleOnChange}
                                min={inputs.startTime}
                                />
                                {errors && <p className="mediaInput-input-error">{errors.endTime}</p>}
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="form-check">
                                <input
                                    className={errors.daily && "input-error"} 
                                    id="daily"
                                    name="daily"
                                    type="checkbox"
                                    value={this}
                                    onChange={handleOnChange}
                                />
                                <label htmlFor="daily" className="form-check-label">Daily</label>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button type="submit" className="btn btn-primary">Edit task</button>
                        </div>
                    </form>
            </div>
            </div> : ""
            }
        </div>
    )

    // return(
    //     <div className="container">
    //         <div className="modal" id="updateTask">
    //         <div className="modal-dialog">
    //             <div className="modal-content">
    //                 <form onSubmit={handleOnSubmit}> 
    //                     <button type="button" className="close" data-dismiss="modal" aria-label="Close">
    //                         <span aria-hidden="true">&times;</span>
    //                     </button>
    //                     <div className="modal-header">
    //                         <h4 className="modal-title">Update task</h4>
    //                         <h4 className="modal-title">{task.name}</h4>
    //                     </div>
    //                     <div className="modal-body">
    //                         <div className="input-group mb-3">
    //                             <input
    //                             className={errors.name && "input-error"} 
    //                             name="name"
    //                             type="text"
    //                             placeholder={task.name}
    //                             value={inputs.name}
    //                             onChange={handleOnChange}
    //                             />
    //                             {errors && <p className="mediaInput-input-error">{errors.name}</p>}
    //                         </div>
    //                     </div>

    //                     <div className="modal-body">
    //                         <div className="input-group mb-3">
    //                             <input
    //                             className={errors.description && "input-error"} 
    //                             name="description"
    //                             type="text"
    //                             placeholder={task.description}
    //                             value={inputs.description}
    //                             onChange={handleOnChange}
    //                             />
    //                             {errors && <p className="mediaInput-input-error">{errors.description}</p>}
    //                         </div>
    //                     </div>

    //                     <div className="form-group">
    //                         <select
    //                             className="form-control"
    //                             id="taskCategory"
    //                             name="category"
    //                             onChange={handleOnChange}
    //                             defaultValue={'DEFAULT'}
    //                         >
    //                             <option value="DEFAULT" disabled>Choose category</option>
    //                             { categories.map((category, index) => { 
    //                                 return <option key = {index} value={inputs.category}  >{category}</option>;
    //                             })
    //                             }
    //                         </select>
    //                         {errors && <p className="mediaInput-input-error">{errors.category}</p>}
    //                     </div>

    //                     <div className="form-group">
    //                         <select
    //                             className="form-control"
    //                             id="taskPriority"
    //                             name="priority"
    //                             defaultValue={'DEFAULT'}
    //                             onChange={handleOnChange}
    //                         >
    //                             <option value="DEFAULT" disabled>Choose priority</option>
    //                             { priorities.map((priority, index) => { 
    //                                 return <option key = {index} value={inputs.priority} >{priority}</option>;
    //                             })
    //                             }
    //                         </select>
    //                         {errors && <p className="mediaInput-input-error">{errors.priority}</p>}
    //                     </div>

    //                     <div className="modal-body">
    //                         <div className="input-group mb-3">
    //                             <label htmlFor="exampleFormControlSelect1">Start Time</label>
    //                             <input
    //                             className={errors.startTime && "input-error"} 
    //                             name="startTime"
    //                             type="datetime-local"
    //                             placeholder="Please enter task startTime"
    //                             value={inputs.startTime}
    //                             onChange={handleOnChange}
    //                             />
    //                             {errors && <p className="mediaInput-input-error">{errors.startTime}</p>}
    //                         </div>
    //                     </div>

    //                     <div className="modal-body">
    //                         <div className="input-group mb-3">
    //                             <label htmlFor="exampleFormControlSelect1">End time</label>
    //                             <input
    //                             className={errors.endTime && "input-error"} 
    //                             name="endTime"
    //                             type="datetime-local"
    //                             placeholder="Please enter task endTime"
    //                             value={inputs.endTime}
    //                             onChange={handleOnChange}
    //                             />
    //                             {errors && <p className="mediaInput-input-error">{errors.endTime}</p>}
    //                         </div>
    //                     </div>

    //                     <div className="form-group">
    //                         <div className="form-check">
    //                             <input
    //                                 className={errors.daily && "input-error"} 
    //                                 id="daily"
    //                                 name="daily"
    //                                 type="checkbox"
    //                                 value={this}
    //                                 onChange={handleOnChange}
    //                             />
    //                             <label htmlFor="daily" className="form-check-label">Daily</label>
    //                         </div>
    //                     </div>

    //                     <div className="modal-footer">
    //                         <button type="submit" className="btn btn-primary">Update task</button>
    //                     </div>
    //                 </form>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    // )
}

export default memo(EditTask)