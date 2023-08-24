import React, { useEffect, useState } from "react";
import axios from "../global/http/axios";
import requests from "../global/http/Request";
import "../../assets/css/banner/Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchShahOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate(string, n) {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="sm_Banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="sm_bannerContents">
        <h1 className="sm_bannerTitle">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <p className="sm_bannerDescription">{truncate(movie?.overview, 200)}</p>
        <div className="sm_bannerButtons">
          <button className="sm_bannerButton play">Play</button>
          <button className="sm_bannerButton list">My List</button>
        </div>
      </div>
      <div className="sm_banner_fadeBottom" />
    </header>
  );
}

export default Banner;
