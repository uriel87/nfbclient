
import React, { memo, useCallback, useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import TasksList from './tasksList/tasksList'
import Loading from '../loading/loading'
import AddTask from '../tasks/addTask/addTask'
import{ filterTasksByDate } from '../../helpers/filters'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'


const Tasks = () => {
    
    const tasksListRedux = useSelector(state => state.user.tasksList)
    const [date, setDate] = useState(new Date().toISOString().substr(0,7))
    const [tasksList, setTasksList] = useState(filterTasksByDate(tasksListRedux, date))
    const [isCreateCmpOpen, setIsCreateCmpOpen] = useState(false)


    useEffect(() => {
        setTasksList(filterTasksByDate(tasksListRedux, date))
    }, [date, tasksListRedux]);

    const handleChange = useCallback((event) => {
        event.preventDefault();
        const { value } = event.target;
        setDate(value)
    }, [])

    const openCreateCmp = () => {
		setIsCreateCmpOpen(!isCreateCmpOpen)
	}
    
    if(!tasksList) {return (<Loading />)}
    return(
        <div>

            <div className="header-content">
                <h4 className="header-content">Tasks List</h4>
            </div>

            <div className="add-income-btn">
                <button type="button" onClick={openCreateCmp.bind(this)}>
                    <i className="fas fa-plus"></i>
                    <span>task</span>
                </button>
                { isCreateCmpOpen? <AddTask isOpenCmp={isCreateCmpOpen}/> : <div></div> }
            </div>

            <form>
                <input type="month" value={date} onChange={handleChange} />
            </form>

            { tasksList.length ? <TasksList tasksList = { tasksList } date={date} /> : <h4>Don't have tasks</h4> }
        </div>
    )
}

export default memo(Tasks)







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