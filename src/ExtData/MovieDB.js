import React, { Component } from 'react';

class MovieDB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({isLoading:true});
    fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=13&api_key=0e90da3d1d5b2554b95ae8e121183b3a')
      .then(response => response.json())
      .then(data => this.setState({ movies: data.results, isLoading:false }));
  }

  render() {
      if (this.state.isLoading) {
        return <p>Cargando...</p>
      }
      return (
          <div>
            {/* {this.state.movies} */}
            {this.state.movies.map(movie => 
              <li key={movie.title}>{movie.title}</li>
            )}
          </div>
      )
  }
}

export default MovieDB;