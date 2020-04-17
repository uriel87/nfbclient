
import React, { memo, useState,  } from 'react'
import FormTask from '../formTask/formTask'
import Lightbox from '../../lightBox/lightbox'
import validationEditTask from '../validation/validationEditTask'
import { fetchAction } from '../../../constant'


const EditTaskBtn = (props) => {

    const [isEditCmpOpen, setIsEditCmpOpen] = useState(false)

    const openEditCmp = () => {
		setIsEditCmpOpen(!isEditCmpOpen)
    }
    
    return (
        <div>
            <button onClick={openEditCmp.bind(this)}>
                <i className="far fa-edit action"></i>
            </button>
            { isEditCmpOpen?
                <Lightbox
                    cmp={ <FormTask
                        validation={validationEditTask}
                        fetchAction={fetchAction.EDIT_TASK}
                        task = {props.task} />
                    }
                    openCmp={openEditCmp.bind(this)}
                    isOpenCmp={isEditCmpOpen}
                    />
            : null}
        </div>
    )
}

export default memo(EditTaskBtn)










