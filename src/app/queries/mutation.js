

export const SIGNUP = (inputs) => {
  return {
    query: `
      mutation CreateUser($userInput: CreateUserInput) {
        createUser(userInput: $userInput) {
          userId
          token
          tokenExpiration
          status
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


export const CREATE_MONTHLY_EXPENSE = (inputs, userId) => {
  return {
    query: `
      mutation CreateMonthlyExpenses($monthlyExpenesInput: MonthlyExpensesInput) {
        createMonthlyExpenses(monthlyExpenesInput: $monthlyExpenesInput){
          name
          description
          amount
          amountPerMonth
          monthly
          category
          payments
        }
      }`,
    variables: {
      name: inputs.name,
      description: inputs.description,
      amount: parseFloat(inputs.amount),
      monthly: inputs.monthly,
      category: inputs.category,
      payments: parseInt(inputs.payments),
    },
    userId: userId
  }
}



export const CREATE_TASK = (inputs, userId) => {
  return {
    query: `
      mutation CreateTask($taskInput: CreateTaskInput) {
        createTask(taskInput: $taskInput){
          name
          description
          category
          priority
          startTime
          endTime
          daily
        }
      }`,
    variables: {
      name: inputs.name,
      description: inputs.description,
      category: inputs.category,
      priority: inputs.priority,
      startTime: inputs.startTime,
      endTime: inputs.endTime,
      daily: inputs.daily || false
    },
    userId: userId
  }
}


export const EDIT_USER = (inputs, userId, fallBack) => {
  return {
    query: `
      mutation editUser($editUserInput: EditUserInput) {
        editUser(editUserInput: $editUserInput) {
          userId
          token
          tokenExpiration
          status
        }
    }`,
    variables: {
      email: inputs.email || fallBack.email,
      name: inputs.name || fallBack.name,
      password: inputs.password || fallBack.password,
      tel: inputs.tel || fallBack.tel
    },
    userId: userId
  }
}


export const CREATE_MONTHLY_INCOMES = (inputs, userId) => {
  return {
    query: `
      mutation CreateMonthlyIncomes($monthlyIncomesInput: MonthlyIncomesInput) {
        createMonthlyIncomes(monthlyIncomesInput: $monthlyIncomesInput){
          name
          description
          amount
          monthly
          time
          year
          month
          category
        }
      }`,
    variables: {
      name: inputs.name,
      description: inputs.description,
      amount: parseFloat(inputs.amount),
      category: inputs.category,
      monthly: inputs.monthly || false,
    },
    userId: userId
  }
}

export const CREATE_EXPECTED_EXPENSES = (inputs, userId) => {
  return {
    query: `
      mutation CreateMonthlyExpectedExpenses($monthlyExpectedExpensesInput: MonthlyExpectedExpensesInput) {
        createMonthlyExpectedExpenses(monthlyExpectedExpensesInput: $monthlyExpectedExpensesInput){
          _id
        }
      }`,
    variables: {
      groceries: parseInt(inputs.groceries),
      car: parseInt(inputs.car),
      bills: parseInt(inputs.bills),
      fun: parseInt(inputs.fun),
      education: parseInt(inputs.education),
      devices: parseInt(inputs.devices),
      clothings: parseInt(inputs.clothings),
      other: parseInt(inputs.other)
    },
    userId: userId
  }
}


export const EDIT_TASK = (inputs, userId, fallBack) => {
  console.log("EDIT_TASK - fallBack", fallBack)
  return {
    query: `
      mutation EditTask($editTaskInput: EditTaskInput) {
        editTask(editTaskInput: $editTaskInput){
          _id
          name
          description
          category
          priority
          startTime
          endTime
          daily
        }
      }`,
    variables: {
      _id: fallBack._id,
      name: inputs.name || fallBack.name,
      description: inputs.description || fallBack.description,
      category: inputs.category || fallBack.category,
      priority: inputs.priority || fallBack.priority,
      startTime: inputs.startTime || fallBack.startTime,
      endTime: inputs.endTime || fallBack.endTime,
      daily: inputs.daily || false
    },
    userId: userId
  }
}


export const DELETE_TASK = (inputs, userId) => {
  return {
    query: `
      mutation DeleteTask($deleteTaskInput: DeleteTaskInput) {
        deleteTask(deleteTaskInput: $deleteTaskInput){
          _id
        }
      }`,
    variables: {
      _id: inputs._id,
    },
    userId: userId
  }
}

export const DELETE_INCOME = (inputs, userId) => {
  return {
    query: `
      mutation DeleteMonthlyIncomes($deleteMonthlyIncomesInput: DeleteMonthlyIncomesInput) {
        deleteMonthlyIncomes(deleteMonthlyIncomesInput: $deleteMonthlyIncomesInput){
          _id
        }
      }`,
    variables: {
      _id: inputs._id,
    },
    userId: userId
  }
}


export const DELETE_EXPENSE = (inputs, userId) => {
  return {
    query: `
      mutation DeleteMonthlyExpense($deleteMonthlyExpenseInput: DeleteMonthlyExpenseInput) {
        deleteMonthlyExpense(deleteMonthlyExpenseInput: $deleteMonthlyExpenseInput){
          _id
        }
      }`,
    variables: {
      _id: inputs._id,
    },
    userId: userId
  }
}


export const EDIT_INCOME = (inputs, userId, fallBack) => {
  return {
    query: `
      mutation EditMonthlyIncomes($editMonthlyIncomesInput: EditMonthlyIncomesInput) {
        editMonthlyIncomes(editMonthlyIncomesInput: $editMonthlyIncomesInput){
          _id
        }
      }`,
    variables: {
      _id: fallBack._id,
      name: inputs.name || fallBack.name,
      description: inputs.description || fallBack.description,
      amount: parseFloat(inputs.amount) || fallBack.amount,
      category: inputs.category || fallBack.category,
      monthly: inputs.monthly || fallBack.monthly || false,
    },
    userId: userId
  }
}


export const EDIT_EXPENSE = (inputs, userId, fallBack) => {
  return {
    query: `
      mutation EditMonthlyExpense($editMonthlyExpenseInput: EditMonthlyExpenseInput) {
        editMonthlyExpense(editMonthlyExpenseInput: $editMonthlyExpenseInput){
          _id
        }
      }`,
    variables: {
      _id: fallBack._id,
      name: inputs.name || fallBack.name,
      description: inputs.description || fallBack.description,
      amount: parseFloat(inputs.amount) || fallBack.amount,
      monthly: inputs.monthly || fallBack.monthly,
      category: inputs.category || fallBack.category,
      payments: parseInt(inputs.payments) || fallBack.payments
    },
    userId: userId
  }
}


export const FORGOT_PASSWORD = (inputs) => {
  return {
    query: `
      mutation forgotPassword($forgotPasswordInput: ForgotPasswordInput) {
        forgotPassword(forgotPasswordInput: $forgotPasswordInput) {
          status
        }
    }`,
    variables: {
      email: inputs.email
    }
  }
}







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