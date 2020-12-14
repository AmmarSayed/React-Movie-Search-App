import React from 'react';
import TodoItem from './TodoItem';
import ToDoes from './todosData';
import './App.css';

const App = () => {
	const toDoItems = ToDoes.map((e) => <TodoItem key={e.id} {...e} />);
	return <main className='App-header todo-list'>{toDoItems}</main>;
};

export default App;
