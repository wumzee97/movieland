import React from "react";

function MovieCard ({movie: {Title,Poster,Type,Year}}) {
    return (
       <div className="movie">
        <div>
            <p>{Year}</p>
        </div>
        <div>
            <img src={Poster ? Poster : "https://via.placeholder.com/400"} alt={Title} />
        </div>

        <div>
            <span>{Type}</span>
            <h3>{Title}</h3>
        </div>
       </div> 
    )
}

export default MovieCard