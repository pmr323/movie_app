import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: {movies},
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?genre=animation&sort_by=like_count');
    // console.log(movies);
    this.setState({isLoading: false, movies});//키:키값 이름이 동일하면 movies: movies
  } 


  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({isLoading: false});
    // },6000)
    this.getMovies();
  }//6초뒤에 setState가 false로 바뀌게

  render() {
    const {isLoading, movies} = this.state;//구조분해할당
    return (
      <div>{isLoading ? 'Loading...' : movies.map(movie => (<Movie
          id = {movie.id}
          year = {movie.year}
          title = {movie.summary}
          poster = {movie.medium_cover_image}
          genre = {movie.genres}
       />))
       }</div>
    )
  }
}

export default App;