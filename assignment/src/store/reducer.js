//Set global state
const initialState = {
	firstValue 		: 0,
	secondValue 	: 0,
	calculatedValue : 0,
}

const reducer = (state = initialState, action) => {
	//Get current states
	const newState = {...state}; 
	// Define action
	if(action.type === "ADDITION"){
		newState.calculatedValue 	= action.calculatedValue;
	}
	if(action.type === "SUBTRACTION"){
		newState.calculatedValue 	= action.calculatedValue;
	}
	if(action.type === "MULTIPLICATION"){
		newState.calculatedValue 	= action.calculatedValue;
	}
	if(action.type === "DIVISION"){
		newState.calculatedValue 	= action.calculatedValue;
	}

	return newState;
}

export default reducer;