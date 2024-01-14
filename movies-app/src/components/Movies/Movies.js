import React, { useContext } from 'react';
import MoviesContext from '../../store/movies-context';
import MovieItem from './MovieItem/MovieItem';
import NewMovie from './NewMovie/NewMovie';
import classes from './Movies.module.css';

const Movies = () => {
    let ctx = useContext(MoviesContext);
    let moviesItems = ctx.movieList.map(item =>
        <MovieItem item={item} key={item.id} />
    )

    return (
        <>
            {ctx.isModalVisible && <NewMovie />}
            <div className={classes.moviesContainer}>
                <h2>Movie list</h2>
                {moviesItems}
            </div>
        </>
    );
}

export default Movies;