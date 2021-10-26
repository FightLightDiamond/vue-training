import {connect} from "react-redux";
import {useState} from "react";
import {createTodo} from './todoSlice'

const TodoContainer = (props: any) => {
	const [text, setText] = useState("")
	const {items, onCreate, loading} = props

	return (
		<div>
			Loading: {loading + ''}
			<input type="text" value={text}
			       onChange={(e) => setText(e.target.value)}/>
			<button onClick={() => {
				onCreate(text)
				setText('')
			}}>Add</button>
			<ul>
				{
					items.map((todo: string, key: number) => (
						<li key={key}>{todo}</li>
					))
				}
			</ul>
		</div>
	)
}

const mapStateToProps = (state: any) => {
	const {todo} = state
	const {items, loading} = todo
	return {items, loading}
};

const mapActions = {
	onCreate: createTodo,
}

export default connect(mapStateToProps, mapActions)(TodoContainer)