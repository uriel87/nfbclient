
import React, { useState } from 'react'
import ExpencesListItem from '../expencesListItem/expencesListItem'


export const ExpencesList = (props) => {

    const expensesLise = props.expencesList

    return (
        <div>
            { expensesLise.map((expense, index) => (
                <ExpencesListItem key={index} expense={expense} />
            ))}
        </div>
    )
}

export default ExpencesList



// console.log("in ExpencesList - props:", props.expencesList)
// console.log("in ExpencesList - expensesLise:", expensesLise)
