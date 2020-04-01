
import React, { useEffect, memo, useState } from 'react'
import TasksListItem from '../tasksListItem/tasksListItem'
import Loading from '../../loading/loading'
import { filterTasksByDate } from '../../../helpers/filters'


export const TasksList = (props) => {
    const [tasks, setTasks] = useState(props.tasksList, props.date)

    useEffect(() => {
        setTasks(filterTasksByDate(props.tasksList, props.date))
    }, [props]);

    if(!tasks) {return (<Loading />)}
    return (
        <div className="table-container">
            <div className="flex-table-header">
                <div className="flex-row">Name</div>
                <div className="flex-row">Description</div>
                <div className="flex-row">Category</div>
                <div className="flex-row">priority</div>
                <div className="flex-row">endTime</div>
                <div className="flex-row">daily</div>
            </div>
            { tasks.map((task, index) => (
                <TasksListItem key={index} task={task} />
            ))}
        </div>
    )
}

export default memo(TasksList)
