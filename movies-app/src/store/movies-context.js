
import React from 'react';

const MoviesContext = React.createContext({
    movieList: [],
    isLoading: false,
    isModalVisible: false,
    error: null,
    getMovies: () => { },
    showModal: () => { },
    addMovie: () => { }
});

export default MoviesContext;