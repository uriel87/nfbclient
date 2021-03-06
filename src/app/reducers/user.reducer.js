
import { constantUser } from "../constant";


const initialState = {
	id: null,
	name: null,
	email: null,
	tel: null,
	tasksList: [],
	monthlyExpectedExpensesList: [],
	monthlyExpensesList: [],
	monthlyIncomesList: [],
	monthlyBalanceList:[]
}


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case constantUser.SET_USER:
			return state = {
				 ...state,
				id: action.payload._id,
				name: action.payload.name,
				email: action.payload.email,
				tel: action.payload.tel,
				tasksList: action.payload.tasksList,
				monthlyExpensesList: action.payload.monthlyExpensesList,
				monthlyIncomesList: action.payload.monthlyIncomesList,
				monthlyExpectedExpensesList: action.payload.monthlyExpectedExpensesList
			};
        default:
            return state
    }
};

export default userReducer
