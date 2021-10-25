const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS"

const initState = {
	items: []
}

const reducer = (state = initState, action: any) => {
	switch (action.type) {
		case FETCH_PRODUCTS_SUCCESS:
			return {
				...state,
				items: [1, 2, 3, 4]
			}
		case 'FETCH_PRODUCT_FAIL':
		default:
			return state
	}
}

export {FETCH_PRODUCTS_SUCCESS}
export default reducer