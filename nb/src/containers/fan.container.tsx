import React, {useContext, useEffect, useState} from 'react';
import { useAbility } from '@casl/react';
import {connect, } from 'react-redux';
import {turnOff, turnOn, changeSpeed} from "../app/stores/reducers/FanReducer";
import { Can, AbilityContext } from '../app/casl/Can.casl'
// import {abilityRoles} from '../app/casl/ability.casl'
import updateAbility from '../app/casl/update.casl'
import {Todo} from "../app/casl/entities";
import {subject} from "@casl/ability";

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

	const ability = useAbility(AbilityContext);
	// const ability = useContext(AbilityContext);

	const [todo, setTodo] = useState(new Todo({
		assign: 3, status: 'review'
	}))

	useEffect(() => {
		// let permissions = abilityRoles('admin', 1)
		// ability.update([...permissions.rules, ...ability.rules])
		updateAbility(ability, {id: 1, role: 'staff'})
		console.log('ability', ability)
		console.log('ability.rules', ability.rules)

		console.log('ability.can', ability.can('view', 'Todo'));
	}, [])

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

			<Can I="view" a={todo}>
				<button >View Todo Condition</button>
			</Can>
			<Can I="view" a='Todo'>
				<button >View Todo xxx </button>
			</Can>
			<Can I="view" a='Todo' field={'status'} >
				<button >View Todo ttt </button>
			</Can>
			<Can I="view" a={subject('Todo', {assign: 3, status: 'review'})} >
				<button >View Todo  </button>
			</Can>
			<Can I="create" a="Todo">
				<button >Create Todo</button>
			</Can>
		</div>
	)
}

const mapStateToProps = (state: any) => {
	const {fan} = state
	const {speed, lastSpeed} = fan
	return {speed, lastSpeed}
};

const mapActions = {
	turnOff, turnOn, changeSpeed
}

export default connect(mapStateToProps, mapActions)(fanContainer)