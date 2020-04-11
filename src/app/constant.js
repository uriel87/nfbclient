
const constantUser = {
    SET_USER: "setUser",
};

const constantAuth = {
    SET_LOGIN: "setLogin",
    SET_LOGOUT: "setLogout"
}

const formInputType = {
    TEXT: 'text',
    PASSWORD: 'password',
    NUMBER: 'number',
    TEL: "tel",
    DATE_TIME_LOCAL: 'datetime-local',
    MONTH: 'month'
}

const formName = {
    NAME: 'name',
    DESCRIPTION: 'description',
    AMOUNT:'amount',
    CATEGORY: 'category',
    PRIORITY: 'priority',
    START_TIME:'startTime',
    END_TIME: 'endTime',
    DAILY: 'daily',
    MOUNTHLY:'mounthly',
    PAYMENTS: "payments",
    GROCERIES: 'groceries',
    CAR: 'car',
    BILLS: 'bills',
    FUN : 'fun',
    EDUCATION: 'education',
    DEVICES: 'devices',
    CLOTHINGS: 'clothings',
    OTHER: 'other',
    EMAIL: "email",
    PASSWORD: 'password',
    TEL: 'tel'
}


const fetchAction = {
    CREATE_MONTHLY_EXPENSE: 'createMonthlyExpense',
    EDIT_MONTHLY_EXPENSE: 'editMonthlyExpense',
    DELETE_MONTHLY_EXPENSE: 'delteMonthlyExpense',
    CREATE_MONTHLY_INCOME: 'createMonthlyIncome',
    EDIT_MONTHLY_INCOME: 'editMonthlyIncome',
    DELETE_MONTHLY_INCOME: 'deleteMonthlyIncome',
    CREATE_EXPECTED_EXPENSE: 'createExpectedExpense', 
    CREATE_TASK: 'createTask',
    EDIT_TASK: 'editTask',
    DELETE_TASK: "deleteTask",
    EDIT_USER: 'editUser',
    LOGIN_USER: 'loginUser',
    SIGNUP: 'signUp'
}


const formCategoryInput = {
    TASK_CATEGORIES: ["WORK", "FUN", "FINANCIAL", "OTHER"],
    TASK_PRIORITIES : ["LOW", "NORMAL", "HIGH", "URGENT"],
    BALANCE_CATEGORIES : ["GROCERIES", "CAR", "BILLS", "FUN", "EDUCATION", "DEVICES", "CLOTHINGS", "OTHER"]

}


const title = {
    DELETE_TASK: 'Delete task',
    DELETE_EXPENSE: 'Delete expense',
    DELETE_INCOME: 'Delete income',
}

const question = {
    DELETE_TASK: 'Are you sure to delete task name',
    DELETE_EXPENSE: 'Are you sure to delete expense name',
    DELETE_INCOME: 'Are you sure to delete income name',
}

const headerContent = {
    SIGNUP: "SignUp",
    LOGIN: "Login",
    LOGOUT: "Logout",
    CREATE_NEW_EXPENSE: "Create New Expense",
    EDIT_EXPENSE:"Edit Expense",
    DELETE_EXPENSE:"Delete Expense",
    CREATE_NEW_INCOME: "Create New Income",
    EDIT_INCOME:"Edit Income",
    DELETE_INCOME:"Delete Income",
    CREATE_NEW_TASK: "Create New Task",
    EDIT_TASK:"Edit Task",
    DELETE_TASK:"Delete Task"
}


// const validationErrors = {
//     REQUIRED_NAME: "Name is requierd",
//     NAME_IN_ENGLISH: "Name should have only in English characters and numbers",
//     REQUIRED_DESCRIPTION: "Description is requierd",
//     DESCRIPTION_IN_ENGLISH : "Description should have only sin English characters and numbers",
//     REQUIRED_CATEGORY: "Please select category",
//     REQUIRED_PRIORITY: "Please select priority",
//     REQUIRED_START_TIME: "Please select start time",
//     REQUIRED_END_TIME: "Please select end time",
//     REQUIRED_AMOUNT: "Amount is requierd",
//     PAYMENTS_MIN: "Payments should at list 1 payment",
//     REQUIRED_EMAIL: "Email address is requierd",
//     EMAIL_INVALID: "Email adress is invalid",
//     REQUIRED_PASSWORD: "password is requierd",
//     PASSWORD_MIN: "Password should be more than 6 characters",
//     REQUIRED_TEL: "telephone is requierd",
//     TEL_RANGE: "elephone should be between 7 to 12"

// }


export {
    constantUser,
    constantAuth,
    formInputType,
    formName,
    fetchAction,
    formCategoryInput,
    title,
    question,
    headerContent
}