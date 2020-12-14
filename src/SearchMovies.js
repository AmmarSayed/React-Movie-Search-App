import React, { useState } from 'react';
import MovieCard from './MovieCard';
function SearchMovies() {
	const [ query, setQuery ] = useState('');

	const [ movies, setMovies ] = useState([]);

	const searchMovies = async (e) => {
		e.preventDefault();

		const url = `https://api.themoviedb.org/3/search/movie?api_key=8e202c7f2c13760f068a15c6dde190a5&language=en-US&query=${query}&page=1&include_adult=false`;

		try {
			const res = await fetch(url);
			const data = await res.json();
			setMovies(data.results);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<section>
			<form className='form' onSubmit={searchMovies}>
				<label htmlFor='query' className='lable'>
					Movie Name
				</label>
				<input
					type='text'
					name='query'
					placeholder='i.e Jurassic Park...'
					className='input'
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				<button className='btn' type='submit'>
					Search
				</button>
			</form>

			<div className='card-list '>
				{movies.filter((movie) => movie.poster_path).map((movie) => <MovieCard movie={movie} key={movie.id} />)}
			</div>
		</section>
	);
}

export default SearchMovies;
