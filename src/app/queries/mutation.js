

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


export const EDIT_USER = (inputs, userId) => {
  console.log("render EDIT_USER inputs", inputs)

  return {
    query: `
      mutation editUser($editUserInput: EditUserInput) {
        editUser(editUserInput: $editUserInput) {
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
          incomeTime
          year
          month
        }
      }`,
    variables: {
      name: inputs.name,
      description: inputs.description,
      amount: parseInt(inputs.amount),
      monthly: inputs.monthly || false
    },
    userId: userId
  }
}

export const EDIT_TASK = (inputs, userId) => {
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
      _id: inputs.id,
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
  console.log("in DELETE_INCOME inputs:", inputs)
  console.log("in DELETE_INCOME userId:", userId)

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


export const EDIT_INCOME = (inputs, userId) => {
  return {
    query: `
      mutation EditMonthlyIncomes($editMonthlyIncomesInput: EditMonthlyIncomesInput) {
        editMonthlyIncomes(editMonthlyIncomesInput: $editMonthlyIncomesInput){
          _id
        }
      }`,
    variables: {
      _id: inputs.id,
      name: inputs.name,
      description: inputs.description,
      amount: parseInt(inputs.amount),
      monthly: inputs.monthly || false
    },
    userId: userId
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