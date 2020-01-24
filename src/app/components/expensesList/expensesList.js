
import React, { useEffect, memo, useState } from 'react'
import ExpensesListItem from '../expensesListItem/expencesListItem'
import { filterByDate } from '../../helpers/filters'


export const ExpensesList = (props) => {
    
    const [userMonthlyExpenses, setExpensesList] = useState(props.userMonthlyExpenses)

    useEffect(() => {
        setExpensesList(filterByDate(props.userMonthlyExpenses, props.date))
    }, [props]);

    return (
        <div>
            { userMonthlyExpenses.map((expense, index) => (
                <ExpensesListItem key={index} expense={expense} />
            ))}
        </div>
    )
}

export default memo(ExpensesList)



// console.log("in ExpencesList - props:", props.expensesList)
// console.log("in ExpencesList - expensesLiset:", expensesList)
