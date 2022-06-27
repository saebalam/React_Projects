import React, { useState,useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavourites from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites';

function App() {

  const [movies, setMovies] = useState([])
  const [searchValue,setSearchValue] = useState('star')
  const [favouriteMovie,setFavouriteMovie] =  useState([])

  const getMovieRequest = async(searchValue) =>{
    const url= `http://www.omdbapi.com/?s=${searchValue}&apikey=bb92993e`
    const response = await fetch(url);
    const responseJson= await response.json()
    console.log(responseJson);

    if(responseJson.Search){
      setMovies(responseJson.Search)
    }
  }
  useEffect(() => {
    getMovieRequest(searchValue)
  }, [searchValue])

  useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('favourites')
		);

		if (movieFavourites) {
			setFavouriteMovie(movieFavourites);
		}
	}, []);

  const saveToLocalStorage = (items)=>{
      localStorage.setItem("favourites",JSON.stringify(items))
  }

  const addFavouriteMovie=(movie)=>{
    if(favouriteMovie.indexOf(movie) === -1){
    const newFav=[...favouriteMovie,movie] 
    setFavouriteMovie(newFav)
    saveToLocalStorage(newFav)
    }
  }

  const removeFavouriteMovie=(movie)=>{
    const newFav=favouriteMovie.filter(
      (favourite)=> favourite.imdbID!==movie.imdbID
    )
    console.log(newFav);
    setFavouriteMovie(newFav)
    saveToLocalStorage(newFav)
  }

  return (
    <div className="container-fluid movie-app bg-dark color-light">
      <div className="header d-flex align-items-center justify-content-between pt-3 mb-1">
        <MovieListHeading heading={"Movies"}/>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <MovieList 
          movies={movies}
          handleFavouriteClick={addFavouriteMovie}
          favouriteComponent={AddFavourites}
        />
      </div>
      <div>
        <MovieListHeading heading="Favourites" />
      </div>
      {
        favouriteMovie.length>0
        ? (<div>
          <MovieList 
          movies={favouriteMovie} 
          handleFavouriteClick={removeFavouriteMovie}
          favouriteComponent={RemoveFavourites}
          />
        </div>)
        : (<h4 className='empty-favourites'>Add to Favourites to see </h4>)
      }
      
    </div>
  );
}

export default App;
