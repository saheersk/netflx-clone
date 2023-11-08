import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../axios";
import { API_KEY, IMAGE_URL } from "../../constants/constants.js";

function Banner() {
    const [movie, setMovie] = useState({});
    const [random] = useState(() => Math.floor(Math.random() * 20));

    useEffect(() => {
        axios
            .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
            .then((response) => {
                setMovie(response.data.results[random]);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div
            className="banner"
            style={{ backgroundImage: `url(${movie?.backdrop_path ? IMAGE_URL + movie?.backdrop_path : ""})` }}
        >
            <div className="content">
                <h1 className="title">{movie?.title}</h1>
                <div className="banner-buttons">
                    <button className="button">Play</button>
                    <button className="button">My list</button>
                </div>
                <h1 className="description">{movie?.overview}</h1>
            </div>
            <div className="fade-bottom"></div>
        </div>
    );
}

export default Banner;
