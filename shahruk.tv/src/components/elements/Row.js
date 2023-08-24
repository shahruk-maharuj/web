import axios from "../global/http/axios";
import React, { useEffect, useState } from "react";
import "../../assets/css/Row/Row.css";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="sm_Row">
      <h2>{title}</h2>
      <div className="sm_RowPosters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`sm_rowPoster ${isLargeRow && "sm_rowPosterLarge"}`}
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;
