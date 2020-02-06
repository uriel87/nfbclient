
// export const SIGNUP = (inputs) => `mutation {
//       createUser(userInput:{
//         email: "${inputs.email}",
//         name:"${inputs.name}"
//         password: "${inputs.password}",
//         tel:"${inputs.tel}"
//       }
//       ){
//         userId
//         token
//         tokenExpiration
//       }
//     }`



    export const SIGNUP = (inputs) => {
      return {
            query: `
              mutation CreateUser($userInput: CreateUserInput) {
                createUser(userInput: $userInput) {
                  userId
                  token
                  tokenExpiration
                }
            }`,
            variables: {
              email: inputs.email,
              name: inputs.name,
              password: inputs.password,
              tel: inputs.tel
            }
      }
    }

export const CREATE_MONTHLY_EXPENSES = (inputs, userId) => {
  return {
        query: `
          mutation CreateMonthlyExpenses($monthlyExpenesInput: MonthlyExpensesInput) {
              createMonthlyExpenses(monthlyExpenesInput: $monthlyExpenesInput){
                  name
                  description
                  amount
                  category
                  payment
              }
          }`,
        variables: {
          name: inputs.name,
          description: inputs.description,
          amount: parseInt(inputs.amount),
          category: inputs.category,
          payment: parseInt(inputs.payments)
        },
        userId: userId
  }
}



  