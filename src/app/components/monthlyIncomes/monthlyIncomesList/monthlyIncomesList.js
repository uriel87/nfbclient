
import React, { useEffect, memo, useState } from 'react'
import MonthlyIncomesListItem from '../monthlyIncomesListItem/monthlyIncomesListItem'
import { filterMonthlyIncomesByDate } from '../../../helpers/filters'


export const MonthlyIncomesList = (props) => {
    
    const [monthlyIncomes, setMonthlyIncomes] = useState(props.monthlyIncomesList)
    
    useEffect(() => {
        // setMonthlyIncomes(filterMonthlyIncomesByDate(props.monthlyIncomesList, props.date))
        setMonthlyIncomes(props.monthlyIncomesList, props.date)
    }, [props]);

    return (
        <div>
            { monthlyIncomes.map((income, index) => (
                <MonthlyIncomesListItem key={index} income={income} />
            ))}
        </div>
    )
}

export default memo(MonthlyIncomesList)
