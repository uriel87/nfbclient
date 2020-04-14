
import React, { memo } from 'react'
import { Route, NavLink, HashRouter } from "react-router-dom"
import MonthlyBalance from '../monthlyBalance/monthlyBalance'
import MonthlyExpenses from '../monthlyExpenses/monthlyExpenses'
import MonthlyIncomes from '../monthlyIncomes/monthlyIncomes'
import LightboxBtn from '../lightboxBtn/lightboxBtn'
import FormIncome from '../monthlyIncomes/formIncome/formIncome'
import FormExpense from '../monthlyExpenses/formExpense/formExpense'
import { fetchAction, headerContent } from '../../constant'
import validationAddIncome from '../monthlyIncomes/validations/validationAddIncome'
import validationAddExpense from '../monthlyExpenses/validations/validationAddExpense'
import "./balance.css"
import '../lightbox/lightbox.css'
import "../../../index.css"



const Balance = () => {

    const addIncomeForm = (
        <FormIncome
            validation={validationAddIncome}
            fetchAction={fetchAction.CREATE_MONTHLY_INCOME}/>
    )

    const addExpenseForm = (
        <FormExpense
            validation={validationAddExpense}
            fetchAction={fetchAction.CREATE_MONTHLY_EXPENSE}/>
    )


    return (
        <div className="balance-container">
            <HashRouter>
                <div>
                    <nav className="nav-balance">
                        <ul>
                            <li><NavLink to="/" >Monthly balance</NavLink></li>
                            <li><NavLink to="/monthlyExpenses" >Monthly expenses</NavLink></li>
                            <li><NavLink to="/monthlyIncomes" >Monthly incomes</NavLink></li>
                        </ul>
                    </nav>
                </div>

                <div className="balance-actions">
                    <div className="add-expense-btn-lightbox">
                        <LightboxBtn headerContent = {headerContent.CREATE_NEW_EXPENSE} cmp={addExpenseForm}/>
                    </div>

                    <div className="add-income-btn-lightbox">
                        <LightboxBtn headerContent = {headerContent.CREATE_NEW_INCOME} cmp={addIncomeForm}/>
                    </div>
                </div>

                <div className="content">
                    <Route path="/" exact component={MonthlyBalance} />
                    <Route path="/monthlyExpenses" component={MonthlyExpenses} />
                    <Route path="/monthlyIncomes" component={MonthlyIncomes} />
                </div>
            </HashRouter>
        </div>
    )
}

export default memo(Balance)















{/* <LightboxBtn content={addIncomeContent} headerContent = {headerContent.CREATE_NEW_INCOME} cmp={addIncomeForm}/> */}
{/* <LightboxBtn content={addExpenseContent} headerContent = {headerContent.CREATE_NEW_EXPENSE} cmp={addExpenseForm}/> */}

{/* <div className="balance-actions">
    <AddIncomeBtn />
    <AddExpenseBtn />
</div> */}

// import AddIncomeBtn from '../monthlyIncomes/addIncomeBtn/addIncomeBtn'
// import AddExpenseBtn from '../monthlyExpenses/addExpenseBtn/addExpenseBtn'


// const [isCreateExpenseCmpOpen, setIsCreateExpenseCmpOpen] = useState(false)
// const [isCreateIncomeCmpOpen, setIsCreateIncomeCmpOpen] = useState(false)

// const openCreateIncomeCmp = () => {
// 	setIsCreateIncomeCmpOpen(!isCreateIncomeCmpOpen)
// }

// const openCreateExpenseCmp = () => {
// 	setIsCreateExpenseCmpOpen(!isCreateExpenseCmpOpen)
// }


{/* <div className="flex-row">
    <span onClick={openCreateExpenseCmp.bind(this)}>
        <i className="fas fa-minus"></i>
        <i className="far fa-credit-card"></i>
    </span>
    { isCreateExpenseCmpOpen?
        <LightBox
            cmp={ <FormExpense
                validation={validationAddExpense}
                fetchAction={fetchAction.CREATE_MONTHLY_EXPENSE} />
            }
            isOpenCmp={isCreateExpenseCmpOpen}/>
    : null}
</div> */}



{/* <div className="flex-row">
    <span onClick={openCreateIncomeCmp.bind(this)}>
        <i className="fas fa-plus"></i>
        <i className="far fa-credit-card"></i>
    </span>
    { isCreateIncomeCmpOpen?
        <LightBox
            cmp={ <FormIncome
                validation={validationAddIncome}
                fetchAction={fetchAction.CREATE_MONTHLY_INCOME} />
            }
            isOpenCmp={isCreateIncomeCmpOpen}/>
    : null}
</div> */}









// const [page, setPage ] = useState()
// const [monthlyBalance, setMonthlyBalance] = useState(useSelector(state => state.user.monthlyBalanceList))
// const aaa="aaa"

// const Epage = {
//     MONTHLY_BALANCE: 'MonthlyBalance',
//     MONTHLY_EXPENSES: 'MonthlyExpenses',
//     MONTHLY_INCOMES: 'MonthlyIncomes'
// }

// const showPage = () => {
//     switch(page) {
//         case Epage.MONTHLY_BALANCE:
//             return <MonthlyBalance monthlyBalance={monthlyBalance} date={date} />
//         case Epage.MONTHLY_EXPENSES:
//             return <MonthlyExpenses date={date} />
//         case Epage.MONTHLY_INCOMES:
//             return <MonthlyIncomes date={date} />
//         default:
//             return <MonthlyBalance monthlyBalance={monthlyBalance} date={date} />
//     }
// }




{/* <div className="add-income-btn">
    <button type="button" onClick={openCreateIncomeCmp.bind(this)}>
        <i className="fas fa-plus"></i>
        <i className="far fa-credit-card"></i>
    </button>
    { isCreateIncomeCmpOpen? <AddIncome isOpenCmp={isCreateIncomeCmpOpen}/> : <div></div> }
</div> */}

{/* <div className="add-income-btn">
    <button type="button" onClick={openCreateExpenseCmp.bind(this)}>
        <i className="fas fa-minus"></i>
        <i className="far fa-credit-card"></i>
    </button>
    { isCreateExpenseCmpOpen? <AddExpense isOpenCmp={isCreateExpenseCmpOpen}/> : <div></div> }
</div> */}




// Provider.propTypes = {
//     users: PropTypes.array,
//     selectedUser: PropTypes.object
//   };
  
//   Provider.defaultProps = {
//     users: [],
//     selectedUser: {}
//   };



// const [date, setDate] = useState()
// // console.log("Balance - props.match.params", props.match.params)

// useEffect(() => {
//     // console.log("!useEffect - props.match.params", props.match.params)
//     console.log("!useEffect - data", date)
// }, [date]);

// const handleChange = useCallback((event) => {
//     event.preventDefault();
//     const { value } = event.target;
//     setDate(value)
// }, [])


{/* <div className="delete-income-btn">
    <button type="button" onClick={openCreateCmp.bind(this)}>
        <i className="fas fa-plus"></i>
        <i className="far fa-credit-card"></i>
    </button>
</div>
<AddIncome /> */}

{/* <div className="add-income-btn">
    <button type="button" className="check" data-toggle="modal" data-target="#addExpense" data-backdrop="false">
        <i className="fas fa-minus"></i>
        <i className="far fa-credit-card"></i>
    </button>
</div>
<AddExpense /> */}










