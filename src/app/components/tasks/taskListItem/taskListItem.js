
import React from 'react'

export const TaskListItem = (props) => {

    const task = props.task

    function updateTask(task) {
        console.log("in updateTask:", task)
    }
    
    function deltetTask(task) {
        console.log("in deltetTask:", task)
	}

    return (
        <div>
            <p className="">name - {task.name}</p>
            <p className="">description - {task.description}</p>
            <p className="">category - {task.category}</p>
            <p className="">priority - {task.priority}</p>
            <p className="">startTime - {task.startTime}</p>
            <p className="">endTime - {task.endTime}</p>
            <p className="">createTime - {task.createTime}</p>
            <p className="">daily - {String(task.daily)}</p>
            <button className="btn btn-info media-list-item-btn" onClick={updateTask.bind(this, task)} >Update task</button>
            <button className="btn btn-info media-list-item-btn" onClick={deltetTask.bind(this, task)} >Delete task</button>
        </div>
    )
}

export default TaskListItem
