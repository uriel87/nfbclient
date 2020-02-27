
import React, { useEffect, memo, useState } from 'react'
import ExpensesListItem from '../expensesListItem/expencesListItem'
import { filterByDate } from '../../helpers/filters'


export const ExpensesList = (props) => {
    
    const [monthlyExpenses, setMonthlyExpenses] = useState(props.monthlyExpenses)

    useEffect(() => {
        setMonthlyExpenses(filterByDate(props.monthlyExpenses, props.date))
    }, [props]);

    return (
        <div>
            { monthlyExpenses.map((expense, index) => (
                <ExpensesListItem key={index} expense={expense} />
            ))}
        </div>
    )
}

export default memo(ExpensesList)



// console.log("in ExpencesList - props:", props.expensesList)
// console.log("in ExpencesList - expensesLiset:", expensesList)
