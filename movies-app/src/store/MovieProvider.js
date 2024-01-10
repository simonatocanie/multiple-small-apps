import { DUMMY_MOVIES } from "../assets/data/movie-list";
import MoviesContext from "./movies-context";

const MovieProvider = props => {
    const movieCtx = {
        movieList: DUMMY_MOVIES.results
    }

    return (
        <MoviesContext.Provider value={movieCtx}>
            {props.children}
        </MoviesContext.Provider>
    )
}

export default MovieProvider;