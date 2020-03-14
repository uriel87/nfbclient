
import React, { useEffect, memo, useCallback, useState } from 'react'
import PersonalSettings from '../personalSettings/personalSettings'
import MonthlyIncomes from '../monthlyIncomes/monthlyIncomes'
import './settings.css'



const Settings = () => {
    console.log("render Settings")
    const [ isLoading, setIsLoading ] = useState(false)
    const [ page, setPage ] = useState()

    const Epage = {
        PERSONAL_SETTINGS: 'personalSettings',
        MONTHLY_INCOMES: 'MonthlyIncomes'
    }

    const showPage = () => {
        switch(page) {
            case Epage.PERSONAL_SETTINGS:
              return <PersonalSettings />
            case Epage.MONTHLY_INCOMES:
              return <MonthlyIncomes />
            default:
              return <MonthlyIncomes />
          }
    }

    return(
        <div>
            <nav>
                <ul>
                    <li onClick={ () => {setPage(Epage.PERSONAL_SETTINGS)}}>Personal settings</li>
                    <li onClick={ () => {setPage(Epage.MONTHLY_INCOMES)}}>Monthly incomes</li>
                </ul>
            </nav>
            <div>
                { showPage() }
            </div>
        </div>
    )
}

export default memo(Settings)