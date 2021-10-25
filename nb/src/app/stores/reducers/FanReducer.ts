const TURN_OFF = "TURN_OFF"
const TURN_ON = "TURN_ON"
const CHANGE_SPEED = "CHANGE_SPEED"

const initState = {
	speed: 0,
	lastSpeed: 1,
}

const reducer = (state = initState, action: any) => {
	console.log(action)
	switch (action.type) {
		case CHANGE_SPEED:
			return {
				...state,
				speed: action.payload
			}
		case TURN_OFF:
			return {
				...state,
				speed: 0,
				lastSpeed: state.speed
			}
		case TURN_ON:
			return {
				...state,
				speed: state.lastSpeed
			}
		default:
			return state
	}
}

/**
 * Actions
 */
const turnOff = () => ({
	type: TURN_OFF
})

const turnOn = () => ({
	type: TURN_ON
})

const changeSpeed = (speed: number) => ({
	type: CHANGE_SPEED,
	payload: speed
})

export {TURN_ON, TURN_OFF, CHANGE_SPEED}
export {turnOff, turnOn, changeSpeed}

export default reducer