import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DRC from "./DRC";
import axios from "axios";
import Spinner from "react-bootstrap/esm/Spinner";

export default function MoviesDetails() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log(res.data);
      setMovies(res.data);
    });
  }, []);

  const { id } = useParams();
  const movie = movies.find((a, b) => a.id == id);
  console.log(movies);
  if (!movie) {
    return <Spinner />;
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <DRC
        img={movie.image}
        title={movie.title}
        desc={movie.description}
        info={movie.category}
      />
    </div>
  );
}
