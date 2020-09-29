import React,{Component} from 'react';
import './App.css';
import MovieDetails from './components/MovieDetails';
import MovieList from './components/MovieList';


class App extends Component {
  render(){
  return (
    <div className="App">
      <h1>Redux Movies</h1>
      <div>
      <MovieDetails/>
      <MovieList/>
      </div>
    </div>
  );
  }
}


export default App;
