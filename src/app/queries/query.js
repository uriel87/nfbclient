

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






// export const LOGIN_USER = (email, password) => `query {
//     login(loginInput: {
//       email: "${email}",
//       password: "${password}"
//     }) {
//       userId
//       token
//       tokenExpiration
//     }
//   }`



// export const GET_USER_DETAILS = () => `query {
//     getUserDetails {
//         _id
//         name
//         email
//         tel
//         taskList {
//           name
//           description
//           category
//           priority
//           daily
//           startTime
//           endTime
//           createTime
//         }
//         monthlyExpensesList {
//           name
//           description
//           amount
//           category
//           payment
//           paymentLeft
//           purchaseTime
//           year
//           month
//         }
//     }
// }`


// export const GET_MOUNTHLY_EXPENSES_USER = () => `query {
//   getUserDetails {
//       monthlyExpensesList {
//         name
//         description
//         amount
//         category
//         payment
//         paymentLeft
//         purchaseTime
//         year
//         month
//       }
//   }
// }`


// export const GET_MOUNTHLY_BALANCE = (userId) => `query {
//     getUserDetails(id: "${userId}") {
//             monthlyExpensesList {
//                 name
//                 description
//                 amount
//                 category
//                 payment
//                 paymentLeft
//                 purchaseTime
//                 year
//                 month
//         }
//     }
// }`





// export const GET_MOUNTHLY_EXPENSES = (year, month) => `query {
//     getMonthlyExpenses(monthlyExpensesDateInput: {
//         year: ${parseInt(year)},
//         month: ${parseInt(month)}
//     }) {
//         name
//         description
//         amount
//         category
//         payment
//         paymentLeft
//         purchaseTime
//         year
//         month
//     }
// }`






// export const GET_MOUNTHLY_BALANCE = (userId) => {
//     let requestBody =  {
//         query: `query getUserDetails($id: ID) {
//             getUserDetails(id: $id) {
//                     monthlyExpensesList {
//                         name
//                         description
//                         amount
//                         category
//                         payment
//                         paymentLeft
//                         purchaseTime
//                         year
//                         month
//                 }
//             }
//         }`,
//         variables: {
//             id: userId
//         }
//     }
//     return requestBody
// }





// export const GET_MOUNTHLY_EXPENSES = (year, month) => {
//     return  {
//         query: `query GetMonthlyExpenses($year: Int, $month: Int) {
//                     getMonthlyExpenses(monthlyExpensesDateInput: {year: $year, month: $month}) {
//                         name
//                         description
//                         amount
//                         category
//                         payment
//                         paymentLeft
//                         purchaseTime
//                         year
//                         month
//                     }
//                 }`,
//         variables: {
//             year: parseInt(year),
//             month: parseInt(month)
//         }
//     }
// }







