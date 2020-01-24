


export const LOGIN_USER = (email, password) => `query {
    login(loginInput: {
      email: "${email}",
      password: "${password}"
    }) {
      userId
      token
      tokenExpiration
    }
  }`

  // export const SIGNUP = (email, password) => `mutation {
  //   createUser(userInput:{
  //     email: "${signupInputs.email.toLowerCase().trim()}",
  //     name:"${signupInputs.name}"
  //     password: "${signupInputs.password}",
  //     tel:"${signupInputs.tel}"
  //   }
  //   ){
  //     userId
  //     token
  //     tokenExpiration
  //   }
  // }`

  // createUser(userInput: CreateUserInput): AuthData



  // const requestBody = {
  //   query: `
  //   mutation {
  //     createUser(userInput:{
  //       email: "${signupInputs.email.toLowerCase().trim()}",
  //       name:"${signupInputs.name}"
  //       password: "${signupInputs.password}",
  //       tel:"${signupInputs.tel}"
  //     }
  //     ){
  //       userId
  //       token
  //       tokenExpiration
  //     }
  //   }`
  // }
  