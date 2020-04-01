
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


// return balanceList.reduce((accumulator, balanceListValue) => {
//     if(balanceListValue.isExpense === false) { 
//         return accumulator + balanceListValue.amount
//     } else {
//         return 0
//     }
// }, 0)



//sumExpectedExpense: (balanceList)  => {
// return balanceList[balanceList.length-1].reduce((accumulator, balanceListValue) => {
//     return (balanceListValue.isExpense === false)? accumulator : accumulator + balanceListValue.amount
// }, 0)
//console.log(balanceList[balanceList.length-1])


// balanceList[balanceList.length-1].reduce((accumulator, balanceListValue) => {
//     balanceListValue.c.forEach( color => {
//         total.push(color);
//     })
//     return total;
//   }, [])


//return balanceList
//},
