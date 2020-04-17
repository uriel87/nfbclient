
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
    SIGNUP: 'signUp',
    FORGOT_PASSWORD: 'forgotPassword'
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