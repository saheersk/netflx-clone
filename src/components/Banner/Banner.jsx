import React from "react";
import "./Banner.css";

function Banner() {
    return (
        <div className="banner">
            <div className="content">
                <h1 className="title">Movie Name</h1>
                <div className="banner-buttons">
                    <button className="button">Play</button>
                    <button className="button">My list</button>
                </div>
                <h1 className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo molestias impedit facere. Est
                    dignissimos adipisci dolor, illo consequuntur delectus magni, harum sapiente quidem consectetur
                    minima dolore vel laboriosam incidunt accusantium?
                </h1>
            </div>
            <div className="fade-bottom"></div>
        </div>
    );
}

export default Banner;
