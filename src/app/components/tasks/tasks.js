
import React, { memo, useCallback, useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import TasksList from './tasksList/tasksList'
import Loading from '../loading/loading'
import LightboxBtn from '../lightboxBtn/lightboxBtn'
import FormTask from '../tasks/formTask/formTask'
import Input from '../input/input'
import { formInputType, fetchAction, headerContent } from '../../constant'
import{ filterTasksByDate } from '../../helpers/filters'
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

            <form className="form-date">
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