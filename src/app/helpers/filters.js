
module.exports = {
    filterByDate: (items, date) => {
        let year, month, dateChoosen, checkCurrentDate
        checkCurrentDate = parseInt(new Date().toLocaleString().split("/")[2]) + '-0' + parseInt(new Date().toLocaleString().split("/")[0])
        
        if((date) && (date !== checkCurrentDate)) {
            year = new Date(date).getFullYear()
            month = new Date(date).getMonth() + 1
            dateChoosen = Date.parse(date)
            return items.filter(
                (item) => {
                    let finishedPayment = new Date(item.time)
                    finishedPayment.setMonth(finishedPayment.getMonth() + item.payments)
                    return (
                        (Date.parse(finishedPayment) > dateChoosen) &&  
                        (item.year >= year) && (item.month <= month)
                    )
                }
            )

        } else {
            return items.filter(
                (item) => {
                    let finishedPayment = new Date(item.time)
                    finishedPayment.setMonth(finishedPayment.getMonth() + item.payments)
    
                    return (Date.parse(finishedPayment) > new Date().getTime())
                }
            )
        }
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
    },
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
    }
}
