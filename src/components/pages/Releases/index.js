import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

const api_key = "68383c5ab506053b1f75c7a42988c25f";
const BASE_URL = "https://api.themoviedb.org/3";
const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;


function Releases() {
  const [data, setData] = useState([]);

  const api = axios.create({ baseURL: BASE_URL });

  const getUpcoming = api.get("movie/upcoming", { params: { api_key } });

  useEffect(() => {
    getUpcoming.then((res) => {
      setData(res.data.results);
    });
  }, []);
  return (
    <div>
      <div className="grid">
          {data.map((movie) => (
            <div className="item">
              <img src={getImage(movie.poster_path)} />
              <h4>{movie.original_title}</h4>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Releases
