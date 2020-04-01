import React, { memo } from 'react'
import Dialog from "../../dialog/dialog"
import { fetchAction } from '../../../constant'



const DeleteTask = (props) => {
    console.log("render DeleteTask - props.task", props.task)
    const task = props.task

    return(
        <div>
            { props.isOpenCmp?
                <Dialog
                    fetchAction={fetchAction.DELETE_TASK}
                    inputs = {task}
                    isOpenCmp={props.isOpenCmp}/>
            : <div></div>
            }
        </div>
    )
}

export default memo(DeleteTask)





// import Cookies from 'js-cookie'
// import Loading from '../../loading/loading'
// import { fetchData } from "../../../helpers/fetchData"
// import { DELETE_TASK } from '../../../queries/mutation'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.js'

// const [ isLoading, setIsLoading ] = useState(false)
// const [isOpenCmp, setIsOpenCmp] = useState(props.isOpenCmp)

// const openCmp = () => {
// 	setIsOpenCmp(!isOpenCmp)
// }

// const deleteTask = async (event) => {
//     console.log("in deleteTask:", task)
//     event.preventDefault();
//     try {
//         setIsLoading(true);
//         const auth = JSON.parse(Cookies.get('auth'))
//         await fetchData(DELETE_TASK(task, auth.userId))
//         setIsLoading(false)
//         window.location.reload()
//     } catch(err) {
//         console.log("error DeleteTask.js - deleteTask")
//         setIsLoading(false);
//         throw err;
//     }
// }

// if(isLoading) {return (<Loading />)}

{/* <div>
<div className="lightBoxBackground" onClick={openCmp.bind(this)}></div>
<div className="lightBoxContainer">
    <form onSubmit={deleteTask.bind(this)}>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span onClick={openCmp.bind(this)}>&times;</span>
        </button>
        <span onClick={openCmp.bind(this)}>&times;</span>
        <h4 className="modal-title">Delete task</h4>
        <div className="modal-header">
            <h4 className="modal-title">{task.name}</h4>
        </div>
        
        <div className="modal-body">
            <label>Are you sure?</label>
        </div>
        
        <div className="modal-footer">
            <button type="button" className="btn btn-success" onClick={openCmp.bind(this)} >Cancel</button>
            <button type="submit" className="btn btn-danger">Delete</button>
        </div>
    </form>
</div>
</div>  */}