import React, { useEffect, memo } from 'react'
import { useSelector } from "react-redux";
import TaskListItem from '../tasks/taskListItem/taskListItem'
import Loading from '../loading/loading'
import AddTask from '../tasks/addTask/addTask'
import { filterTasksByDate } from '../../helpers/filters'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'


const Tasks = () => {

    const tasksList = filterTasksByDate(useSelector(state => state.user.taskList))

    if(!tasksList) {return (<Loading />)}
    return(
        <div>
            <div className="link-logout">
                <button type="button" className="check" data-toggle="modal" data-target="#addTask" data-backdrop="false">add task</button>
                <AddTask />
            </div>
            <div>
                <h1>TaskList</h1>
                { tasksList.map((task, index) => (
                    <TaskListItem key={index} task={task} />
                ))}
            </div>
        </div>
    )
}

export default memo(Tasks)