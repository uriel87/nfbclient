
import React, { memo } from 'react'
import { Route, NavLink, HashRouter } from "react-router-dom";
import MonthlyBalance from '../monthlyBalance/monthlyBalance'
import MonthlyExpenses from '../monthlyExpenses/monthlyExpenses'
import MonthlyIncomes from '../monthlyIncomes/monthlyIncomes'
import AddIncome from '../monthlyIncomes/addIncome/addIncome'
import AddExpense from '../monthlyExpenses/addExpense/addExpense'
import "./balance.css"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'


const Balance = (props) => {
    return (
        <div>
            <div>
                <div>
                    <div className="link-logout">
                        <button type="button" className="check" data-toggle="modal" data-target="#addIncome" data-backdrop="false">Add Incomes</button>
                        <AddIncome />
                    </div>
                    <div className="link-logout">
                        <button type="button" className="check" data-toggle="modal" data-target="#addExpense" data-backdrop="false">Add Expenses</button>
                        <AddExpense />
                    </div>
                </div>
            </div>
            <HashRouter>
                <div>
                    <nav>
                        <ul className="header">
                            <li><NavLink to="/" >Monthly balance</NavLink></li>
                            <li><NavLink to="/monthlyExpenses" >Monthly expenses</NavLink></li>
                            <li><NavLink to="/monthlyIncomes" >Monthly incomes</NavLink></li>
                        </ul>
                    </nav>
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








