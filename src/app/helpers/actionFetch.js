
import Cookies from 'js-cookie'
import { fetchAction } from '../constant'
import { fetchData } from "../helpers/fetchData"
import { LOGIN_USER, GET_USER_DETAILS } from '../queries/query'
import { CREATE_TASK,
         EDIT_TASK,
         DELETE_TASK,
         CREATE_MONTHLY_EXPENSE,
         EDIT_EXPENSE,
         DELETE_EXPENSE,
         CREATE_MONTHLY_INCOMES,
         CREATE_EXPECTED_EXPENSES,
         EDIT_INCOME,
         DELETE_INCOME,
         EDIT_USER,
         SIGNUP
        } from '../queries/mutation'



export const actionFetch = async (action, inputs , fallBack) => {
    let isLoading = false
    let data, auth

    try {
        isLoading = true;

        if (Cookies.get('auth') === undefined || Cookies.get('auth') === null) {
            auth = '' 
        } else {
            auth = JSON.parse(Cookies.get('auth'))
        }

        switch(action) {

            case fetchAction.GET_USER_DETAILS:
                data = await fetchData(GET_USER_DETAILS(auth.userId))
                return data

            case fetchAction.CREATE_MONTHLY_EXPENSE:
                await fetchData(CREATE_MONTHLY_EXPENSE(inputs, auth.userId))
                break;

            case fetchAction.EDIT_MONTHLY_EXPENSE:
                await fetchData(EDIT_EXPENSE(inputs, auth.userId, fallBack))
                break;

            case fetchAction.DELETE_MONTHLY_EXPENSE:
                await fetchData(DELETE_EXPENSE(inputs, auth.userId))
                break;

            case fetchAction.CREATE_MONTHLY_INCOME:
                await fetchData(CREATE_MONTHLY_INCOMES(inputs, auth.userId))
                break;

            case fetchAction.EDIT_MONTHLY_INCOME:
                await fetchData(EDIT_INCOME(inputs, auth.userId, fallBack))
                break;

            case fetchAction.DELETE_MONTHLY_INCOME:
                await fetchData(DELETE_INCOME(inputs, auth.userId))
                break;

            case fetchAction.CREATE_EXPECTED_EXPENSES:
                await fetchData(CREATE_EXPECTED_EXPENSES(inputs, auth.userId, fallBack))
                break;

            case fetchAction.CREATE_TASK:
                await fetchData(CREATE_TASK(inputs, auth.userId))
                break;

            case fetchAction.EDIT_TASK:
                await fetchData(EDIT_TASK(inputs, auth.userId, fallBack))
                break;

            case fetchAction.DELETE_TASK:
                await fetchData(DELETE_TASK(inputs, auth.userId))
                break;

            case fetchAction.EDIT_USER:
                data = await fetchData(EDIT_USER(inputs, auth.userId, fallBack))
                return data

            case fetchAction.LOGIN_USER:
                data = await fetchData(LOGIN_USER(inputs))
                return data

            case fetchAction.SIGNUP:
                data = await fetchData(SIGNUP(inputs))
                return data

            default:
        }

        isLoading = false
        window.location.reload()
    } catch(err) {
        console.log("error in action ", action)
        isLoading = false
        throw err;
    }
}