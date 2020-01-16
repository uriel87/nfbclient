
import { constantUser } from "../constant";


const initialState = {
	id: null,
	name: null,
	email: null
}


const userReducer = (state = initialState, action) => {
	//console.log("userReducer - action:", action)
    switch (action.type) {
        case constantUser.setUser:
			return state = {
				 ...state,
				id: action.payload._id,
				name: action.payload.name,
				email: action.payload.email,
			};
        default:
            return state;
    }
};

export default userReducer;


// ...state,
// id: action.payload._id,
// name: action.payload.name,
// email: action.payload.email,
// tel: action.payload.tel,
// taskList: action.payload.tel,
// monthlyExpensesList: action.payload.monthlyExpensesList,
// monthlyIncomesList: action.payload.monthlyIncomesList