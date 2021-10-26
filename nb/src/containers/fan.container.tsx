import {connect} from 'react-redux';
import {turnOff, turnOn, changeSpeed} from "../app/stores/reducers/FanReducer";

const mapStateToProps = (state: any) => {
	const {fan} = state
	const {speed, lastSpeed} = fan
	return {speed, lastSpeed}
};

const mapActions = {
	turnOff, turnOn, changeSpeed
}

interface IProps {
	speed: number,
	lastSpeed: number,
	turnOff: () => {},
	turnOn: () => {},
	changeSpeed: (speed: number) => {}
}

const fanContainer = ({
	                      speed,
	                      lastSpeed,
	                      turnOff,
	                      turnOn,
	                      changeSpeed
                      }: IProps) => {
	return (
		<div>
			<p>Speed: {speed}</p>
			<p>Last Speed: {lastSpeed}</p>
			<button onClick={() => changeSpeed(1)}>1</button>
			<button onClick={() => changeSpeed(2)}>2</button>
			<button onClick={() => changeSpeed(3)}>3</button>
			{
				speed
					? <button onClick={turnOff}>OFF</button>
					: <button onClick={turnOn}>ON</button>
			}
		</div>
	)
}

export default connect(mapStateToProps, mapActions)(fanContainer)