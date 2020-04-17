

export const LOGIN_USER = (auth) => {
  return {
    query: `
      query Login($loginInput: LoginInput) {
        login(loginInput: $loginInput){
          userId
          token
          tokenExpiration
        }
      }`,
    variables: {
      email: auth.email,
      password: auth.password
    }
  }
}


export const GET_USER_DETAILS = (userId) => {
  return {
      query:
        `query {
          getUserDetails {
              _id
              name
              email
              tel
              tasksList {
                _id
                name
                description
                category
                priority
                daily
                startTime
                endTime
                createTime
              }
              monthlyExpensesList {
                _id
                name
                description
                amount
                amountPerMonth
                monthly
                category
                payments
                time
                year
                month
                isExpense
              }
              monthlyIncomesList {
                _id
                name
                description
                amount
                monthly
                category
                time
                year
                month
                isExpense
              }
              monthlyExpectedExpensesList {
                _id
                groceries
                car
                bills
                fun
                education
                devices
                clothings
                other
                year
                month
                totalExpectedExpenses
              }
          }
      }`,
    userId: userId
  }
}




