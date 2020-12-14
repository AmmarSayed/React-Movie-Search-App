import React from 'react';
import ReactDOM from 'react-dom';
import SearchMovie from './SearchMovies';
import './index.css';
// import App from './App';

class Main extends React.Component {
	render() {
		return (
			<div className='container'>
				<h1>Hello world!</h1>
				<SearchMovie />
			</div>
		);
	}
}

ReactDOM.render(<Main />, document.getElementById('root'));
