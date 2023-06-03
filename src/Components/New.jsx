import React, { useState, useEffect } from 'react';
import SearchBox from './SearchBox';
const New = () => {
	const [movies, setMovies] = useState([]);

	const [searchValue, setSearchValue] = useState('');

	const getMovieRequest = async (searchValue) => {
		const url = `https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query=${searchValue}&page=1`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

 console.log(movies)
	return (
		<div className='container-fluid movie-app'>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
		</div>
	);
};

export default New;

