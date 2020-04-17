
import React, { memo } from 'react'
import LightboxBtn from '../../lightboxBtn/lightboxBtn'
import DeleteFormBtn from '../../deleteForm/deleteFormBtn'
import FormTask from '../formTask/formTask'
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