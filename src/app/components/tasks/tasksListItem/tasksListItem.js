
import React, { memo } from 'react'
import LightboxBtn from '../../lightboxBtn/lightboxBtn'
import DeleteFormBtn from '../../deleteForm/deleteFormBtn'
import FormTask from '../formTask/formTask'
import DeleteForm from '../../deleteForm/deleteForm'
import validationEditTask from '../validation/validationEditTask'
import { fetchAction, title, question, headerContent } from '../../../constant'



export const TasksListItem = (props) => {

    const editForm = (
        <FormTask
            validation={validationEditTask}
            fetchAction={fetchAction.EDIT_TASK}
            task = {props.task}  />
    )

    return (
        <div className="flex-table-rows"> 
            <div className="flex-row" data-label="name">{props.task.name}</div>
            <div className="flex-row" data-label="description">{props.task.description}</div>
            <div className="flex-row" data-label="category">{props.task.category}</div>
            <div className="flex-row" data-label="priority">{props.task.priority}</div>
            <div className="flex-row" data-label="endTime">{props.task.endTime}</div>
            <div className="flex-row" data-label="daily">{String(props.task.daily)}</div>

            <div className="flex-row edit-btn-lightbox">
                <LightboxBtn headerContent = {headerContent.EDIT_TASK} cmp={editForm}/>
            </div>


            <div className="flex-row delete-btn-form">
                <DeleteFormBtn
                    title = {title.DELETE_TASK}
                    question = {question.DELETE_TASK}
                    item={props.task}
                    fetchAction={fetchAction.DELETE_TASK} />
            </div>



        </div>
    )
}

export default memo(TasksListItem)
















// const deleteForm = (
//     <DeleteForm
//         fetchAction={fetchAction.DELETE_TASK}
//         item = {props.task}  />
// )



{/* <div className="flex-row delete-btn-lightbox">
    <LightboxBtn headerContent = {headerContent.DELETE_TASK} cmp={deleteForm} cancelBtn = {true}/>
</div> */}

{/* <div className="flex-row delete-btn-dialog">
    <DialogBtn
        title = {title.DELETE_TASK}
        question = {question.DELETE_TASK}
        item={props.task}
        fetchAction={fetchAction.DELETE_TASK} />
</div> */}




{/* <div className="flex-row"><EditTaskBtn task={task} /></div> */}
{/* <div className="flex-row"><DeleteTaskBtn task={task} /></div> */}


// const [isEditCmpOpen, setIsEditCmpOpen] = useState(false)
// const [isDeleteCmpOpen, setIsDeleteCmpOpen] = useState(false)

// const openEditCmp = () => {
// 	setIsEditCmpOpen(!isEditCmpOpen)
// }

// const openDeleteCmp = () => {
// 	setIsDeleteCmpOpen(!isDeleteCmpOpen)
// }
    


{/* <div className="flex-row">
<span onClick={openEditCmp.bind(this)}><i className="far fa-edit action"></i></span>
{ isEditCmpOpen?
    <LightBox
        cmp={ <FormTask
            validation={validationEditTask}
            fetchAction={fetchAction.EDIT_TASK}
            task = {task} />
        }
        isOpenCmp={isEditCmpOpen}/>
: null}
</div> */}

{/* <div className="flex-row">
<span onClick={openDeleteCmp.bind(this)}><i className="far fa-trash-alt action"></i></span>
{ isDeleteCmpOpen?
    <Dialog
        fetchAction={fetchAction.DELETE_TASK}
        inputs = {task}
        isOpenCmp={isDeleteCmpOpen}/>
: null}
</div> */}




{/* <div className="flex-row">
    <span onClick={openEditCmp.bind(this)}><i className="far fa-edit action"></i></span>
    { isEditCmpOpen? <EditTask task={task} isOpenCmp={isEditCmpOpen}/> : <div></div> }
</div>

<div className="flex-row">
    <span onClick={openDeleteCmp.bind(this)}><i className="far fa-trash-alt action"></i></span>
    { isDeleteCmpOpen? <DeleteTask task={task} isOpenCmp={isDeleteCmpOpen}/> : <div></div> }
</div> */}

{/* <div className="link-logout">
    <button type="button"className="check" onClick={updateTask.bind(this, task)} data-toggle="modal" data-target="#updateTask" data-backdrop="false">Update task</button>
    { showUpdateTaskPage? <UpdateTask task={task} /> : ""}
</div> */}

{/* <div className="link-logout">
    { <DeleteTask task={task} /> }
    <button type="button"className="check" data-toggle="modal" data-target="#deleteTask" data-backdrop="false">Delete task</button>
</div> */}
