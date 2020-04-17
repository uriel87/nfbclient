
module.exports = {
    sumIncomes: (balanceList)  => {
        return balanceList.reduce((accumulator, balanceListValue) => {
            return (balanceListValue.isExpense === true)? accumulator : accumulator + balanceListValue.amount
        }, 0)
    },
    sumExpense: (balanceList)  => {
        return balanceList.reduce((accumulator, balanceListValue) => {
            return (balanceListValue.isExpense === false)? accumulator : accumulator + balanceListValue.amountPerMonth
        }, 0)
    },
    sumBalance: (balanceList)  => {
        return balanceList.reduce((accumulator, balanceListValue) => {
            if(balanceListValue.isExpense === true) { 
                return accumulator - balanceListValue.amountPerMonth
            } else {
                return accumulator + balanceListValue.amountPerMonth
            }
        }, 0)
    }
}