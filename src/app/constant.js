
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
    DATE_TIME_LOCAL: 'datetime-local'
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



export {
    constantUser,
    constantAuth,
    formInputType,
    formName,
    fetchAction,
    formCategoryInput
}







// const constantLightBox = {
//     setOpenEditTask: "SET_OPEN_EDIT_TASK",
//     setOpenDeleteTask: "SET_OPEN_DELETE_TASK",

//     setOpenEditExpense: "SET_OPEN_EDIT_EXPENSE",
//     setOpenDeleteExpense: "SET_OPEN_DELETE_EXPENSE",

//     setOpenEditIncome: "SET_CLOSE_EDIT_INCOME",
//     setOpenDeleteIncome: "SET_CLOSE_DELETE_INCOME"
// }

