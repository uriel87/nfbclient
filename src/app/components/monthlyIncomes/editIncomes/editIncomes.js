import React, { useState, useEffect, memo } from '../../../../../node_modules/react'
import UseForm from '../../../helpers/useForm'
import validationAddIncomes from '../addIncomes/validationAddIncomes'
import Cookies from '../../../../../node_modules/js-cookie'
import Loading from '../../loading/loading'
import { fetchData } from "../../../helpers/fetchData"
import { EDIT_INCOME } from '../../../queries/mutation'

const EditIncomes = (props) => {
    // console.log("render EditIncomes - props.income", props.income)
    const [ isLoading, setIsLoading ] = useState(false)
    const { inputs, handleOnSubmit, handleOnChange, errors } = UseForm(submit, validationAddIncomes);
    const income = props.income

    useEffect(() => {

    }, [handleOnSubmit]);

    const [isOpenCmp, setIsOpenCmp] = useState(props.isOpenCmp)

    const openCmp = () => {
		setIsOpenCmp(!isOpenCmp)
	}

    function submit() {
        // console.log("submit EditIncomes - inputs", inputs)
        checkEditInput(inputs)
        editIncomes()
    }
    
    const checkEditInput = async (inputs) => { 

        inputs.id = income._id

        if(!inputs.name) {
            inputs.name = income.name
        }
        if(!inputs.description) {
            inputs.description = income.description
        }
        if(!inputs.amount) {
            inputs.amount = income.amount
        }
        if(!inputs.monthly) {
            inputs.monthly = income.monthly
        }
    }

    const editIncomes = async (income) => {
        console.log("in EditIncomes:", income)
        try {
            setIsLoading(true);
            const auth = JSON.parse(Cookies.get('auth'))
            await fetchData(EDIT_INCOME(inputs, auth.userId))
            setIsLoading(false);
            window.location.reload()
        } catch(err) {
            console.log("error EditIncomes.js - EditIncomes")
            setIsLoading(false);
            throw err;
        }
    }

    if(isLoading) {return (<Loading />)}
    return(
        <div>
            { isOpenCmp?
            <div>
            <div className="lightBoxBackground" onClick={openCmp.bind(this)}></div>
            <div className="lightBoxContainer">
                <form onSubmit={handleOnSubmit.bind(income)}> 
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span onClick={openCmp.bind(this)}>&times;</span>
                    </button>
                    <div className="modal-header">
                        <h4 className="modal-title">Edit income</h4>
                        <h4 className="modal-title">{income.name}</h4>
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="expensesName"
                            name="name"
                            value={inputs.name}
                            onChange={handleOnChange}
                            placeholder={income.name}
                        />
                        {errors && <p className="mediaInput-input-error">{errors.name}</p>}
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="expensesDescription"
                            name="description"
                            value={inputs.description}
                            onChange={handleOnChange}
                            placeholder={income.description}
                        />
                        {errors && <p className="mediaInput-input-error">{errors.description}</p>}
                    </div>

                    <div className="form-group">
                        <input
                            type="number"
                            className="form-control"
                            id="expensesAmount"
                            name="amount"
                            value={inputs.amount}
                            onChange={handleOnChange}
                            placeholder={income.amount}
                        />
                        {errors && <p className="mediaInput-input-error">{errors.amount}</p>}
                    </div>

                    <div className="form-group">
                        <div className="form-check">
                            <input
                                className={errors.daily && "input-error"} 
                                id="monthly"
                                name="monthly"
                                type="checkbox"
                                value={this}
                                onChange={handleOnChange}
                            />
                            <label htmlFor="daily" className="form-check-label">monthly</label>
                        </div>
                    </div>

                        <div className="modal-footer">
                            <button type="submit" className="btn btn-primary">Edit income</button>
                        </div>
                    </form>
            </div>
            </div> : ""
            }
        </div>
    )
}

export default memo(EditIncomes)