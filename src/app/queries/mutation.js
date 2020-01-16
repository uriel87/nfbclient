


export const LOGIN_USER = (email, password) => `query {
    login(loginInput: {
      email: "${email}",
      password: "${password}"
    }) {
      userId
      token
      tokenEcpiration
    }
  }`