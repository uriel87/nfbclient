
import React, { memo, useCallback, useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import TasksList from './tasksList/tasksList'
import Loading from '../loading/loading'
import LightboxBtn from '../lightboxBtn/lightboxBtn'
import Input from '../input/input'
import { formInputType, fetchAction, headerContent } from '../../constant'
import{ filterTasksByDate } from '../../helpers/filters'
import FormTask from '../tasks/formTask/formTask'
import validationAddTask from '../tasks/validation/validationAddTask'
import './tasks.css'


const Tasks = () => {

    const tasksListRedux = useSelector(state => state.user.tasksList)
    const [date, setDate] = useState(new Date().toISOString().substr(0,7))
    const [tasksList, setTasksList] = useState(filterTasksByDate(tasksListRedux, date))

    useEffect(() => {
        setTasksList(filterTasksByDate(tasksListRedux, date))
    }, [date, tasksListRedux]);

    const handleChange = useCallback((event) => {
        event.preventDefault();
        const { value } = event.target;
        setDate(value)
    }, [])

    const addForm = (
        <FormTask
            validation={validationAddTask}
            fetchAction={fetchAction.CREATE_TASK}/>
    )
    
    if(!tasksList) {return (<Loading />)}
    return(
        <div className="task-container">
            <h4 className="header-name">Tasks</h4>

            <div className="add-task-btn-lightbox">
                <LightboxBtn headerContent = {headerContent.CREATE_NEW_TASK} cmp={addForm}/>
            </div>

            <form>
                <Input
                    type={formInputType.MONTH}
                    handleOnChange={handleChange}
                    value={date} />
            </form>

            { tasksList.length ? <TasksList tasksList = { tasksList } date={date} /> : <h4>Don't have tasks</h4> }
        </div>
    )
}

export default memo(Tasks)






















{/* <AddTaskBtn /> */}

// import AddTask from '../tasks/addTask/addTask'
// import AddTaskBtn from '../tasks/addTaskBtn/addTaskBtn'

{/* <div className="add-income-btn">
    <button type="button" onClick={openCreateCmp.bind(this)}>
        <i className="fas fa-plus"></i>
        <i className="fas fa-tasks"></i>
    </button>
    { isCreateCmpOpen? <AddTask isOpenCmp={isCreateCmpOpen}/> : <div></div> }
</div> */}


{/* <div className="link-logout">
    <button type="button" className="check" data-toggle="modal" data-target="#addTask" data-backdrop="false">add task</button>
    <AddTask />
</div> */}

{/* <div className="add-income-btn">
    <button type="button" className="check" data-toggle="modal" data-target="#addTask" data-backdrop="false">
        <i className="fas fa-plus"></i>
        <span>task</span>
    </button>
</div>
<AddTask /> */}