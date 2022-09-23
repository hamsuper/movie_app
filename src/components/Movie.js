import React from 'react';
import PropsTypes from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';

function Movie({ id, genres, year, title, summary, poster }) {
	return (
		<div className="movie">
			<img src={poster} alt={title} />
			<div className="movie__data">
				<h3 className="movie__title">
					<Link to={`/movie-detail/${id}`}>{title}</Link>
				</h3>
				<h5 className="movie__year">{year}</h5>
				<ul className="movie__genres">
					{genres.map((genre, i) => (
						<li className="movie__genre" key={i}>
							{genre}
						</li>
					))}
				</ul>
				<p className="movie__summary">{summary.slice(0, 180)}...</p>
			</div>
		</div>
	);
}

Movie.propTypes = {
	year: PropsTypes.number.isRequired,
	title: PropsTypes.string.isRequired,
	summary: PropsTypes.string.isRequired,
	poster: PropsTypes.string.isRequired,
	genres: PropsTypes.arrayOf(PropsTypes.string).isRequired,
};

export default Movie;
