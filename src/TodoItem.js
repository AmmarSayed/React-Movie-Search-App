import React from 'react';
import './App.css';

const TodoItem = ({ text, completed }) => {
	return (
		<article className='todo-item'>
			<input type='checkbox' checked={completed} />
			<p>{text}</p>
		</article>
	);
};
export default TodoItem;
