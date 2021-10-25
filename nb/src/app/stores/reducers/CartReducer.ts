const initState = {
	// items: [],
	total: 5
}

const reducer = (state = initState, action: any) => {
	switch (action.type) {
		case 'ADD_TO_CART':
		case 'REMOVE_FROM_CART':
		default:
			return state
	}
}

export default reducer