import React from 'react'

function MovieList(props) {
    const FavouriteComponent=props.favouriteComponent
    return (
        <div className='d-flex p-2'>
            {
                props.movies.map((movie, index) => {
                    return (
                        <>
                            <div className="image-container d-flex flex-direction-column justify-content-start m-1 p-2">
                                <img src={movie.Poster} alt="poster" />
                                <div onClick={()=>props.handleFavouriteClick(movie)}>
                                    <FavouriteComponent />
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default MovieList