import React from "react";
import './Movie.css'

const Movie = ({ title, genres, cover, summary }) => {
    return (
        <div className='movie-container'>
            <img src={cover} alt={title}></img>
            <h3>{title}</h3>
            <h4>{genres.join(" ")}</h4>
            <p>{summary}</p>
        </div>
    )
}

export default Movie