const state = {speed: 0, lastSpeed: 1}

/**
 * Reducer
 * @param action
 */
const receive = (action) => {
	const {type, data} = action
	if (type === 'CHANGE_SPEED') {
		state.speed = data
	} else if (type === 'TURN_OFF') {
		state.lastSpeed = state.speed
		state.speed = 0
	}
}

/**
 * Sum = 0
 */
[1, 2, 3, 4].reduce((sum, num) => {
	return sum + num
}, 0)

function reduce(arr, cb, initValue) {
	if (initValue === undefined) {
		initValue = arr[0]
		arr = arr.slice(1)
	}

	for (let a of arr) {
		initValue = cb(initValue, a)
	}

	return initValue
}

reduce([1, 2, 3, 4], (sum, num) => {
	return sum + num
}, 0)

const actions = [
	{type: 'CHANGE_SPEED', payload: 3},
	{type: 'TURN_OFF',},
	{type: 'TURN_ON',},
]

const initState = {
	speed: 0,
	lastSpeed: 1
}

reduce(actions, (state, action) => {
	switch (action.type) {
		case 'CHANGE_SPEED':
			return {
				...state,
				speed: action.payload
			}
		case 'TURN_OFF':
			return {
				...state,
				speed: 0,
				lastSpeed: action.speed
			}
		case 'TURN_ON':
			return {
				...state,
				speed: state.lastSpeed
			}
		default: return state
	}
}, initState)

/*
* connect
* */