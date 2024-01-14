import { useEffect, useState } from "react";
import MoviesContext from "./movies-context";
import { DUMMY_MOVIES } from "../assets/data/movie-list";

const MovieProvider = props => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        getMovies();
    }, []);

    const getMovies = () => {
        setIsLoading(true);

        setTimeout(() => {
            setMovies([]);
            const transformedMovies = DUMMY_MOVIES.map(item => {
                return {
                    id: item.id,
                    title: item.title,
                    openingText: item.opening_crawl,
                    releaseDate: item.release_date
                }
            })

            setMovies(transformedMovies)
            setIsLoading(false);
        }, 500);
    }

    const showModal = (value) => {
        setIsModalVisible(value)
    }

    const addMovie = props => {
        let id = Math.max(...movies.map(x => x.id))
        props.id = ++id;

        setMovies(prevstate => [...prevstate, props]);
        setIsModalVisible(false);
    }

    const movieCtx = {
        movieList: movies,
        isLoading: isLoading,
        error: '', // error
        getMovies: getMovies,
        showModal: showModal,
        isModalVisible: isModalVisible,
        addMovie: addMovie
    }

    return (
        <MoviesContext.Provider value={movieCtx}>
            {props.children}
        </MoviesContext.Provider>
    )
}

export default MovieProvider;