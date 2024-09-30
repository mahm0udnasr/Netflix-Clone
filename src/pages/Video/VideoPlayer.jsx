import "./VideoPlayer.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
export default function VideoPlayer() {
  const {id} = useParams();
  const navigate = useNavigate();
  const [videoDate, setVideoData] = useState([
    {
      name: "",
      key: "",
      published_at: "",
      type: "",
    },
  ]);
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${id}/videos`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Y2JmYjMzZmYwZGI3Njk3Mzk4M2IzOGRjNWFlMjI2YyIsIm5iZiI6MTcyNzQxMzAxMC4wNzg2ODIsInN1YiI6IjY2ZjYzOWFiODY4NjJmYTRiNDUwOTgxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P6NzJwQO4UHrnF47-hf8jfP4YxODNxOf6ZKThUmCOaM",
    },
  };
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setVideoData(response.data.results[0]);
      })
      .catch(function (error) {
        console.error("Some Error in Database Or Player");
      });
  }, []);
  return (
    <div className="videoplayer">
      <img src={back_arrow_icon} alt="back to last pagw with back arrow icon" onClick={()=> navigate(-2)}/>
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${videoDate.key}`}
        title="clean your life"
        frameBorder="0"
        allowFullScreen
        allow="accelerometer; autoplay; encrypted-media; gyroscope;"
      ></iframe>
      <div className="player-info">
        <p>{videoDate.published_at ? videoDate.published_at.split('T')[0] : "yyyy-mm-dd"}</p>
        <p>{videoDate.name}</p>
        <p>{videoDate.type}</p>
      </div>
    </div>
  );
}
