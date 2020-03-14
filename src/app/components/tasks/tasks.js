
import React, { memo, useCallback, useState } from 'react'
import { useSelector } from "react-redux";
import TasksList from './tasksList/tasksList'
import Loading from '../loading/loading'
import AddTask from '../tasks/addTask/addTask'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'


const Tasks = () => {

    const tasksList = useSelector(state => state.user.tasksList)
    const [date, setDate] = useState("")

    const handleChange = useCallback((event) => {
        event.preventDefault();
        const { value } = event.target;
        setDate(value)
    }, [])
    
    if(!tasksList) {return (<Loading />)}
    return(
        <div>
            <div className="link-logout">
                <button type="button" className="check" data-toggle="modal" data-target="#addTask" data-backdrop="false">add task</button>
                <AddTask />
            </div>
            <div className="header-personal-page">
                <h1 className="header-page">Tasks List</h1>
                <form>
                    <input type="month" value={date} onChange={handleChange} />
                </form>
                { tasksList.length ? <TasksList tasksList = { tasksList } date={date} /> : <h4>Don't have tasks</h4> }
            </div>
        </div>
    )
}

export default memo(Tasks)