
// const MOVIE_SELECTED = 'MOVIE_SELECTED'

const selectMovie = (movie) => {
    return {
        type: 'MOVIE_SELECTED',
        payload: movie
    }
}

export default selectMovie