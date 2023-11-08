import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../../axios";
import { API_KEY, IMAGE_URL } from "../../constants/constants";
import YouTube from "react-youtube";

function RowPost({ title, isSmall, url }) {
    const [data, setData] = useState([]);
    const [urlId, setUrlId] = useState("")

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 1,
        },
      };

    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                setData(response.data.results);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleData = (id) => {
        console.log(id);
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
            console.log(response.data);
            if(response.data.results.length !== 0) {
                setUrlId(response.data.results[0]?.key)
            }else {
                console.log("Array is empty");
            }
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="posters">
                {data.map((item, index) => (
                    <img
                        key={index}
                        onClick={() => handleData(item.id)}
                        className={isSmall ? "small-poster" : "poster"}
                        alt="poster"
                        src={`${IMAGE_URL + item?.backdrop_path}`}
                    />
                ))}
            </div>
            {urlId && <YouTube videoId={url} opts={opts} />}
        </div>
    );
}

export default RowPost;
