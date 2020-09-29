import {combineReducers} from 'redux'

const moviesReducer = () =>{
    return [
        {title:'Spiderman Homecoming',releaseDate:'05-07-2017',rating:7.4},
        {title:'Aquaman',releaseDate:'12-07-2018',rating:7},
        {title:'Black Panther',releaseDate:'02-13-2018',rating:7.6},
        {title:'Avengers Infinity War',releaseDate:'04-25-2018',rating:8.3},
        {title:'Guardians of the Galaxy',releaseDate:'07-30-2015',rating:7.9}
    ]
}

const selectedMovieReducer = (state=null,action) =>{
    switch(action.type){
        case 'MOVIE_SELECTED':
            return action.payload
        default:
            return state
    }
}

export default combineReducers({
        movies: moviesReducer,
        selectedMovie : selectedMovieReducer
    }
)