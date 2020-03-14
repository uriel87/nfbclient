
module.exports = {
    filterByDate: (item, date) => {
        let year, month

        if(date) {
             year = parseInt(date.split("-")[0])
             month = parseInt(date.split("-")[1])
        } else {
             year = new Date().getFullYear()
             month = new Date().getMonth() + 1
        }
        return item.filter(
            (item) => {
                return (
                    (item.year === year) && (item.month === month) ||
                    (item.paymentLeft < item.payment)
                    )
            }
        )
    },
    filterTasksByDate: (tasks, date) => {
        let year, month

        if(date) {
             year = parseInt(date.split("-")[0])
             month = parseInt(date.split("-")[1])
        } else {
             year = new Date().getFullYear()
             month = new Date().getMonth() + 1
        }
        return tasks.filter(
            (task) => {
                return (
                    task.daily === true) ||
                    ((parseInt(task.startTime.substring(0,4)) === year) && (parseInt(task.startTime.substring(5,7)) === month)) ||
                    (Date.parse(task.endTime) > new Date().getTime()
                )
            }
        )
    },
    filterMonthlyIncomesByDate: (monthlyIncomes, date)  => {
        let year, month

        if(date) {
             year = parseInt(date.split("-")[0])
             month = parseInt(date.split("-")[1])
        } else {
             year = new Date().getFullYear()
             month = new Date().getMonth() + 1
        }

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
