
import React, { useState, memo } from 'react'
// import Loading from '../../loading/loading'
import EditTask from '../editTask/editTask'
import DeleteTask from '../deleteTask/deleteTask'


export const TasksListItem = (props) => {
    // const [task, setTask] = useState(props.task)
    const task = props.task
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

        <div className="flex-table-rows"> 
            <div className="flex-row" data-label="name">{task.name}</div>
            <div className="flex-row" data-label="description">{task.description}</div>
            <div className="flex-row" data-label="category">{task.category}</div>
            <div className="flex-row" data-label="priority">{task.priority}</div>
            <div className="flex-row" data-label="endTime">{task.endTime}</div>
            <div className="flex-row" data-label="daily">{String(task.daily)}</div>

            <div className="flex-row">
                <span onClick={openEditCmp.bind(this)}><i className="far fa-edit action"></i></span>
			    { isEditCmpOpen? <EditTask task={task} isOpenCmp={isEditCmpOpen}/> : <div></div> }
            </div>

            <div className="flex-row">
                <span onClick={openDeleteCmp.bind(this)}><i className="far fa-trash-alt action"></i></span>
			    { isDeleteCmpOpen? <DeleteTask task={task} isOpenCmp={isDeleteCmpOpen}/> : <div></div> }
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
