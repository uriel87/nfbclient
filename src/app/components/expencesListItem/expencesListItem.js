
import React, { useState } from 'react'

export const ExpencesListItem = (props) => {
    const expenseItem = props.expense
    return (
        <div>
            <p className="">name - {expenseItem.name}</p>
            <p className="">description - {expenseItem.description}</p>
            <p className="">amount - {expenseItem.amount}</p>
            <p className="">category - {expenseItem.category}</p>
            <p className="">payment - {expenseItem.payment}</p>
            <p className="">paymentLeft - {expenseItem.paymentLeft}</p>
            <p className="">purchaseTime - {expenseItem.purchaseTime}</p>
            <p className="">year - {expenseItem.year}</p>
            <p className="">month - {expenseItem.month}</p>
        </div>
    )
}

export default ExpencesListItem


// console.log("in ExpencesListItem - props:", props.expense)
// console.log("in ExpencesListItem - expensesList:", expenseItem)
