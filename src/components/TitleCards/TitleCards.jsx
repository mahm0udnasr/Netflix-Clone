import "./TitleCards.css";
import { useRef, useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function TitleCards({ title, category, trendyUrl }) {
  function truncateText(text) {
    if (text.length > 8) {
      return text.substring(0, 8) + "...";
    }
    return text;
  }
  const cardsRef = useRef();
  const [apiData, setApiData] = useState([]);
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/${
      trendyUrl
        ? "/trending/movie/day"
        : `movie/${category ? category : "now_playing"}`
    }`,
    params: { language: "en-US", page: "1" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Y2JmYjMzZmYwZGI3Njk3Mzk4M2IzOGRjNWFlMjI2YyIsIm5iZiI6MTcyNzQxMzAxMC4wNzg2ODIsInN1YiI6IjY2ZjYzOWFiODY4NjJmYTRiNDUwOTgxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P6NzJwQO4UHrnF47-hf8jfP4YxODNxOf6ZKThUmCOaM",
    },
  };
  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  };
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setApiData(response.data.results);
      })
      .catch(function (error) {
        console.error("Found error in database...");
      });
    cardsRef.current.addEventListener("wheel", handleWheel, { passive: false });
  }, []);
  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => (
          <Link className="card" to={`/movie/player/${card.id}`} key={index} title={card.original_title} >
            <img
              src={`https://image.tmdb.org/t/p/original${card.backdrop_path}`}
              alt={card.original_title}
            />
            <p>
              {card.original_title.length > 8
                ? card.original_title.substring(0, 14) + "..."
                : card.original_title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
