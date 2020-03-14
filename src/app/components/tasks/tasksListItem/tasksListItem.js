
import React, { useState, useCallback, memo } from 'react'
import Loading from '../../loading/loading'
import EditTask from '../editTask/editTask'
import DeleteTask from '../deleteTask/deleteTask'


export const TasksListItem = (props) => {
    const [task, setTask] = useState(props.task)
    const [isEditCmpOpen, setIsEditCmpOpen] = useState(false)
    const [isDeleteCmpOpen, setIsDeleteCmpOpen] = useState(false)

    const openEditCmp = () => {
		setIsEditCmpOpen(!isEditCmpOpen)
    }
    
    const openDeleteCmp = () => {
		setIsDeleteCmpOpen(!isDeleteCmpOpen)
	}

    // if(isLoading) {return (<Loading />)}
    return (
        <div>
            <p className="">ID - {task._id}</p>
            <p className="">name - {task.name}</p>
            <p className="">description - {task.description}</p>
            <p className="">category - {task.category}</p>
            <p className="">priority - {task.priority}</p>
            <p className="">startTime - {task.startTime}</p>
            <p className="">endTime - {task.endTime}</p>
            <p className="">createTime - {task.createTime}</p>
            <p className="">daily - {String(task.daily)}</p>

            <div className="link-logout">
                <button onClick={openEditCmp.bind(this)}>Edit</button>
			    { isEditCmpOpen? <EditTask task={task} isOpenCmp={isEditCmpOpen}/> : "" }
            </div>

            <div className="link-logout">
                <button onClick={openDeleteCmp.bind(this)}>Delete</button>
			    { isDeleteCmpOpen? <DeleteTask task={task} isOpenCmp={isDeleteCmpOpen}/> : "" }
            </div>

        </div>
    )
}

export default memo(TasksListItem)



{/* <div className="link-logout">
    <button type="button"className="check" onClick={updateTask.bind(this, task)} data-toggle="modal" data-target="#updateTask" data-backdrop="false">Update task</button>
    { showUpdateTaskPage? <UpdateTask task={task} /> : ""}
</div> */}

{/* <div className="link-logout">
    { <DeleteTask task={task} /> }
    <button type="button"className="check" data-toggle="modal" data-target="#deleteTask" data-backdrop="false">Delete task</button>
</div> */}
