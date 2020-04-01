
module.exports = {

    filterMonthlyIncomesByDate: (monthlyIncomes, date)  => {
        
        let year = parseInt(date.split("-")[0])
        let month = parseInt(date.split("-")[1])

        return monthlyIncomes.filter(
            (monthlyIncomes) => {
                if(monthlyIncomes.monthly === false) { 
                    return ((monthlyIncomes.year === year) && (monthlyIncomes.month === month))
                } else {
                    return monthlyIncomes.monthly === true || ((monthlyIncomes.year >= year) && (monthlyIncomes.month >= month))
                }

            }
        )
    },
    filterTasksByDate: (tasks, date) => {
        let year = parseInt(date.split("-")[0])
        let month = parseInt(date.split("-")[1])
        let now = new Date().getTime()

        return tasks.filter(
            (task) => {
                return (
                    task.daily === true) ||
                    ((parseInt(task.createTime.substring(0,4)) === year) && (parseInt(task.createTime.substring(5,7)) === month)) ||
                    (Date.parse(task.endTime) > now
                )
            }
        )
    }, filterMonthlyExpensesByDate: (items, date) => {
        let dateChoosen, checkCurrentDate
        checkCurrentDate = parseInt(new Date().toISOString().substr(0,7))
        if(date !== checkCurrentDate) {
            let year = parseInt(date.split("-")[0])
            let month = parseInt(date.split("-")[1])
            dateChoosen = Date.parse(date)
            return items.filter(
                (item) => {
                    let finishedPayment = new Date(item.time)
                    finishedPayment.setMonth(finishedPayment.getMonth() + item.payments)
                    return (
                        ((Date.parse(finishedPayment) > dateChoosen) &&  
                        (item.year >= year) && (item.month <= month))
                        || (item.monthly === true)
                    )
                }
            )
        } else {
            const now = new Date().getTime()
            return items.filter(
                (item) => {
                    let finishedPayment = new Date(item.time)
                    finishedPayment.setMonth(finishedPayment.getMonth() + item.payments)
                    return ( (Date.parse(finishedPayment) > now) || (item.monthly === true))
                }
            )
        }
    },
    filterExpectedExpensesByDate: (expectedExpenses, date) => {

        let currentExpectedExpenses, lastExpectedExpenses, year, month
        let dateSelected = new Date()

        if(dateSelected.getTime() < Date.parse(new Date(date))) {
            year = dateSelected.getFullYear()
            month = dateSelected.getMonth() + 1
        } else {
            year = parseInt(date.split("-")[0])
            month = parseInt(date.split("-")[1])
        }
        
        lastExpectedExpenses = expectedExpenses.filter(
            expectedExpense => expectedExpense.year === year && expectedExpense.month === month
        )
        
        Object.values(lastExpectedExpenses.slice(-1).slice(-1)).forEach((value) => {
            if(Object.keys(value)[11] === "totalExpectedExpenses") {
                currentExpectedExpenses = value[Object.keys(value)[11]]
            }
        });

        return currentExpectedExpenses
    }
}


// filterMonthlyExpensesByDate: (items, date) => {
//     let year, month, dateChoosen, checkCurrentDate
//     checkCurrentDate = parseInt(new Date().toLocaleString().split("/")[2]) + '-0' + parseInt(new Date().toLocaleString().split("/")[0])
    
//     if((date) && (date !== checkCurrentDate)) {
//         year = new Date(date).getFullYear()
//         month = new Date(date).getMonth() + 1
//         dateChoosen = Date.parse(date)
//         return items.filter(
//             (item) => {
//                 let finishedPayment = new Date(item.time)
//                 finishedPayment.setMonth(finishedPayment.getMonth() + item.payments)
//                 return (
//                     (Date.parse(finishedPayment) > dateChoosen) &&  
//                     (item.year >= year) && (item.month <= month)
//                 )
//             }
//         )

//     } else {
//         return items.filter(
//             (item) => {
//                 let finishedPayment = new Date(item.time)
//                 finishedPayment.setMonth(finishedPayment.getMonth() + item.payments)

//                 return (Date.parse(finishedPayment) > new Date().getTime())
//             }
//         )
//     }
// },


// if(new Date().getTime() < Date.parse(new Date(date))) {
//     lastExpectedExpenses = expectedExpenses.filter(
//         expectedExpense => (expectedExpense.year === new Date().getFullYear()) && (expectedExpense.month === new Date().getMonth() + 1)
//     )
// } else {
//     lastExpectedExpenses = expectedExpenses.filter(
//         expectedExpense => expectedExpense.year === year && expectedExpense.month === month
//     )
// }


