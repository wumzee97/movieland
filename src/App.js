import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import searchImageRef from "./search.svg";

const App = () => {
  const API_URL = "http://www.omdbapi.com?apikey=c0fa566c";

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")

  const searchMovies = async title => {
    const response = await fetch(`${API_URL}&s=${title}}`);

    
    const data = await response.json();
    

    setMovies(data.Search || []);
  };

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  return (
    <div className="app">
      <h1>Movieland</h1>
      <div className="search">
        <input placeholder="Search Movie" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <img src={searchImageRef} alt="Search" onClick={() => searchMovies(searchTerm)} />
      </div>

      <div className="container">
        {movies.length > 0
          ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
              </div>
          )
          : (<div className="empty">
              <h2> No movies found</h2>
            </div>)}
      </div>
    </div>
  );
};

export default App;
