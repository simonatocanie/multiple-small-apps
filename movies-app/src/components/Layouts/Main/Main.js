
import React, { useContext } from 'react';
import Movies from '../../Movies/Movies';
import MoviesContext from '../../../store/movies-context';
import Spinner from '../../UI/Spinner/Spinner';
import Button from '../../UI/Button/Button';
import classes from './Main.module.css';

const Main = props => {
    console.log('Main');
    const movieCtx = useContext(MoviesContext);

    let content = <p>No movies found.</p>;
    if (movieCtx.error) {
        content = <p> {movieCtx.error} </p>
    }

    if (movieCtx.movieList.length > 0) {
        content =
            <>
                <Button label='Fetch movies' className='button button-light float-right' onClick={movieCtx.getMovies} />
                <Button label='New movie' className='button button-primary float-right' onClick={movieCtx.showModal.bind(null, true)} />

                <Movies />
            </>
    }

    if (movieCtx.isLoading) {
        content = <div className={classes.containerSpinner}><Spinner /></div>
    }

    return (
        <main>
            {content}
        </main>
    )
}

export default React.memo(Main);