
import React, { memo, useState,  } from 'react'
import FormTask from '../formTask/formTask'
import Lightbox from '../../lightBox/lightbox'
import validationAddTask from '../validation/validationAddTask'
import { fetchAction } from '../../../constant'


const AddTaskBtn = () => {

    const [isOpenCreateTaskCmp, setIsOpenCreateTaskCmp] = useState(false)

    const openCreateTaskCmp = () => {
		setIsOpenCreateTaskCmp(!isOpenCreateTaskCmp)
    }
    
    return (
        <div>
            <button type="button" onClick={openCreateTaskCmp.bind(this)}>
                <i className="fas fa-plus"></i>
                <i className="fas fa-tasks"></i>
            </button>
            { isOpenCreateTaskCmp?
                <Lightbox
                    cmp={ <FormTask
                        validation={validationAddTask}
                        fetchAction={fetchAction.CREATE_TASK} />
                    }
                    OpenCmp={openCreateTaskCmp.bind(this)}
                    isOpenCmp={isOpenCreateTaskCmp} />
            : null}
        </div>
    )
}

export default memo(AddTaskBtn)



















{/* <div className="add-income-btn">
<button type="button" onClick={openCreateTaskCmp.bind(this)}>
    <i className="fas fa-plus"></i>
    <i className="fas fa-tasks"></i>
</button>
{ isCreateCmpOpen? <AddTask isOpenCmp={isCreateCmpOpen}/> : <div></div> }
</div> */}










