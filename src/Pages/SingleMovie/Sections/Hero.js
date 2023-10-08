import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';


const Hero = () => {
    const [types, setTypes] = useState([]);
    const [movies, setMovies] = useState([]);
    const { typeid } = useParams();
    const { id } = useParams();
    useEffect(() => {
        axios
            .get(`https://651d8b9844e393af2d59fb79.mockapi.io/types/${typeid}/movies/${id}`)
            .then((response) => {
                setMovies(response.data);
            });
    }, [id]);
    useEffect(() => {
        axios
            .get(`https://651d8b9844e393af2d59fb79.mockapi.io/types/${typeid}`)
            .then((response) => {
                setTypes(response.data);
            });
    }, [typeid]);
    return (
        <div id="content_hero" style={{ backgroundImage: `url(${movies.image})` }}>

            <img src="assets/images/scroll-arrow.svg" alt="Scroll down" className="scroll" />


            <div className="container">
                <div className="row blurb scrollme animateme" data-when="exit" data-from="0" data-to="1" data-opacity="0" data-translatey="100">
                    <div className="col-md-9">
                        <span className="title">{types.name}</span>
                        <h1>{movies.name}</h1>
                        <p>{movies.description}</p>
                        <div className="buttons">
                            <span className="certificate">
                                PG
                            </span>
                            <a href="https://youtu.be/ScMzIvxBSi4" data-vbtype="video" className="venobox btn btn-default">
                                <i className="material-icons">play_arrow</i>
                                <span>Play trailer</span>
                            </a>
                            <div className="star-rating">
                                <i className="material-icons">star_rate</i>
                                <i className="material-icons">star_rate</i>
                                <i className="material-icons">star_rate</i>
                                <i className="material-icons">star_rate</i>
                                <i className="material-icons">star_rate</i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero
