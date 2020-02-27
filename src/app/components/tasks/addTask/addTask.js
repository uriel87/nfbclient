import React, { useState, memo } from 'react'
import UseForm from '../../../helpers/useForm'
import validationAddTask from '../addTask/validationAddTask'
import Cookies from 'js-cookie'
import { fetchData } from "../../../helpers/fetchData"
import { CREATE_TASK } from '../../../queries/mutation'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

const AddTask = () => {
    console.log("render AddTask")
    const categories = ["WORK", "FUN", "FINANCIAL", "OTHER"];
    const priorities = ["LOW", "NORMAL", "HIGH", "URGENT"];
    const [ isLoading, setIsLoading ] = useState(false)
    const { inputs, handleOnSubmit, handleOnChange, errors } = UseForm(submit, validationAddTask);

    function submit() {
        addTask()
    }

    const addTask = async () => {
        try {
            setIsLoading(true);
            const auth = JSON.parse(Cookies.get('auth'))
            const data = await fetchData(CREATE_TASK(inputs, auth.userId))
            setIsLoading(false);
            window.location.reload()
        } catch(err) {
            console.log("error AddTask.js - addTask")
            setIsLoading(false);
            throw err;
        }
    }

    return(
        <div className="container">
            <div className="modal" id="addTask">
            <div className="modal-dialog">
                <div className="modal-content">
                    <form onSubmit={handleOnSubmit}> 
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div className="modal-header">
                            <h4 className="modal-title">Add task</h4>
                        </div>
                        <div className="modal-body">
                            <div className="input-group mb-3">
                                {/* <label htmlFor="exampleFormControlSelect1">name</label> */}
                                <input
                                className={errors.name && "input-error"} 
                                name="name"
                                type="text"
                                placeholder="Please enter task name"
                                value={inputs.name}
                                onChange={handleOnChange}
                                />
                                {errors && <p className="mediaInput-input-error">{errors.name}</p>}
                            </div>
                        </div>

                        <div className="modal-body">
                            <div className="input-group mb-3">
                                {/* <label htmlFor="exampleFormControlSelect1">description</label> */}
                                <input
                                className={errors.description && "input-error"} 
                                name="description"
                                type="text"
                                placeholder="Please enter task description"
                                value={inputs.description}
                                onChange={handleOnChange}
                                />
                                {errors && <p className="mediaInput-input-error">{errors.description}</p>}
                            </div>
                        </div>

                        <div className="form-group">
                            {/* <label htmlFor="exampleFormControlSelect1">Category</label> */}
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
                            {/* <label htmlFor="exampleFormControlSelect1">Priority</label> */}
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
                            <button type="submit" className="btn btn-primary" >Add task</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default memo(AddTask)